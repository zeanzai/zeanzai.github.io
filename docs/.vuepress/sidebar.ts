import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
  // 服务器相关
  "/linux/": [

    // 服务器管理
    {
      text: "服务器管理",
      collapsable: true,
      prefix: "server/",
      
      children: [
        {
          text: "服务器基本信息",
          link: "basic-information.md",
        },
        {
          text: "安装CentOS7.5",
          link: "cento7.5-install-tutorial.md",
        },
        {
          text: "定时器",
          link: "cron.md",
        },
        {
          text: "磁盘扩展",
          link: "disk-extend.md",
        },
        {
          text: "DNS",
          link: "dns.md",
        },
        {
          text: "创建用户",
          link: "new-users.md",
        },
        {
          text: "服务自启动",
          link: "services-autorun.md",
        },
        {
          text: "tomcat日志切分",
          link: "split-tomcat-log.md",
        },
        {
          text: "修改yum源",
          link: "update-yum.md",
        },
        {
          text: "使用vi编辑器",
          link: "use-vi-vim.md",
        },
      ],
    },

    // 软件安装
    {
      text: "软件安装",
      collapsable: true,
      prefix: "install/",
      icon: "software",
      children: [
        { text: "docker", link: "docker.md"},
        { text: "ffmpeg", link: "ffmpeg.md"},
        { text: "git", link: "git.md"},
        { text: "gitlab", link: "gitlab.md"},
        { text: "golang", link: "golang.md"},
        { text: "jdk", link: "jdk.md"},
        { text: "jekyll", link: "jekyll.md"},
        { text: "jenkins", link: "jenkins.md"},
        { text: "maven", link: "maven.md"},
        { text: "mysql", link: "mysql.md"},
        { text: "nexus", link: "nexus.md"},
        { text: "nginx", link: "nginx.md"},
        { text: "node", link: "node.md"},
        { text: "rabbitMQ", link: "rabbitMQ.md"},
        { text: "redis", link: "redis.md"},
        { text: "showdoc", link: "showdoc.md"},
        { text: "tomcat", link: "tomcat.md"},
      ],
    },

    // 软件维护
    {
      text: "软件维护",
      collapsable: true,
      prefix: "software/",
      icon: "set",
      children: [
        { text: "删除openjdk", link: "delete-openjdk.md" },
        { text: "前端项目自动部署", link: "forend-auto-deploy.md" },
        { text: "图片服务器", link: "image-server.md" },
        { text: "后端系统自动部署", link: "jenkins-java-project.md" },
        { text: "jenkins使用问题", link: "jenkins-use.md" },
        { text: "maven配置jdk1.8", link: "maven-config-jdk1.8.md" },
        { text: "迁移showdoc", link: "move-showdoc.md" },
        { text: "mysql常见配置", link: "mysql-config-file.md" },
        { text: "mysql配置文件", link: "mysql5.7-config-file.md" },
        { text: "mysql不同配置场景解决方案", link: "mysql5.7-configure.md" },
        { text: "mysql配置主从", link: "mysql5.7-master-and-slave.md" },
        { text: "nexus配置阿里代理源", link: "nexus-config-aliyun-proxy.md" },
        { text: "nexus私服的使用", link: "nexus-deploy-jar.md" },
        { text: "nginx配置https", link: "nginx-config-https.md" },
        { text: "nginx配置tomcat", link: "nginx-tomcat.md" },
        { text: "nginx配置方向代理", link: "nginx-upstream.md" },
        { text: "linux问题汇总", link: "problems.md" },
        { text: "redis3.0配置文件", link: "redis3.0-configFile.md" },
        { text: "redis5.0集群模式安装", link: "redis5.0-cluster.md" },
        { text: "tomcat设置jmx", link: "tomcat-jmx.md" },
        { text: "使用nexus", link: "use-nexus.md" },
        { text: "使用visualVM连接tomcat", link: "use-visualVM-connect-tomcat.md" },
        { text: "西部数码配置https", link: "west.cn-https-config.md" },
        { text: "windows系统进行部署", link: "window-develop.md" },
        { text: "windows配置ng的自启动", link: "window-nginx-install-auto-start.md" },
      ],
    },

    // HOME服务器日志
    {
      text: "HOME服务器",
      collapsable: true,
      prefix: "home/",
      icon: "emoji",
      children: [
        { text: "00.服务器安装软件日志", link: "home.centos-install.log.md", },
        { text: "01.挂载NTFS硬盘", link: "mount-disk.md", },
      ],
    },
  ],

  // java
  "/java/": [
    
    // 面试前准备
    {
      text: "零、面试前准备",
      collapsable: true,
      prefix: "resume/",
      children: [
        {
          text: "职业发展道路上的一些坑",
          link: "advice.md",
        },
      ]
    },


    // 计算机基础
    {
      text: "一、计算机基础",
      collapsable: true,
      prefix: "cscore/",
      children: [
        { text: "计算机网络", link: "network.md" },
        { text: "数据结构与算法", link: "dsa.md" },
        { text: "设计模式", link: "design-pattern.md" },
      ],
    },

    // Java核心
    {
      text: "二、JavaCore",
      collapsable: true,
      prefix: "core/",
      children: [
        
        { text: "集合", link: "collections.md" },
        { text: "JUC", link: "juc.md" },
        { text: "Java线程实战", link: "juc2.md" },
        { text: "泛型", link: "everytype.md" },
        
        {
          text: "JVM",
          collapsable: true,
          prefix: "jvm/",
          children: [
            { text: "周志明JVM第三版学习笔记", link: "jvm-version3rd.md" },
            { text: "00.葛一鸣-深入理解JVM-学习笔记", link: "00-gym.md" },
            { text: "01.类的编译、加载及运行", link: "01.类的编译、加载及运行.md" },
            { text: "02.JVM运行期内存结构", link: "02.内存结构.md" },
            { text: "03.Java中的GC", link: "03.java中的GC.md" },
            { text: "04.字节码文件", link: "04.字节码文件.md" },
            { text: "05.虚拟机中的高效并发", link: "05.虚拟机中的高效并发.md" },
            { text: "jvm编译和运行过程", link: "jvm编译和运行过程.md" },
            { text: "面试题", link: "面试题.md" },
          ],
        },
        // {
        //   text: "JVM02",
        //   collapsable: true,
        //   prefix: "jvm02/",
        //   children: [
        //     { text: "00-jvm作业", link: "00-jvm作业.md" },
        //     { text: "01-初识jvm", link: "01-初识jvm.md" },
        //     { text: "02-jvm运行机制", link: "02-jvm运行机制.md" },
        //     { text: "03-常用jvm配置参数", link: "03-常用jvm配置参数.md" },
        //     { text: "04-GC算法和种类", link: "04-GC算法和种类.md" },
        //     { text: "05-GC参数", link: "05-GC参数.md" },
        //     { text: "06-类加载器", link: "06-类加载器.md" },
        //     { text: "07-性能监控工具", link: "07-性能监控工具.md" },
        //     { text: "08-java堆分析", link: "08-java堆分析.md" },
        //     { text: "jvm编译和运行过程", link: "jvm编译和运行过程.md" },
        //   ],
        // },
        { text: "本地缓存", link: "localcache.md" },
        {
          text: "其他",
          collapsable: true,
          prefix: "other/",
          children: [
            { text: "装箱和拆箱问题详解", link: "ints-and-integers.md" },
          ],
        },
      ],
    },

    // Java框架
    {
      text: "三、框架",
      collapsable: true,
      prefix: "arch/",
      children: [

        {
          text: "框架知识",
          link: "knowledge.md",
        },
        {
          text: "mybatis",
          link: "mybatis.md",
        },
        {
          text: "spring",
          link: "spring.md",
        },
        {
          text: "SpringCloud",
          collapsable: true,
          prefix: "springcloud/",
          children: [
            { text: "01 微服务与SpringCloud", link: "Ch01.md" },
            { text: "02 SpringCloud Eureka上篇", link: "Ch02.md" },
            { text: "03 SpringCloud Eureka下篇", link: "Ch03.md" },
            { text: "04 SpringCloud Feign的使用扩展", link: "Ch04.md" },
            { text: "05 SpringCloud Ribbon实战", link: "Ch05.md" },
            { text: "06 SpringCloud Hystrix实战", link: "Ch06.md" },
            { text: "07 SpringCloud zuul 实战", link: "Ch07.md" },
            { text: "12 SpringCloud 配置中心", link: "Ch12.md" },
          ],
        },
      ],
    },

    // 中间件
    {
      text: "四、中间件",
      collapsable: true,
      prefix: "middleware/",
      children: [
        {
          text: " MySQL",
          link: "mysql.md",
        },
        {
          text: "Redis",
          link: "redis.md",
        },
        {
          text: " ZooKeeper",
          link: "zk.md",
        },
        {
          text: "MQ",
          prefix: "mq/",
          collapsable: true,
          children: [
            {
              text: "rocket",
              link: "rocket.md",
            },
            {
              text: "kafka",
              link: "kafka.md",
            },
          ]
        },
      ],
    },

    // 分布式
    {
      text: "五、分布式",
      collapsable: true,
      prefix: "distribute/",
      children: [
        {
          text: "分布式基本原理",
          link: "distribute-system-theory.md",
        },
        {
          text: "分布式缓存",
          link: "cache.md",
        },
        {
          text: "一致性Hash",
          link: "hash.md",
        },
        {
          text: "分布式事务",
          link: "transaction.md",
        },
        {
          text: "Seata TCC分布式事务",
          link: "seataTCC/SeataTCC.md",
        },
        {
          text: "分布式锁",
          link: "distribute-lock.md",
        },
        {
          text: "分库分表",
          link: "sharding.md",
        },
        {
          text: "分布式ID",
          link: "distribute-id.md",
        },
        {
          text: "分布式任务",
          link: "distribute-job.md",
        },
        {
          text: "分布式消息",
          
          prefix: "mq/",
          collapsable: true,
          children: [
            {
              text: "rocket",
              link: "rocket.md",
            },
            {
              text: "kafka",
              link: "kafka.md",
            },
          ]
        },
        {
          text: "系统高可用设计研究",
          link: "high-avaiable.md",
        },
      ],
    },

    // 源码系列
    {
      text: "六、源码系列",
      collapsable: true,
      prefix: "origincode/",
      children: [
        {
          text: "集合源码",
          link: "collections.md",
        }
      ],
    },

    // 项目实战
    {
      text: "七、项目实战",
      collapsable: true,
      prefix: "practice/",
      children: [
        {
          text: "框架中的线程池",
          link: "excutors.md",
        },
        {
          text: "开发阶段如何进行任务分配",
          link: "management.md",
        },
        {
          text: "RedisUtils",
          link: "RedisUtils.md",
        },
        {
          text: "如何设计一个XXX系统",
          link: "designASystem.md",
        },
        {
          text: "多租户SaaS实战",
          link: "una-saas-toturial.md",
        },
      ],
    },

    // 学习笔记
    {
      text: "八、学习笔记",
      collapsable: true,
      prefix: "notes/",
      children: [
        {
          text: "《分布式技术原理与实战45讲》",
          link: "distribute-system-theory.md",
        },
        {
          text: "《中华石杉》",
          link: "zh13.md",
        },
        {
          text: "《C2C 电商系统微服务架构 120 天实战训练营》",
          link: "c2c.md",
        },
        {
          text: "《Redis 核心原理与实战》",
          link: "redis.md",
        },
        {
          text: "《基于Shardingsphere的分库分表实战》",
          link: "Shardingsphere.md",
        },
      ],
    },
    // 工作技巧
    {
      text: "九、工作技巧",
      collapsable: true,
      prefix: "devtips/",
      children: [
        {
          text: "你的团队用对版本控制了吗？",
          link: "versioncontrol.md",
        },
        
      ],
    },
  ],

  // 资料分享
  "/shared/": [
    {
      text: "m1版本mac安装idea2022.2",
      link: "mac-idea.md",
    },
  ],


  // springcloud-alibaba
  "/springcloud-alibaba/": [
    {
      text: "00.前言",
      collapsable: true,
      prefix: "before/",
      children: [
        { text: "你真的了解技术选型吗？", link: "chapterA.md"},
        { text: "如何在SpringCloud项目中统一管理依赖的版本？", link: "chapterB.md"},
        { text: "使用idea插件生成代码", link: "easycode.md"},
      ],
    },
    {
      text: "01.服务治理之Nacos",
      link: "chapter01.md",
    },
    {
      text: "02.服务配置之Nacos",
      link: "chapter02.md",
    },
    {
      text: "03.服务调用之OpenFeign",
      link: "chapter03.md",
    },
    {
      text: "04.服务网关之Gateway",
      link: "chapter04.md",
    },
    {
      text: "05.分布式事务管理之Seata",
      collapsable: true,
      prefix: "seata/",
      children: [
        {
          text: "5.1-分布式事务概论",
          link: "distribute-transaction.md",
        },
        {
          text: "5.2-Seata服务端环境搭建",
          link: "install-seata.md",
        },
        {
          text: "5.3-AT模式",
          link: "seata-at.md",
        },
        {
          text: "5.4-TCC模式",
          link: "seata-tcc.md",
        },
      ],
    },
    
    {
      text: "06.分布式服务消息处理",
      link: "chapter06.md",
    },
    {
      text: "07.分布式服务流量控制",
      link: "chapter07.md",
    },
    {
      text: "08.分布式服务缓存",
      link: "chapter08.md",
    },
    {
      text: "09.分布式服务链路追踪",
      link: "chapter09.md",
    },
    {
      text: "10.分库分表",
      link: "chapter10.md",
    },
    {
      text: "11.分布式服务Job",
      link: "chapter11.md",
    },
    {
      text: "12.其他",
      collapsable: true,
      prefix: "other/",
      children: [
        {
          text: "如何设计一个安全可靠的API接口？",
          link: "create-a-niubi-api.md",
        },
        {
          text: "统一消息体并国际化+可配置全局异常",
          link: "global-exception.md",
        },
        {
          text: "SCG性能调优",
          link: "greate-scg.md",
        },
        {
          text: "多租户SaaS实战",
          link: "/java/practice/una-saas-toturial.md",
        },
      ],
    },
  ],

  // 网站建设 done
  "/slashteen/web/": [
    {
      text: "程序员如何打造自己的个人IP？",
      link: "myip.md",
    },
    {
      text: "个人网站搭建",
      icon: "alias",
      link: "genstaticweb.md",
    },
    {
      text: "文章编辑规范",
      icon: "edit",
      link: "writearticle.md",
    },
  ],  

  // 面试自查宝典
  "/question/": [
    {
      text: "公司",
      collapsable: true,
      prefix: "company/",
      children: [
          {text:"平安面试题",link:"pingan.md",},
          {text:"环金科技面试",link:"huanjinkeji.md",},
          {text:"自由职客面试",link:"ziyouzhike.md",},
      ],
    },
    {
        text: "基础题",
        collapsable: true,
        prefix: "group/",
        children: [
            {text:"java基础",link:"java-core.md",},
            {text:"容器",link:"collection.md",},
            {text:"多线程",link:"juc.md",},
            {text:"反射",link:"reflection.md",},
            {text:"web",link:"web.md",},
            {text:"异常",link:"exception.md",},
            {text:"网络",link:"network.md",},
            {text:"设计模式",link:"design-pattern.md",},
            {text:"Spring相关",link:"spring-surrounding.md",},
            {text:"mybatis",link:"mybatis.md",},
            {text:"rabbitmq",link:"rabbitmq.md",},
            {text:"mysql",link:"mysql.md",},
            {text:"redis",link:"redis.md",},
            {text:"jvm",link:"jvm.md",},
            {text:"数据结构与算法",link:"dsa.md",},
            {text:"Kafka",link:"kafka.md",},
            {text:"Zookeeper",link:"zookeeper.md",},
            {text:"消息队列",link:"message-queue.md",},
            {text:"netty",link:"netty.md",},
            {text:"分布式",link:"distribution.md",},
            {text:"Dubbo",link:"dubbo.md",},
            {text:"微服务",link:"micro-service.md",},
            {text:"安全相关",link:"security.md",},
            {text:"性能优化",link:"improvement.md",},
            {text:"系统设计能力",link:"system-design.md",},
            {text:"软实力",link:"soft-power.md",},
            {text:"操作系统",link:"operate-system.md",},
            {text:"nginx",link:"nginx.md",},
            {text:"tomcat",link:"tomcat.md",},
        ],
    },
  
  ],
});
