---
"title": "底层数据结构"
category:
  - "Redis"
tag:
  - "Redis"
---

## 对象系统 

Redis使用对象来表示每一个键值对，在Redis中创建的每一个键值对，Redis都会为我们创建至少两个RedisObject对象，一个是键对象，即key，一个是值对象，即value。键对象的数据结构为字符串，而值对象因其保存的数据内容不一样，因而其使用的数据结构也不一样。

![20230706092329](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230706092329.png)


```c
// Redis 对象
typedef struct redisObject {
  
  // 类型，标识该对象是什么类型的对象（String 对象、 List 对象、Hash 对象、Set 对象和 Zset 对象）；
  unsigned type:4;
  
  // 对齐位，为了保证内存紧凑
  unsigned notused:2;
  
  // 编码方式，标识该对象使用了哪种底层的数据结构；
  unsigned encoding:4;
  
  // LRU 时间（相对于 server.lruclock）
  unsigned lru:22;
  
  // 引用计数
  int refcount;
  
  // 指向底层数据结构的指针；
  void *ptr;

} robj;
```


type记录了对象`所保存的值的类型`，其枚举值列表如下：
```c
/*
* 对象类型
*/
#define REDIS_STRING 0    // 字符串
#define REDIS_LIST 1      // 列表
#define REDIS_SET 2       // 集合
#define REDIS_ZSET 3      // 有序集
#define REDIS_HASH 4      // 哈希表
```

encoding记录了对象`所保存的值的编码`，其枚举值列表如下：
```c
/*
* 对象编码
*/
#define REDIS_ENCODING_RAW 0          // 编码为字符串
#define REDIS_ENCODING_INT 1          // 编码为整数
#define REDIS_ENCODING_HT 2           // 编码为哈希表
#define REDIS_ENCODING_ZIPMAP 3       // 编码为 zipmap
#define REDIS_ENCODING_LINKEDLIST 4   // 编码为双端链表
#define REDIS_ENCODING_ZIPLIST 5      // 编码为压缩列表
#define REDIS_ENCODING_INTSET 6       // 编码为整数集合
#define REDIS_ENCODING_SKIPLIST 7     // 编码为跳跃表
```

## SDS 

### 传统C语言中的字符串特点

- 以“\0”结束，就意味着不能保存除了文本数据的其他数据内容，也就是无法保存视频、音频、图片等数据内容，即二进制不安全（视频、音频、图片等数据内容中可能会有“\0”）；
- 操作方法有内存溢出的风险；
- 操作字符串的方法效率不高，如获取字符串长度的时间复杂度为O（n）；

### SDS源码的迭代

- 3.2之前

```C
struct sdshdr{
    //int 记录buf数组中未使用字节的数量 
    int free;
    
    //int 记录buf数组中已使用字节的数量，即sds的长度 
    int len;
    
    //字节数组用于保存字符串
    char buf[];
}
```

看出 Redis 3.2 之前 SDS 内部是一个带有长度信息的字节数组。

- 3.2及之后
```
typedef char *sds;

struct __attribute__ ((__packed__)) sdshdr5 { // 对应的字符串长度小于 1<<5
    unsigned char flags;
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr8 { // 对应的字符串长度小于 1<<8
    uint8_t len; /* 已使用长度，1 字节存储 */
    uint8_t alloc; /* 总长度 */
    unsigned char flags; 
    char buf[]; // 真正存储字符串的数据空间
};
struct __attribute__ ((__packed__)) sdshdr16 { // 对应的字符串长度小于 1<<16
    uint16_t len; /* 已使用长度，2 字节存储 */
    uint16_t alloc; 
    unsigned char flags; 
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr32 { // 对应的字符串长度小于 1<<32
    uint32_t len; /* 已使用长度，4 字节存储 */
    uint32_t alloc; 
    unsigned char flags; 
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr64 { // 对应的字符串长度小于 1<<64
    uint64_t len; /* 已使用长度，8 字节存储 */
    uint64_t alloc; 
    unsigned char flags; 
    char buf[];
};

```

这样就可以针对不同长度的字符串申请相应的存储类型，从而有效的节约了内存使用。

### 数据类型 

Redis根据为了更好的利用内存，就根据保存的数据的不同，然后使用不同的数据类型保存。

- int： 存储的是整数且长度小于20字节
- embstr： 存储的是字符串且长度小于等于44字节
- raw： 存储的是动态字符串，且长度大于44字节且小于512Mb
  - redis 2.+ 是 32 字节
  - redis 3.0-4.0 是 39 字节
  - redis 5.0 是 44 字节

::: tip 为什么是44字节？

1. 64字节 = redisObject + SDS （内存分配器管理的大小就是64字节）
2. redisObject = 16字节
3. SDS = 4字节（包括一个字节的结束符 \0 ） + 44字节的buf[] 

![20230706181113](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230706181113.png)
:::

### 使用了SDS之后

- `空间预分配`减少了内存频繁分配次数
  - 如果修改后len长度将小于1M，这时分配给free的大小和len一样,例如修改过后为10字节, 那么给free也是10字节，buf实际长度变成了10+10+1 = 21byte；
  - 如果修改后len长度将大于等于1M,这时分配给free的长度为1M,例如修改过后为30M,那么给free是1M.buf实际长度变成了30M+1M+1byte；
- `惰性空间释放`
  - 并不会立即回收空闲空间，而是使用free指针来记录空闲空间，以备后续使用；
- `二进制安全`，保存的数据的类型更为丰富；
- 操作方法`不会产生内存溢出`；
- 依然使用“\0”的方式结尾，目的是为了复用C的一些方法，此外，`操作方法的时间复杂度更低`


## intset

Redis作为一个内存数据库，首先要能够保存整数吧，又为了达到一种不浪费内存的目的，设计出一种整数集合的数据结构。

```
//每个intset结构表示一个整数集合
typedef struct intset{
    //编码方式
    uint32_t encoding;

    //集合中包含的元素数量，即数组长度
    uint32_t length;
    
    //保存元素的数组
    int8_t contents[];
} intset;
```

注意：

- contents[]数组中保存了整数集合中实际的数据元素，数据元素的编码方式是由 encoding 变量决定；也就是说，
  - 如果 encoding 属性值为 INTSET_ENC_INT16，那么 contents 就是一个 int16_t 类型的数组，数组中每一个元素的类型都是 int16_t，保存的数据范围是(-32768——32767)；
  - 如果 encoding 属性值为 INTSET_ENC_INT32，那么 contents 就是一个 int32_t 类型的数组，数组中每一个元素的类型都是 int32_t；
  - 如果 encoding 属性值为 INTSET_ENC_INT64，那么 contents 就是一个 int64_t 类型的数组，数组中每一个元素的类型都是 int64_t；

### 升级过程 

一个保存了三个元素（1， 2， 3）的 int16_t 类型的数组集合中保存了一个 65535 ，则在保存 65535 需要进行升级，升级过程如下：

![20230706163008](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230706163008.png)

可大概分成三个步骤：
1. 扩容，原本空间的大小之上再扩容多 4x32-3x16=80 位，这样就能保存下 4 个类型为 int32_t 的元素。 
2. 移动已有的元素，从后往前移动；
3. 在最后添加新元素；

### 总结

- 整数集合是 Set 数据类型的值对象的数据结构
- 支持升级操作，而不是直接使用 int64_t 的数据结构保存元素的原因是为了节省内存使用；
- 不支持降级操作；



## linkedlist

::: tip 发展过程

1. 数组
- 使用连续内存以达到随机访问的目的，
- 其插入和删除操作就非常低效，因为需要移动元素；
- 连续内存的条件过于苛刻，在空闲区域中不一定会有满足要求的连续区域；
- 多为事先声明的方式进行分配大小，有内存溢出的风险；如果元素个数较少，还会产生内存浪费的问题；

2. 单向链表
- 使用指针的方式把链表元素连接成串；
- 解决了数据的插入和删除操作低效的问题，插入和删除元素不需要移动元素；
- 查询元素时间复杂度变成O（n）【最坏情况】

![20230706173704](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230706173704.png)

3. 单向循环链表
- 把单向链表中的尾节点的next指针指向头节点

![20230706174238](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230706174238.png)

4. 双向链表
- 使用前驱指针和后继指针把前面元素和后续元素连接成串；
- 解决了数据的插入和删除操作低效的问题，插入和删除元素不需要移动元素；
- 查找元素时间复杂度变成O（1）

![20230706173913](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230706173913.png)

5. 双向循环链表
- 把双向链表中的尾节点的后继指针指向头节点，并把头节点的前驱指针指向尾节点；

![20230706174310](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230706174310.png)

::: 


### Redis的实现 - 双向无环链表

- 双向
- 无环


```
typedef struct listNode{ 
	// 前置节点 
	struct listNode *prev; 
	
  // 后置节点 
	struct listNode *next; 
	
  // 节点的值 
	void *value; 
} listNode;
```

![双向无环链表](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230707142602.png)

为了更好的管理节点，Redis又设计出list数据结构，用来管理双向无环链表。

```
typedef struct list{
  //表头节点
  listNode *head;
  
  //表尾节点
  listNode *tail;
  
  //链表所包含的节点数量
  unsigned long len;
  
  //节点值复制函数
  void *(*dup)(void *ptr);
  
  //节点值释放函数
  void *(*free)(void *ptr);
  
  //节点值对比函数
  int (*match)(void *ptr,void *key);
}list;

```

![linkedlist](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230706184623.png)

---

## ziplist

::: tip 压缩列表 VS 数组 

数组中要求保存的元素长度要一样，属于`内存紧凑型`的数据结构。但是这种数据结构还有一个特点，就是如果要保存的元素的长度不一样，那么就会使用一些补齐的措施来“人为地”保证元素长度一致，这无形中`造成了内存浪费`的问题。但是内存紧凑的特性又非常吸引人，于是人们设计出压缩列表的数据结构，为每一个元素增加描述字段来表示后续保存的数据的长度及类型等信息，然后把这样具有描述信息+实际数据内容的元素紧凑的保存在一起，就形成了压缩列表。

压缩列表的出现，有效的解决了数据元素等长特性带来的空间浪费问题，又发挥了数组结构的内存紧凑性的优势。

:::

![20230707143744](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230707143744.png)

压缩列表的描述信息部分：
- zlbytes，记录整个压缩列表占用的内存字节数；
- zltail，记录压缩列表「尾部」节点距离起始地址有多少字节，也就是列表尾的偏移量；
- zllen，记录压缩列表包含的节点数量；
- zlend，标记压缩列表的结束点，固定值 0xFF（十进制255）；

压缩列表的数据部分——entry，每一个元素都包含：
- prevlen，记录了「前一个节点」的长度，目的是为了实现从后向前遍历；如果前一个节点的长度小于 254 字节，那么 prevlen 属性需要用 1 字节的空间来保存这个长度值；如果前一个节点的长度大于等于 254 字节，那么 prevlen 属性需要用 5 字节的空间来保存这个长度值；
- encoding，记录了当前节点实际数据的「类型和长度」，类型主要有两种：字符串和整数。
- data，记录了当前节点的实际数据，类型和长度都由 encoding 决定；


### 连锁更新 

压缩列表除了查找一个元素的过程时间复杂度较高外，还有一个问题就是连锁更新问题。

在修改压缩列表中的某一个元素时，由于元素长度的变化，会导致这个元素后续的所有元素的存储位置都发生变化。这就是连锁更新。这就造成了内存空间的多次分配过程，从而造成压缩列表的性能下降。

### 总结

1. 压缩列表吸收了数组的`内存紧凑`的特性，提高了内存访问效率；但由于每一个元素都需要额外的描述信息以及对整个压缩列表的描述信息，因此也`会产生额外的空间浪费`；
2. 此外`压缩列表的查找操作的效率也略逊于数组的查找效率`；
3. 压缩列表的更新操作，`可能会产生连锁更新`的问题；

因此，也正是因为上述的压缩列表的特性，也使得`压缩列表多适用于数据元素较少的业务场景`。

## quicklist 

quicklist （ Redis 3.2 引入的数据类型 ，而quicklist底层使用压缩列表和双向无环列表组成，具体见《Redis设计与实现》第8.3章。）本质上，quicklist是由双向无环列表和ziplist构成的复合数据结构。

```
typedef struct quicklist { // src/quicklist.h
    quicklistNode *head;
    quicklistNode *tail;
    unsigned long count;        /* ziplist 的个数 */
    unsigned long len;          /* quicklist 的节点数 */
    unsigned int compress : 16; /* LZF 压缩算法深度 */
    //...
} quicklist;
typedef struct quicklistNode {
    struct quicklistNode *prev;
    struct quicklistNode *next;
    unsigned char *zl;           /* 对应的 ziplist */
    unsigned int sz;             /* ziplist 字节数 */
    unsigned int count : 16;     /* ziplist 个数 */
    unsigned int encoding : 2;   /* RAW==1 or LZF==2 */
    unsigned int container : 2;  /* NONE==1 or ZIPLIST==2 */
    unsigned int recompress : 1; /* 该节点先前是否被压缩 */
    unsigned int attempted_compress : 1; /* 节点太小无法压缩 */
    //...
} quicklistNode;
typedef struct quicklistLZF {
    unsigned int sz; 
    char compressed[];
} quicklistLZF;

```

![quicklist](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/notes/quicklist.png)

- 新增
  - 判断 head 节点是否可以插入，可以插入，就在 ziplist 上插入，否则，就新建一个 quickListnode 节点进行插入
- 删除
  - 单个元素： 遍历索引
  - 区间元素： 先找到start下标的元素所在的quicklistnode，然后删除ziplist上的数据，如果ziplist上能删除的元素个数小于要删除的元素个数，就会移动到下一个quicklistnode，然后进行删除

## hashtable 

::: tip 前置知识点：哈希及哈希表

1. 什么是哈希？

数组这种数据结构中数据元素的内容和在数组中的位置并没有逻辑关系，因为它是通过移动指针来获取数据元素的（是操作系统提供的访问数据的一种机制）。但是哈希提供了一种数据内容与数据存放位置的逻辑关系，也就是说哈希可以通过数据的内容来确定数据存放位置。主要思想是提供一种算法，使数据元素内容与数据存放的位置关联起来。存储的数据结构叫做哈希表，所使用的算法就是哈希。也叫做散列表和散列算法。

2. 哈希具有的特性？

同时具有确定性和不确定性。确定性：key1=key2，那么hash(key1)=hash(key2)；不确定性： key1≠key2，有可能会存在hash(key1)=hash(key2)。确定性，使得根据数据元素的内容获取这个数据元素存放的位置变为可能。不确定性，又使得哈希表在存储数据时，必须要考虑哈希冲突的问题。

3. 哈希表的实现方式？

有两种常见的方式，一种是开放寻址方式，一种是拉链法。开放寻址方式，就是把数据元素放到一个数组中。如果遇到hash（key1） 之后发现这个位置上已经存放有元素时，就直接往下判断，直到找到一个空闲的位置：

![](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/notes/hash-open-find-address.png)

拉链法，就是利用一个数组和多个链表的方式存储数据。数组中保存hash（key）的结果，实际的数据内容保存在与数组相关联的链表上，也就是同一个链表上的保存的所有数据都是hash冲突的数据元素。

![](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/notes/hash-linkedlist.png)

4. 装载因子 

在哈希表的实现中，以拉链法为例，链表上的数据过多，就代表着哈希冲突比较严重，此时数据元素的查找效率必定会降低；扩大数组的长度，同样多的数据就可以减少哈希冲突，但是这会造成空间的浪费。因此哈希冲突和空间浪费要有一个平衡。装载因子=已有元素个数 / 哈希表能保存的元素总数，装载因子过高容易引起哈希冲突，过低造成存储空间浪费。为了让装载因子处于一个合适的范围，需要对hashtable进行扩容和缩容。

:::

Redis中的Hash数据结构如下：

![存储结构](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/notes/hash-hashtable.png)

```
typedef struct dict{
  //类型特定函数
  void *type;
  
  //私有数据
  void *privdata;
  
  //哈希表，两个元素
  dictht ht[2];
  
  //rehash到的索引值， 当rehash不在进行时 值为-1，可以看作是
  int trehashidx; 
}dict;

typedef struct dictType{
  //计算哈希值的函数 
  unsigned int  (*hashFunction) (const void *key);
  
  //复制键的函数
  void *(*keyDup) (void *privdata,const void *key);
  
  //复制值的函数
  void *(*keyDup) (void *privdata,const void *obj);
  
  //复制值的函数
  void *(*keyCompare) (void *privdata,const void *key1, const void *key2);
  
  //销毁键的函数
  void (*keyDestructor) (void *privdata, void *key);
  
  //销毁值的函数
  void (*keyDestructor) (void *privdata, void *obj);
}dictType;


typedef struct dictht{
  //哈希表数组，C语言中，*号是为了表明该变量为指针，有几个* 号就相当于是几级指针，这里是二级指针，理解为指向指针的指针
  dictEntry **table;
  
  //哈希表大小
  unsigned long size;
  
  //哈希表大小掩码，用于计算索引值
  unsigned long sizemask;
  
  //该哈希已有节点的数量
  unsigned long used;
}dictht;


//哈希表节点定义dictEntry结构表示，每个dictEntry结构都保存着一个键值对。
typedef struct dictEntry{
  //键
  void *key;
  //值
  union{
    void *val;
    uint64_tu64;
    int64_ts64;
    }v;
  // 指向下个哈希表节点，形成链表
  struct dictEntry *next;
}dictEntry;
```

### 解决哈希冲突 

解决哈希冲突的方式与 Java 中 HashMap 的解决哈希冲突的方式类似，都是在冲突时，把数据存放到链表中。

### Rehash 

Redis为了保证哈希表具有一个稳定的负载，所以随着数据元素的插入，要不断的调整数组和链表的大小。因此会出现rehash的过程。Rehash有两种方式，一种是集中式Rehash，一种是渐进式Rehash方式。Redis采用渐进式Rehash方式。

- 集中式rehash： 一次性的hash，中间不会停止，会影响redis的读写性能，因为要花费资源去进行hash，性能差。例如，要把1GB的数据进行扩容，如果一次性把1GB的数据全部hash完，那么会影响Redis的读写性能；
- 渐进式rehash过程：每一次对数据元素的操作，都顺带rehash一个index，直到rehash完成，最后把ht[1]变成ht[0]，最后再申请一个ht[1]，并把rehashidx置为-1，为下次rehash做准备；
  - 为ht[1]分配空间，让字典同时拥有ht[0]和ht[1]；
  - 让rehashidx=0，表示rehash过程开始
  - 在rehash期间，redis除了对外提供字典的增删改查的数据操作外，还会顺带把ht[0]在rehashidx索引上的所有键值对【即链表上的所有键值对】rehash到ht[1]上，然后再把rehashidx+1；
    - 新增操作：直接将键值对插入到ht[1]上，保证ht[0]的结点不会增加；
    - 删除操作：同时在ht[0]和ht[1]两个哈希表上执行，避免漏删；
    - 修改操作：同时在ht[0]和ht[1]两个哈希表上执行，避免漏改；
    - 查找操作：先从ht[0]查，查不到的话再去ht[1]查；
  - 直到rehash完成后，最后把ht[1]变成ht[0]，最后再申请一个ht[1]，并把rehashidx置为-1，为下次rehash做准备；

缩容扩容的条件及缩扩容后的大小：

- 扩容
  - 条件： `没有执行BGSAVE或没有执行BGREWRITEAOF命令时，负载因子大于等于1` || `执行BGSAVE或执行BGREWRITEAOF命令时，负载因子大于等于5`
  - 大小： 不小于 dict[0].used*2 的第一个2的n次幂，如 dict[0].used = 3，则扩容大小为不小于6的第一个2的n次幂，不小于6的第一个2的n次幂是8，因此扩容大小为8；如 dict[0].used = 4，则扩容大小为不小于8的第一个2的n次幂，不小于8的第一个2的n次幂是8，因此扩容大小依然是8；
- 缩容
  - 条件：负载因子小于0.1
  - 大小：不小于 dict[0].used 的第一个2的n次幂，如 dict[0].used = 3，则缩容大小为不小于3的第一个2的n次幂，即4；如 dict[0].used = 4，则缩容大小为不小于4的第一个2的n次幂，即4；


## skiplist


::: tip 跳跃表的发展过程

![20230707200740](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230707200740.png)

针对上图所示的单向链表来说，即便数据存储是有序的，我们在查找某一个数据时，仍然需要从头到尾进行遍历，这样的查找效率低下。于是，我们想，能不能给链表也创建一个索引呢？在单向链表上，每隔几个节点，就创建一个索引。

![20230707201227](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230707201227.png)

这样，我们在查找某一个数据时，就可以利用索引，来减少遍历的节点个数，从而提高查找效率。同理，我们再在已经创建好的索引上，利用同样的原理再创建一级索引：

![20230707201424](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230707201424.png)

这样，我们查找某一个数据时，遍历到的节点个数更少了，查找效率也提高的更多了。这样我们就得到了跳跃表的数据结构：

![20230707201547](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230707201547.png)

:::

```
typedef struct zskiplist {
  // header:指向跳跃表的表头节点，通过这个指针程序定位表头节点的时间复杂度就为O(1)
  // tail:指向跳跃表的表尾节点，通过这个指针程序定位表尾节点的时间复杂度就为O(1)
  struct zskiplistNode *header, *tail;

  // length:记录跳跃表的长度，也即是，跳跃表目前包含节点的数量(表头节点不计算在内)，通过这个属性，程序可以再O(1)的时间复杂度内返回跳跃表的长度。
  unsigned long length;

  // level:记录目前跳跃表内,层数最大的那个节点的层数(表头节点的层数不计算在内)，通过这个属性可以再O(1)的时间复杂度内获取层高最好的节点的层数。
  int level;
} zskiplist;

typedef struct zskiplistNode {
    // Zset 对象的元素值
    // 在同一个跳跃表中，各个节点保存的成员对象必须是唯一的，但是多个节点保存的分值却可以是相同的。
    // 分值相同的节点将按照成员对象在字典序中的大小来进行排序，成员对象较小的节点会排在前面(靠近表头的方向)，而成员对象较大的节点则会排在后面(靠近表尾的方向)。
    sds ele;
    
    // 元素权重值
    double score;
    
    // 后向指针
    struct zskiplistNode *backward;
  
    // 节点的level数组，保存每层上的前向指针和跨度
    // 每次创建一个新跳跃表节点的时候，程序都根据幂次定律(powerlaw,越大的数出现的概率越小)随机生成一个介于1和32之间的值作为level数组的大小，这个大小就是层的“高度”。
    struct zskiplistLevel {
        struct zskiplistNode *forward;
        unsigned long span;
    } level[];
} zskiplistNode;
```

![](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/notes/skiplist.png)

说明：
- 跳跃表事实上是基于单向链表+索引的方式实现的；
- 是以空间换时间的方式提升了查找速度；
- 代码中是有 zskiplist 节点 和 zskiplistnode 数组构成的，其中 zskiplist 中保存了跳跃表的描述信息，而 zskiplistnode 数组中主要保存的是实际的数据元素；
- 查找元素是从最高层开始查询的；
- 跨度就是元素在整个列表中的排位；
- 层高都是1至32之间的随机数

## 总结

1. Redis针对所要保存的键值对构造了一个基于RedisObject的对象系统，并且每创建一个键值对，Redis都会为我们创建两个RedisObject对象，一个是键对象，一个是值对象；
2. 针对键对象，Redis使用SDS的数据结构进行保存；而针对值对象，Redis根据所保存的数据类型以及数据长度分别选择不同的数据结构进行保存，具体的数据结构有：
   1. SDS 
   2. linkedlist 
   3. ziplist  
   4. quicklist 
   5. intset 
   6. hashtable 
   7. skiplist 
3. Redis在选择某一种数据结构保存值对象时，并不是采用一旦确定就不再修改的策略，而是采用一种动态自适应的策略，这种策略使得Redis能够根据保存的值对象的长度和数据类型，动态的选择数据结构，比如保存hash数据时，数据量小时采用ziplist保存，而数据量大时才使用hashtable的数据结构进行保存；
4. 值对象选择不同的数据结构保存数据，也有其对应的触发条件；
5. Redis3.2版本是一个重大更新版本，这个版本修改了SDS的源码，并基于linkedlist和ziplist实现了quicklist；

::: tip 思考题

Redis既然能够动态自适应的选择保存的值对象的数据结构，那么值对象的数据结构是否在确定之后就不再修改？还是会动态修改？如果是会动态修改，那么动态修改时的触发条件是什么？比如，值对象起先被选择使用ziplist的形式保存，之后会不会根据数据长度和数据类型的变化，导致这个值对象的数据结构变成了hashtable呢？如果变化了，那么变化的条件又是什么呢？

::: 


## 参考

- [Redis](https://www.laoyu.site/categories/Redis/)
- [Redis 核心原理与实战](http://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/Redis%20%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E6%88%98)
- [Redis 数据结构](https://xiaolincoding.com/redis/data_struct/data_struct.html)

---
<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


