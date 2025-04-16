import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Forum - Quick reference",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Reactivity",
        items: [
          {
            text: "State",
            link: "/Dokumentation/Reactivity/1_State",
          },
          {
            text: "Template Syntax",
            link: "/Dokumentation/Reactivity/2_Templating",
          },
          {
            text: "Data Binding",
            link: "/Dokumentation/Reactivity/3_DataBinding",
          },
          {
            text: "Derived States",
            link: "/Dokumentation/Reactivity/4_DerivedStates",
          },
          {
            text: "Effects",
            link: "/Dokumentation/Reactivity/5_Effects",
          },
          {
            text: "Lifecycle",
            link: "/Dokumentation/Reactivity/6_Lifecycle",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ChristSchaef/forum-modern-frontend-frameworks",
      },
    ],
  },
});
