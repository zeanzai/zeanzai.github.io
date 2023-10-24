---
"title": "docker"
category:
  - "docker"
tag:
  - "docker"
---


```
// 安装yum源的工具包
yum install -y yum-utils

// 配置docker的安装源
yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo

// 安装docker
yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y

// 设置开机自启
systemctl enable docker


// 配置阿里云的镜像源，帮助文档： https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
"registry-mirrors": ["https://hpifphoh.mirror.aliyuncs.com"]
}
EOF
systemctl daemon-reload
systemctl restart docker

// 查看安装之后的docker信息，最后可以看到配置的阿里云的镜像源
[root@home ～]# docker info
Client: Docker Engine - Community
 Version:    24.0.6
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.11.2
    Path:     /usr/libexec/docker/cli-plugins/docker-buildx
  compose: Docker Compose (Docker Inc.)
    Version:  v2.21.0
    Path:     /usr/libexec/docker/cli-plugins/docker-compose

Server:
 Containers: 0
  Running: 0
  Paused: 0
  Stopped: 0
 Images: 0
 Server Version: 24.0.6
 Storage Driver: overlay2
  Backing Filesystem: xfs
  Supports d_type: true
  Using metacopy: false
  Native Overlay Diff: true
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: 1
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: inactive
 Runtimes: io.containerd.runc.v2 runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 61f9fd88f79f081d64d6fa3bb1a0dc71ec870523
 runc version: v1.1.9-0-gccaecfc
 init version: de40ad0
 Security Options:
  seccomp
   Profile: builtin
 Kernel Version: 3.10.0-1160.71.1.el7.x86_64
 Operating System: CentOS Linux 7 (Core)
 OSType: linux
 Architecture: x86_64
 CPUs: 8
 Total Memory: 23.26GiB
 Name: home.centos
 ID: bf0036ec-e56a-4c78-ae07-d8e224f11480
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Experimental: false
 Insecure Registries:
  127.0.0.0/8
 Registry Mirrors:
  https://hpifphoh.mirror.aliyuncs.com/
 Live Restore Enabled: false

// 查看docker的版本信息
[root@home ~]# docker version
Client: Docker Engine - Community
 Version:           24.0.6
 API version:       1.43
 Go version:        go1.20.7
 Git commit:        ed223bc
 Built:             Mon Sep  4 12:35:25 2023
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          24.0.6
  API version:      1.43 (minimum version 1.12)
  Go version:       go1.20.7
  Git commit:       1a79695
  Built:            Mon Sep  4 12:34:28 2023
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.24
  GitCommit:        61f9fd88f79f081d64d6fa3bb1a0dc71ec870523
 runc:
  Version:          1.1.9
  GitCommit:        v1.1.9-0-gccaecfc
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```


---
<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


