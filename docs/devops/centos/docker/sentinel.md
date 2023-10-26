---
"title": "sentinel"
category:
  - "docker"
tag:
  - "centos"
---

```

docker pull bladex/sentinel-dashboard:1.7.1

docker run --name sentinel -p 8858:8858 -d bladex/sentinel-dashboard:1.7.1

docker update sentinel --restart=always
```

---

<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


