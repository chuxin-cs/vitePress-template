import { defineConfig } from "vitepress";

const Guide = [
  { text: "Get Started", link: "/guide/" },
  {
    text: "Best Practice",
    link: "/guide/best-practice",
  },
  { text: "Configurations", link: "/guide/config" },
  {
    text: "Components",
    link: "/guide/components",
  },
  { text: "Contributing", link: "/contributing" },
  { text: "Guidelines", link: "/guidelines" },
];
const Learn = [
  {
    text: "Premium Video Course",
    link: "https://vueschool.io/courses/vueuse-for-everyone?friend=vueuse",
  },
];

const Links = [
  { text: "Add-ons", link: "/add-ons" },
  { text: "Ecosystem", link: "/ecosystem" },
  {
    text: "Export Size",
    link: "/export-size",
  },
  { text: "Recent Updated", link: "/functions.html#sort=updated" },
  {
    text: "Why no translations?",
    link: "/why-no-translations",
  },
];

export default defineConfig({
  //   base: "/docs/",
  title: "chuxin",
  description: "基于 vitePress + Vue3.0 搭建的技术博客文档通用模板",
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
  themeConfig: {
    logo: "https://d33wubrfki0l68.cloudfront.net/2f6479d73bc25170dc532dd42e059166573bf478/61057/favicon.svg", // 没有好看的图标，我放的vueuse中的图标
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/chuxin-cs/vitePress-template",
      },
    ],
    nav: [
      {
        text: "Guide",
        items: [
          { text: "Guide", items: Guide },
          { text: "Learn", items: Learn },
          { text: "Links", items: Links },
        ],
      },
      {
        text: "Add-ons",
        link: "/add-ons",
      },
    ],
  },
});
