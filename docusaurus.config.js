// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const graphqlMarkdownConfig = require("./graphql-markdown.config");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const mikroConf = {
  schema: "http://localhost:8080/graphql",
  rootPath: "./docs/schemas",
  baseURL: "mikro",
  homepage: "./static/mikro.md",
  linkRoot: "/docs/schemas",
};

const arkitektConf = {
  schema: "http://localhost:8090/graphql",
  rootPath: "./docs/schemas",
  baseURL: "arkitekt",
  homepage: "./static/arkitekt.md",
  linkRoot: "/docs/schemas",
};

const flussConf = {
  schema: "http://localhost:8070/graphql",
  rootPath: "./docs/schemas",
  baseURL: "fluss",
  homepage: "./static/fluss.md",
  linkRoot: "/docs/schemas",
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Doks",
  tagline: "streaming analysis for microscopy",
  url: "https://jhnnsrs.github.io/",
  baseUrl: "/doks/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  themes: ['@docusaurus/theme-live-codeblock'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jhnnsrs", // Usually your GitHub org/user name.
  projectName: "doks", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@edno/docusaurus2-graphql-doc-generator",
      { ...graphqlMarkdownConfig, ...arkitektConf, id: "arkitekt" },
    ],
    [
      "@edno/docusaurus2-graphql-doc-generator",
      { ...graphqlMarkdownConfig, ...mikroConf, id: "mikro" },
    ],
    [
      "@edno/docusaurus2-graphql-doc-generator",
      { ...graphqlMarkdownConfig, ...flussConf, id: "fluss" },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        defaultMode: "dark",
        // respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Doks",
        logo: {
          alt: "Doks Logo",
          src: "img/favicon.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/jhnnsrs/doks",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/arkitekt",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/arkitekt",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/arkitekt",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/jhnnsrs/doks",
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Arkitekt, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
