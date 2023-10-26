---
"title": "mongo"
category:
  - "docker"
tag:
  - "centos"
---

```
mkdir -p /mydata/mongodb/data


docker run -itd --name mongo \
-v /mydata/mongodb/data:/data/db \
-p 27017:27017 mongo:4.4  --auth


## 设置开机自启
docker update mongo --restart=always
```

---

<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


