---
title: "安装ffmpeg"
category:
  - "linux"
tag:
  - "install"
---

## 软件下载

https://johnvansickle.com/ffmpeg/release-source/

## 安装



### 工具软件的安装

yum install yasm #安装yasm编译器
yum install -y  freetype-devel # 安装drawtext的依赖

### 安装

把下载好的ffmpeg安装包上传到服务器上，然后解压： tar xvJf ffmpeg-4.1.tar.xz
再创建安装软件的目录： mkdir /usr/local/ffmpeg

进入解压后的文件目录，并执行
./configure --enable-shared --enable-libfreetype --enable-gpl --prefix=/usr/local/ffmpeg

    如果不使用物理显卡，执行完上一步就可以结束了，但是如果需要让物理显卡发挥效用，那么就需要安装相关的依赖，并重新编译ffmpeg，然后再次安装
    参考https://www.jianshu.com/p/59da3d350488中安装依赖的过程，特别注意config时的路径要保持一致。

    在安装依赖和重新安装ffmpeg前，需要提前安装好物理显卡的驱动，也可以参考https://www.jianshu.com/p/59da3d350488 和 https://www.codenong.com/cs105243951/ 等

    PATH="/usr/local/ffmpeg/bin:$PATH" PKG_CONFIG_PATH="/usr/local/ffmpeg/ffmpeg_build/lib/pkgconfig" \
    ./configure \
      --prefix=/usr/local/ffmpeg/ffmpeg_build \
      --pkg-config-flags="--static" \
      --extra-cflags="-I/usr/local/ffmpeg/ffmpeg_build/include -I/usr/local/cuda/include" \
      --extra-ldflags="-L/usr/local/ffmpeg/ffmpeg_build/lib -L/usr/local/cuda/lib64" \
      --extra-libs=-lpthread \
      --extra-libs=-lm \
      --bindir="/usr/local/ffmpeg/bin" \
      --enable-libfreetype \
      --enable-gpl \
      --enable-libfdk_aac \
      --enable-libmp3lame \
      --enable-libopus \
      --enable-libvorbis \
      --enable-nonfree \
      --enable-cuda \
      --enable-cuvid \
      --enable-nvenc \
      --enable-libnpp

执行安装命令
make && make install





## 配置

修改 /etc/ld.so.conf 文件，在文件最后追加： /usr/local/ffmpeg/lib/

执行 ldconfig 是配置生效；

修改 /etc/profile 文件，在文件最后追加：

```
#set ffmpeg environment

PATH=$PATH:/usr/local/ffmpeg/bin

export PATH
```

并执行命令： source /etc/profile #使配置生效

## 测试

ffmpeg -version


进入 /mnt/data/e/video/movie 目录，执行下面命令
ffmpeg  -hwaccel cuvid -i tt.mp4 \
-vf "split[fg0][bg0]; \
  [bg0]scale=h=1280:w=720,boxblur=10:10[bg1]; \
  [fg0]scale=720:(720*ih/iw)[fg1]; \
  [bg1][fg1]overlay=0:(H-h)/2, \
  setdar=9/16, \
  drawtext= \
    fontfile= \
      /usr/share/fonts/msyh.ttc:text='S12E16 PART04':x=(w-text_w)/2:y=(h-text_h)/8:fontsize=50:fontcolor=yellow, \
  drawtext= \
    fontfile= \
      /usr/share/fonts/msyh.ttc:text='《Big Bang》':x=(w-text_w)/2:y=(h-text_h)/4:fontsize=50:fontcolor=yellow, \
  drawtext= \
    fontfile= \
      /usr/share/fonts/msyh.ttc:text='Follow for more':x=(w-text_w)/2:y=6*(h-text_h)/8:fontsize=50:fontcolor=yellow" \
-y ./out/tt_0001.mp4

nvidia-smi -l 查看显卡状态

## 删除安装包

## 参考

https://www.cnblogs.com/wintercloud/p/11162962.html
https://blog.csdn.net/weixin_43166958/article/details/89335679




## 常用命令

### 01.下载，配置

用的系统是Ubuntu18.04,所以直接apt-get就可以了

```shell
sudo apt-get install ffmpeg
```

### 02.简介，上手(FFmpeg FFprobe FFplay)

(1)查看ffmpeg的帮助说明，提供的指令

```shell
ffmpeg -h
```

(2)播放媒体的指令

```shell
ffplay video.mp4
ffplay music.mp3
```

(3)常用快捷键

按键"Q"或"Esc"：退出媒体播放
键盘方向键：媒体播放的前进后退
点击鼠标右键：拖动到该播放位置
按键"F"：全屏
按键"P"或空格键：暂停
按键"W":切换显示模式

(4)查看媒体参数信息

```shell
ffprobe video.mp4
```

### 03.转换格式(文件格式,封装格式)

(1)文件名可以是中英文，但不能有空格。

(2)转换格式

```shell
ffmpeg -i video.mp4 video_avi.avi
```

### 04.改变编码 上(编码,音频转码)

(1)查看编解码器

```shell
ffmpeg -codecs
```

(2)网站常用编码

MP4封装：H264视频编码+ACC音频编码
WebM封装：VP8视频编码+Vorbis音频编码
OGG封装：Theora视频编码+Vorbis音频编码

(3)无损编码格式.flac转换编码

```shell
ffmpeg -i music_flac.flac -acodec libmp3lame -ar 44100 -ab 320k -ac 2 music_flac_mp3.mp3
```

**说明：**

* acodec:audio Coder Decoder 音频编码解码器
* libmp3lame:mp3解码器
* ar:audio rate：音频采样率
* 44100:设置音频的采样率44100。若不输入，默认用原音频的采样率
* ab:audio bit rate 音频比特率
* 320k：设置音频的比特率。若不输入，默认128K
* ac: aduio channels 音频声道
* 2:声道数。若不输入，默认采用源音频的声道数

概括：设置格式的基本套路-先是指名属性，然后跟着新的属性值

(4)查看结果属性

```shell
ffprobe music_flac_mp3.mp3
```

### 05.改变编码 中(视频压制)

(1)视频转码

```shell
ffmpeg -i video.mp4 -s 1920x1080 -pix_fmt yuv420p -vcodec libx264 -preset medium -profile:v high -level:v 4.1 -crf 23 -acodec aac -ar 44100 -ac 2 -b:a 128k video_avi.avi
```

**说明:**

* -s 1920x1080：缩放视频新尺寸(size)
* -pix_fmt yuv420p：pixel format,用来设置视频颜色空间。参数查询：ffmpeg -pix_fmts
* -vcodec libx264：video Coder Decoder，视频编码解码器
* -preset medium: 编码器预设。参数：ultrafast,superfast,veryfast,faster,fast,medium,slow,slower,veryslow,placebo
* -profile:v high :编码器配置，与压缩比有关。实时通讯-baseline,流媒体-main,超清视频-high
* -level:v 4.1 ：对编码器设置的具体规范和限制，权衡压缩比和画质。
* -crf 23 ：设置码率控制模式。constant rate factor-恒定速率因子模式。范围0~51,默认23。数值越小，画质越高。一般在8~28做出选择。
* -r 30 :设置视频帧率
* -acodec aac :audio Coder Decoder-音频编码解码器
* -b:a 128k :音频比特率.大多数网站限制音频比特率128k,129k
  其他参考上一个教程

### 06.改变编码 下(码率控制模式)

ffmpeg支持的码率控制模式：-qp -crf -b

(1)  -qp :constant quantizer,恒定量化器模式

无损压缩的例子（快速编码）

```shell
ffmpeg -i input -vcodec libx264 -preset ultrafast -qp 0 output.mkv
```

无损压缩的例子（高压缩比）

```shell
ffmpeg -i input -vcodec libx264 -preset veryslow -qp 0 output.mkv
```

(2) -crf :constant rate factor,恒定速率因子模式

(3) -b ：bitrate,固定目标码率模式。一般不建议使用

3种模式默认单遍编码

VBR(Variable Bit Rate/动态比特率) 例子

```shell
ffmpeg -i input -vcodec libx264 -preset veryslow output
```

ABR(Average Bit Rate/平均比特率) 例子

```shell
ffmpeg -i input -vcodec libx264 -preset veryslow -b:v 3000k output
```

CBR(Constant Bit Rate/恒定比特率) 例子

```shell
... -b:v 4000k -minrate 4000k -maxrate 4000k -bufsize 1835k ...
```



### 07.合并,提取音视频

(1)单独提取视频（不含音频流）

```shell
ffmpeg -i video.mp4 -vcodec copy -an video_silent.mp4
```

(2)单独提取音频（不含视频流）

```shell
ffmpeg -i video.mp4 -vn -acodec copy video_novideo.m4a
```

具备多个音频流的，如

Stream #0:2[0x81]:Audio:ac3,48000Hz,5.1,s16,384kb/s
Stream #0:3[0x82]:Audio:ac3,48000Hz,5.1,s16,384kb/s
Stream #0:4[0x80]:Audio:ac3,48000Hz,5.1,s16,448kb/s

针对性的单一的提取，例如提取第2条，用指令： -map 0:3

(3)合并音视频

```shell
ffmpeg -i video_novideo.m4a -i video_silent.mp4 -c copy video_merge.mp4
```

### 08.截取，连接音视频

(1)截取

```shell
ffmpeg -i music.mp3 -ss 00:00:30 -to 00:02:00 -acodec copy music_cutout.mp3
```

截取60秒

```shell
ffmpeg -i music.mp3 -ss 00:00:30 -t 60 -acodec copy music_cutout60s.mp3
```

-sseof : 从媒体末尾开始截取

```shell
ffmpeg -i in.mp4 -ss 00:01:00 -to 00:01:10 -c copy out.mp4
ffmpeg -ss 00:01:00 -i in.mp4 -to 00:01:10 -c copy out.mp4
ffmpeg -ss 00:01:00 -i in.mp4 -to 00:01:10 -c copy -copyts out.mp4
```

把-ss放到-i之前，启用了关键帧技术，加速操作。但截取的时间段不一定准确。可用最后一条指令，保留时间戳，保证时间准确。

(2)连接音视频

```shell
ffmpeg -i "concat:01.mp4|02.mp4|03.mp4" -c copy out.mp4
```

不同格式的音视频可以连接在一起，但不推荐不同格式连接在一起。
建议使用Avidemux软件连接

### 09.截图,水印,动图

(1)截图.

截取第7秒第1帧的画面

```shell
ffmpeg -i video.mp4 -ss 7 -vframes 1 video_image.jpg
```

(2)水印

```shell
ffmpeg -i video.mp4 -i qt.png -filter_complex "overlay=20:80" video_watermark.mp4
```

(3)截取动图

```shell
ffmpeg -i video.mp4 -ss 7.5 -to 8.5 -s 640x320 -r 15 video_gif.gif
```

10.录屏,直播

(1)录屏

windows:

```shell
ffmpeg -f gdigrab -i desktop rec.mp4
```

ubuntu:

```shell
sudo ffmpeg -f fbdev -framerate 10 -i /dev/fb0 rec.mp4
```

gdigrab ：ffmpeg中的一个组件。

只捕获视频.若要录屏，录音，获取摄像头，麦克风，换组件，用OBS Studio软件

(2)直播

```shell
ffmpeg -re i rec.mp4 按照网站要求编码 -f flv "你的rtmp地址/你的直播码"
```



## 参考资料

笔记来源: https://www.bilibili.com/video/av40146374

官方教程: http://ffmpeg.org/ffmpeg-all.html





------
-----
------

https://blog.csdn.net/u010312671/article/details/108738386
https://blog.csdn.net/vttsor/article/details/105471256
https://blog.csdn.net/xuejianbest/article/details/84774136
https://blog.csdn.net/qq_36261644/article/details/88726364?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link
http://www.ruanyifeng.com/blog/2020/01/ffmpeg.html
https://zhuanlan.zhihu.com/p/117523405
https://www.bilibili.com/video/BV1BX4y1P7cN?p=5&spm_id_from=pageDriver

https://www.cnblogs.com/Dreaming-in-Gottingen/p/13894450.html


## 在macOS下安装

直接下载 ffmpeg-4.4.1.7z 、 ffplay-4.4.1.7z 、 ffprobe-4.4.1.7z ，下载之前需要先了解一下这三个工具的作用。再把解压后的文件放到对应的安装目录下面。遇到问题可以直接网上搜索。

这样直接打开命令行终端，进入安装目录即可进行操作。当然也可以通过配置环境，让这三个命令处处生效，这样就不用每次切换到安装目录了。



## 学习

先了解命令的格式，然后找一个视频直接上手学习使用即可。



./ffmpeg -i ./temp/out/S12E16_0001_t.mp4 -aspect 9:16 ./temp/out/S12E16_0001_t01.mp4
./ffmpeg -i ./temp/out/S12E16_0001_t.mp4 -filter:v scale=h=1280:w=720 -c:a copy ./temp/out/S12E16_0001_t04.mp4
/*
    ffmpeg -ss 1:00 -i /Users/shawnwang/Documents/Packages/shangqi.mkv -t 20 -c:v copy -c:a copy output1.mkv
    -ss 1:21 -i /Users/shawnwang/Documents/Packages/shangqi.mkv -t 20 -c:v copy -c:a copy output2.mkv
    **/

-------

- mkv 转 mp4

-vcodec copy -acodec copy

- 切割视频

- 旋转10度
./ffmpeg -i ./temp/out/S12E16_0004_0004_0011.mp4 -vf "rotate=-PI/36" ./temp/out/S12E16_0004_0004_0012.mp4

- 调整屏幕比

./ffmpeg -i ./temp/out/S12E16_0004_0004.mp4 -aspect 9:16 ./temp/out/S12E16_0004_0004_0011.mp4

- 添加水印

./ffmpeg -i ./temp/out/S12E16_0001_0003.mp4 -vf "drawtext=fontfile=msyh.ttc:text='生活大爆炸':x=120:y=300:fontsize=50:fontcolor=yellow" ./temp/out/S12E16_0001_0004.mp4

./ffmpeg -i ./temp/out/S12E16_0004_0002.mp4 -i ./temp/out/image/image-60.png -filter_complex "overlay=(main_w-overlay_w)/6:(main_h-overlay_h)/2" -codec:a copy ./temp/out/S12E16_0004_0003.mp4

./ffmpeg -i ./temp/out/S12E16_0001_0003.mp4 -vf "drawtext=fontfile=msyh.ttc:text='生活大爆炸':x=120:y=150:fontsize=80:fontcolor=yellow" ./temp/out/S12E16_0001_0004.mp4

- 截取封面

./ffmpeg -i ./temp/out/S12E16_0004_0002.mp4 -r 1 -f image2 ./temp/out/image/image-%2d.png


- 设置封面

./ffmpeg -i ./temp/out/S12E16_0004_0004_0001.mp4 -i ./temp/image/image-60.png \
-map 0 -map 1 \
-c copy -c:v:1 png \
-disposition:v:1 attached_pic \
./temp/out/S12E16_0004_0004_0002.mp4


-

- 找一个媒体流，输出成符合抖音标准的视频

./ffmpeg -i /Users/shawnwang/Downloads/BigBang01/S01/S01E01.mp4 \
-vf "split[fg0][bg0]; \
  [bg0]scale=h=1280:w=720,boxblur=10:10[bg1]; \
  [fg0]scale=720:(720*ih/iw)[fg1]; \
  [bg1][fg1]overlay=0:(H-h)/2, \
  setdar=9/16, \
  drawtext= \
    fontfile= \
      msyh.ttc:text='S12E16 PART04':x=(w-text_w)/2:y=(h-text_h)/8:fontsize=50:fontcolor=yellow, \
  drawtext= \
    fontfile= \
      msyh.ttc:text='《Big Bang》':x=(w-text_w)/2:y=(h-text_h)/4:fontsize=50:fontcolor=yellow, \
  drawtext= \
    fontfile= \
      msyh.ttc:text='Follow for more':x=(w-text_w)/2:y=6*(h-text_h)/8:fontsize=50:fontcolor=yellow" \
-y /Users/shawnwang/Downloads/BigBang01/S01/S01E01_0001.mp4



ffmpeg  -hwaccel cuvid -i tt.mp4 \
-vf "split[fg0][bg0]; \
  [bg0]scale=h=1280:w=720,boxblur=10:10[bg1]; \
  [fg0]scale=720:(720*ih/iw)[fg1]; \
  [bg1][fg1]overlay=0:(H-h)/2, \
  setdar=9/16, \
  drawtext= \
    fontfile= \
      /usr/share/fonts/msyh.ttc:text='S12E16 PART04':x=(w-text_w)/2:y=(h-text_h)/8:fontsize=50:fontcolor=yellow, \
  drawtext= \
    fontfile= \
      /usr/share/fonts/msyh.ttc:text='《Big Bang》':x=(w-text_w)/2:y=(h-text_h)/4:fontsize=50:fontcolor=yellow, \
  drawtext= \
    fontfile= \
      /usr/share/fonts/msyh.ttc:text='Follow for more':x=(w-text_w)/2:y=6*(h-text_h)/8:fontsize=50:fontcolor=yellow" \
-y ./out/tt_0001.mp4


- 自动化发布







- 调整屏幕比并放到幕布上
./ffmpeg -i ./temp/out/S12E16_0004_0004_0001.mp4 -vf "split[fg0][bg0];[bg0]scale=h=1280:w=720,boxblur=10:10[bg1];[fg0]scale=720:(720*ih/iw)[fg1];[bg1][fg1]overlay=0:(H-h)/2,setdar=9/16" ./temp/out/S12E16_0004_0004_0002.mp4




<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
