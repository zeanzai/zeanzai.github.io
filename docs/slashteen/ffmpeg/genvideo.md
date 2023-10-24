---
"title": "使用图片生成短视频"
category:
  - "slashwork"
tag:
  - "ffmepg"
---


## 说明

想写一个脚本来实现一种效果： 截的图放到本地磁盘的某个目录下面，然后根据截的图生成对应的短视频，最后把图片进行归档。

## 准备工作

- ffmpeg软件工具
- git工具
- 由于要生成短视频，所以还要准备一个bgm；

## 脚本

```
#!/bin/bash

#######################################
# 从一个文件夹中读取 png 文件，然后生成一个 6s 中的抖音视频
#######################################

parentFolder=/d/Moonlight/001-culture/
nutStoreFolder=/d/Moonlight/Nutstore/

# 以日期创建 视频输出文件夹
nowdate=`date +%Y-%m-%d`
videosFolder=$nutStoreFolder$nowdate
arcvFolder=$parentFolder$nowdate
mkdir -p $videosFolder $arcvFolder

pngFolder=$parentFolder"pic"
cd $pngFolder

# 获取 背景音乐 文件
bgmFolder=$parentFolder"bgm/"
bgmFile=$bgmFolder"bgm.mp3"
echo $bgmFile


for i in *; do

    pngFile=$pngFolder"/"$i
    echo $pngFile

    name=`echo "$i" | cut -d'.' -f1`
    videoName=$name".mp4"
    videoFile=$videosFolder"/"$videoName
    echo $videoFile

    # 读取 png 图片，并输出视频
    ffmpeg -threads 2 -loop 0 -y -r 0.7 \
    -i $pngFile \
    -i $bgmFile \
    -t 6 -absf aac_adtstoasc \
    -vf "scale='if(gt(a*sar,9/16),576,1024*iw*sar/ih)':'if(gt(a*sar,9/16),576*ih/iw/sar,1024)',pad=576:1024:(ow-iw)/2:(oh-ih)/2,setsar=1" \
    -vcodec libx264 -pix_fmt yuv420p -r 30 $videoFile -hide_banner
    
    sleep 2s

    # 把 png 图片归档
    mv $pngFile $arcvFolder"/"
done

```

## 完善

由于会定期保存一些图片，并且也希望这些图片生成对应的短视频，因此还想要完成：只需要手动往图片文件夹内添加图片，执行脚本的过程自动化。因此，需要操作系统自动执行上面写的脚本。

所以，直接在windows平台上使用“任务计划...”进行操作即可。


---
<br />
<br />
<br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


