export const THEME_CONFIG: App.Locals["config"] = {
  /** blog title */
  title: "码农小易",
  /** your name */
  author: "Timothy Lau",
  /** website description */
  desc: "码农小易的博客 —— 技术解刨 & 日常分享",
  /** your deployed domain */
  website: "https://0xlau.dev",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      prefix: "ri",
      name: "github-fill",
      href: "https://github.com/0xlau",
    },
    {
      prefix: "ri",
      name: "rss-fill",
      href: "/atom.xml",
    },
    {
      prefix: "ri",
      name: "twitter-x-fill",
      href: "https://x.com/thetimothylau",
    },
    {
      prefix: "ri",
      name: "bilibili-fill",
      href: "https://space.bilibili.com/393341686",
    },
    {
      prefix: "ri",
      name: "mail-fill",
      href: "mailto:timothy-lau@outlook.com",
    },
  ],
  /** your header info */
  header: {
    twitter: "@thetimothylau",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [],
};
