---
title: "框架中的线程池"
category:
  - "practice"
tag:
  - "线程池"
---


## 线程池配置类

```
public class ThreadPoolUtil {
    private static int corePoolSize = 5;
    private static int maxPollSize = 5;
    private static long keepAliveTime = 10;
    private stativ TimeUnit unit = TimeUnit.MINUTES;

    private static class Pool{
        private static ThreadPoolExecutor executor = new ThreadPoolExecutor(
            corePoolSize,
            maxPollSize,
            keepAliveTime,
            unit,
            new LinkedBlockingQueue<>(),
            r -> new Thread(r, "async-thread"),
            new ThreadPoolExecutor.CallerRunsPolicy()
        );
    }
}
```

## 使用方法

```
ThreadPoolUtil.submitTask(
    ()->{
        // 你的任务方法；
    }
);
```

## 其他方法

https://mp.weixin.qq.com/s/skBA9RwVBLnw8BYZhcUSrA
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
