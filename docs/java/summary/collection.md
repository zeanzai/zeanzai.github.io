---
"title": "Java中的集合"
category:
  - "summary"
tag:
  - "collection"
---

> 集合相关的内容多从数据结构的角度进行面试。而数据结构包括两部分的内容，存储和算法。存储上又分为逻辑结构和物理结构。算法就是操作存储在硬盘或内存中的数据的过程或步骤。
>
> `因此我们在回答集合方面的面试题时，要从数据结构的角度来回答。`

分成单列集合和双列集合，分别对应两个顶级接口： Collection 和 Map。

Collection中有两个重要接口：
- List： 允许元素重复，允许保存多个Null元素，并且有序（存入顺序与实际存储顺序一致），具体实现有 ArrayList 、 LinkedList 、 Vector ；
- Set： 不允许元素重复，只允许保存一个Null，并且是无序的（存入顺序与实际存储顺序不一致），具体实现有 HashSet 、 LinkedHashset 、 TreeSet ；

Map下面主要有HashMap、Hashtable、TreeMap、LinkedHashMap等实现；


还有两个遍历器。

## List

允许元素重复。

### ArrayList 

1. 数组组成，内存规整，可以快速读取和修改，增加和删除需要进行复制，速度较慢；
2. 默认10，可以指定容量（初始化容量+另一个list进行初始化）；
3. 缩扩容原理（扩容为原来的1.5倍，使用复制的方式进行缩容或者扩容）；
4. 不支持同步，但是可以Collections.synchronizedList(aList)变成同步；
5. Fast-Fail机制，使用modNum标识版本，避免读写过程中的并发问题；
6. 实现了Random接口，可以实现随机访问；
7. 适合随机读写和遍历；

### Vector

1. 也是数组实现，但是支持同步，同步机制是通过重量级锁Synchronize实现的，性能较差，目前已经被jdk废弃；
2. 扩容为原来的2倍；

### LinkedList 

1. 双向链表，内存不规整，增删快，查改慢；
2. 缩扩容只需要修改链表的指向即可；
3. 不支持同步；
4. 不支持快速随机读写；


## Set 

不允许元素重复。

### HashSet 

1. 保存的内容为不重复的内容；本质上是数组+链表的方式进行存储的；
2. 在添加元素时，会先计算元素的hashcode值，然后去数组上找到hash桶的位置，之后再使用元素的值一一比对同一个hash桶上的其他元素，如果相等就不做任何操作，如果没有相等的，就顺延插入；
3. 由于添加元素的操作的限制，因此HashSet的泛型参数要进行相等判断，即需要实现自定义的判断对象相等的hashcode方法和equals方法；并且由于添加元素的操作原理可知，添加的顺序与实际保存到内存中的顺序并不一致；

### TreeSet 

1. 数据结构为二叉树，可以对每一个添加的元素进行排序；
2. 保存的内容为有序的内容，因此自定义的泛型参数需要实现Comparable接口，并覆写compareTo()方法，并且要返回负数、零或正整数；

### LinkedHashset 

1. 是基于HashSet和LinkedHashMap实现的；保存数据的方式与LinkedHashMap一致，操作数据的方式与HashSet一致；


## Map

### HashMap

1. 三点变化
- 数据结构发生变化，原来的数组+链表，变成数组+链表或红黑树；
- entry变成node，头插法变成尾插法，解决并发写时的循环链表问题；
- put方法发生变化，多了一个判断链表长度的条件，链表长度>8，就转化为红黑树，node个数<6就退化为链表；
2. 构造方法中的三个参数：初始化容量（默认16），负载因子（默认0.75），扩容阈值（初始化容量*负载因子，默认12）
3. put方法： 先判断是否需要执行扩容，如果不需要就计算key的hashcode，然后找到hash桶的坐标，也就是数组的索引，之后再把元素插到链表或者红黑树的节点上；
4. get方法： 先计算hash桶坐标，之后再遍历链表或红黑树来判断值是否相等；
5. 扩容机制： 扩容为原来的两倍；
6. 同步机制： 不支持同步，但是可以使用Collections.synchronizedMap(hashMap)进行同步；

### Hashtable 

1. 存储上，既不支持null-key，又不支持null-value；扩容时，扩容为2n+1；
2. 迭代器是Enumerator，不支持fast-failed机制；
3. 继承自Dictionary类；
4. 是线程安全的，但是同步效率很低，同步时多用ConcurrentHashMap，而不是Hashtable

### TreeMap

1. 通过红黑树实现的有序键值对集合，是通过实现了SortedMap接口，来使其具有根据key进行排序的能力；
2. 在使用时，传入的key要实现Comparable接口或构造时传入自定义的Comparator；

### LinkedHashMap 

1. 是根据插入顺序排序的键值对集合，即内存中的排列顺序就是插入的顺序；
2. 也可以在构造时传入参数，使其按照访问次数排序；
3. 是HashMap的一个子类，具有和HashMap一样的查询效率；

### WeakHashMap

1. 其中的Entry继承自弱引用WeakReference，用来实现类似缓存的功能；



<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


