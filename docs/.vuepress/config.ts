import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "天晴小猪",
  description: "天晴小猪 | 关于后端与架构设计 | Software Engineer | Backend | JAVA | DevOps | Linux | IDEA | Microservice | 我活在世上，无非想要明白些道理，遇见些有趣的事。倘能如我所愿，我的一生就算成功。",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  themeConfig,
});
