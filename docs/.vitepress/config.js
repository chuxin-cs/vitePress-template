import { defineConfig } from "vitepress";
import themeConfig from "./themeConfig";

export default defineConfig({
  title: "chuxin",
  description: "基于 vitePress + Vue3.0 搭建的技术博客文档通用模板",
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
  themeConfig,
});
