import { defineNavbarConfig } from "vuepress-theme-hope";

// 导航栏
export default defineNavbarConfig([
  { text: "开发环境手册", icon: "customize", link: "/linux/" },
  { text: "面试前准备", icon: "support", link: "/resume/" },
  { text: "Java", icon: "java", link: "/java/" },
  // { text: "Java", icon: "java", prefix: "/java/",
  //   children: [ 
  //     { text: "java-core", icon: "edit", link: "core/" },
  //     { text: "框架", icon: "edit", link: "arch/" },
  //     { text: "中间件", icon: "edit", link: "middleware/" },
  //     { text: "分布式", icon: "edit", link: "distribute/" },
  //     { text: "源码解读", icon: "edit", link: "origincode/" },
  //   ]
  // },
  { text: "资源共享", icon: "page", link: "/shared/" },
  { text: "SpringCloud-Alibaba", icon: "code", link: "/springcloud-alibaba/" },
  { text: "副业之路", icon: "java", prefix: "/slashteen/",
    children: [
      { text: "网站建设", icon: "page", link: "web/" },
    ]
  },
]);
