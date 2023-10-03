import { defineNavbarConfig } from "vuepress-theme-hope";

// 导航栏
export default defineNavbarConfig([
  { text: "Java面试宝典", icon: "java", link: "/java/" },
  { text: "SpringCloud-Alibaba实战", icon: "code", link: "/springcloud-alibaba/" },
  { text: "面试自查宝典", icon: "quote", link: "/question/" },
  { text: "开发环境手册", icon: "customize", link: "/linux/" },
  { text: "副业之路", icon: "java", link: "/slashteen/"}
]);
