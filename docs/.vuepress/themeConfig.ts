import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://zeanzai.me",

  author: {
    name: "天晴小猪",
    url: "https://zeanzai.me",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.JPG",

  repo: "zeanzai/zeanzai.github.io",

  docsDir: "docs",

  // navbar.ts
  navbar: navbar,

  // sidebar.ts
  sidebar: sidebar,

  footer: "浪漫骑士的二流键盘",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "浪漫骑士的二流键盘",
    roundAvatar: true,
    // intro: "/intro.html",
    // medias: {
    //   Email: "1129432705@qq.com",
    //   Gitee: "https://example.com",
    //   GitHub: "https://github.com/zeanzai",
    //   Zhihu: "https://www.zhihu.com/people/zeanzai",
    // },
  },

  encrypt: {
    config: {
      "/java/distribute/seataTCC/SeataTCC.html": ["202216"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true, // 自动摘录
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // Using giscus
    comment: {
      type: "giscus",
      repo: "zeanzai/zeanzai.github.io",
      repoId: "R_kgDOI84HVQ",
      category: "Announcements",
      categoryId: "DIC_kwDOI84HVc4CUKFF",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },

  // 22/05/13 关闭更改页面颜色功能  
  themeColor: false,

});
