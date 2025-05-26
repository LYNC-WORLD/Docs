import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "mew.gg",
  tagline: "",
  favicon: "img/mew.png",
  staticDirectories: ["public", "static"],
  // Set the production url of your site here
  url: "https://docs.mew.gg",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MEW.GG", // Usually your GitHub org/user name.
  projectName: "MEW.GG", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [tailwindPlugin, "my-loaders"],
  stylesheets: ["https://cdn.jsdelivr.net/npm/@docsearch/css@3"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],

  themeConfig: {
    // Replace with your project's social card
    image: "img/cover.png",
    metadata: [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://docs.mew.gg/img/cover.png" },
      { property: "og:image", content: "https://docs.mew.gg/img/cover.png" },
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Mew.gg",
      logo: {
        alt: "MEW.GG",
        src: "img/mew.png",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Docs",
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://t.me/mewdotgg",

          position: "right",
          className: "header-support-link",
        },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: "Docs",
          items: [
            // {
            //   label: "Introduction",
            //   to: "/welcome",
            // },
            {
              label: "Getting Started",
              to: "/getting-started",
            },
            {
              label: "Buy and Sell",
              to: "/buy-sell",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            {
              label: "X",
              href: "https://x.com/mewdotgg",
            },
            {
              label: "Telegram",
              href: "https://t.me/mewdotgg",
            },
          ],
        },
        {
          title: "Website",
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: "Mew.GG",
              href: "https://mew.gg",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MEW.GG`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "csharp"],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "1AIQPWYE6I",

      // Public API key: it is safe to commit it
      apiKey: "bb36173ab49a5686abf0ea1b148ca6f2",

      indexName: "test-sable",

      // Optional: see doc section below
      contextualSearch: true,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

/*
front page

font, colors, for both light and dark themes(both needs review)
  - ifw format SHOULD I REMOVE LIGHT THEME ONLY




navbar contents(same as docs lync world)
 - dashboard DONE
 - support DONE
 - search (algolia)





*/
