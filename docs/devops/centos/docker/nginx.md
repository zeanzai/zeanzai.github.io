---
"title": "nginx"
category:
  - "docker"
tag:
  - "centos"
---

```

docker run -p 80:80 -p 443:443 --name nginx \
-v /mnt/e/backup/html:/usr/share/nginx/html \
-v /mydata/nginx/logs:/var/log/nginx \
-v /mydata/nginx/conf:/etc/nginx \
-d nginx


docker update nginx --restart=always
```

![](./images/2023-10-26-15-19-08.png)



---

<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


