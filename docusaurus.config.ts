import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";
require("dotenv").config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "LYNC",
  tagline: "Autonomous AI + Web3 Layer",
  favicon: "img/lync_ico.ico",
  staticDirectories: ["public", "static"],
  // Set the production url of your site here
  url: "https://docs.lync.world",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LYNC WORLD", // Usually your GitHub org/user name.
  projectName: "LYNC Documentation", // Usually your repo name.

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
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleAnalytics: {
          trackingID: process.env.GOOGLE_ANALYTICS_ID,
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],

  themeConfig: {
    // Replace with your project's social card
    image: "img/lync-cover.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "LYNC World",
      logo: {
        alt: "My Site Logo",
        src: "img/lync.avif",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://dashboard.lync.world/",

          position: "right",
          className: "header-dashboard-link",
        },
        {
          href: "https://t.me/shanu_lync",

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
            {
              label: "Introduction",
              to: "/docs/lync-introduction",
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
              label: "Discord",
              href: "https://discord.com/invite/lyncworld",
            },
            {
              label: "X",
              href: "https://x.com/Lyncworld",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: "GitHub",
              href: "https://github.com/LYNC-WORLD",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LYNC World`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "csharp"],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: process.env.ALGOLIA_APP_ID,

      // Public API key: it is safe to commit it
      apiKey: process.env.ALGOLIA_API_KEY,

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
