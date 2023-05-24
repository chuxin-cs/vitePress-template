const Guide = [{ text: "Get Started", link: "/guide/" }];

// sidebar
const DefaultSideBar = [{ text: "指南", items: Guide }];

export default {
  // 没有好看的图标，我去vueuse找的图标
  logo: "https://d33wubrfki0l68.cloudfront.net/2f6479d73bc25170dc532dd42e059166573bf478/61057/favicon.svg",
  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/chuxin-cs/vitePress-template",
    },
  ],
  // 页头菜单
  nav: [
    {
      text: "Guide",
      items: [{ text: "Guide", items: Guide }],
    },
  ],
  // 左边菜单栏
  sidebar: {
    "/guide/": DefaultSideBar,
  },
};
