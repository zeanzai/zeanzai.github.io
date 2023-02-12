---
"title": "如何在SpringCloud项目中统一管理依赖的版本？"
category:
  - "springcloud-alibaba"
tag:
  - "版本管理"
---

为了更好的各个版本的依赖，我们搭建一个nexus私服，然后创建一个项目，配置好所有的依赖版本后，上传私服，然后让所有的模块都以这个模块父模块进行依赖，这样就达到所有的依赖的版本管理的目的。这也是spring官方starter的制作过程。

实际的本地开发过程中，可以不用搭建nexus私服。不过本篇文章可以带你体验一下官方Spring的Starter的制作过程。


## 安装 

```
docker pull sonatype/nexus3

mkdir -p /mydata/nexus/data
chmod 777 -R /mydata/nexus

docker run -d --name nexus -p 8081:8081 \
--restart always \
-v /mydata/nexus/data:/nexus-data sonatype/nexus3

docker logs -f nexus
```

## 登录admin

```
cat /mydata/nexus/data/admin.password 
```

登录页面后修改密码： root1003

## web页面上配置用于上传自定义包的用户

- 创建角色

![创建角色](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113305.png)

- 创建用户

![创建用户](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113401.png)


## 配置maven的config

```

<server>
    <id>maven-public</id>
    <username>zeanzai</username>
    <password>root1003</password>
</server>
<server>
    <id>maven-releases</id>
    <username>zeanzai</username>
    <password>root1003</password>
</server>
<server>
    <id>maven-snapshots</id>
    <username>zeanzai</username>
    <password>root1003</password>
</server>

    <mirror>
    <id>maven-public</id>
    <name>maven-public</name>
    <url>http://192.168.1.150:8081/repository/maven-public/</url>
    <mirrorOf>*</mirrorOf>
</mirror>

<profile> 
    <id>jdk-1.8</id> 
    <activation> 
    <activeByDefault>true</activeByDefault> 
    <jdk>1.8</jdk> 
    </activation> 
    <properties> 
    <maven.compiler.source>1.8</maven.compiler.source> 
    <maven.compiler.target>1.8</maven.compiler.target> 
    <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion> 
    </properties> 
</profile>
```

## 项目pom文件中的配置

```
<distributionManagement>
    <repository>
        <id>maven-releases</id>
        <url>http://192.168.1.150:8081/repository/maven-releases/</url>
    </repository>
    <snapshotRepository>
        <id>maven-snapshots</id>
        <url>http://192.168.1.150:8081/repository/maven-snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```

注意此处的id要与maven中的server中的id保持一致。

## deploy

- 在maven的窗口中，找到“create..”：

![打开maven的生命周期](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113526.png)

- 在打开的窗口中输入 `clean deploy -DskipTests` ：

![创建maven的deploy命令](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113624.png)

- 运行命令，发布到nexus私服上：

![双击运行](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113646.png)

- 运行结果：

![运行成功](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113701.png)

![上传成功](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113739.png)


## 其他模块的依赖坐标

在其他模块中统一引用我们自定义的starter依赖，这样就能进行统一的依赖的版本管理了。

```
<parent>
    <groupId>com.tianqingxiaozhu</groupId>
    <artifactId>tianqingxiaozhu-starter</artifactId>
    <version>0.0.1-SNAPSHOT</version>
</parent>
```

## 特别说明

在团队中一般是团队中的重要成员才有推送到私服的权限，因此在实际的开发过程中普通程序员是不需要创建私服的。各位读者在实践过程中，也可以直接创建一个模块，然后把这个模块安装到本地仓库后，在其他模块中引入对应坐标即可。






<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


