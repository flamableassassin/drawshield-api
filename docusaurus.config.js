// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unofficial Drawshield documentation',
  tagline: 'A project improve the API documentation for drawshield',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://flamableassassin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/drawshield-api',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'flamableassassin', // Usually your GitHub org/user name.
  projectName: 'drawshield-api', // Usually your repo name.

  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/flamableassassin/drawshield-api/tree/master/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ], [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'openapi/openapi.yml',
            route: '/api/',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Unofficial DrawShield documentation',
        logo: {
          alt: 'DrawShield Logo',
          src: 'img/small-logo.png',
        },
        items: [
          //TODO: Could move the current docs over
          // {
          // type: 'docSidebar',
          // sidebarId: 'normal-docs',
          // position: 'left',
          // label: 'Docs',
          // },
          {
            to: '/api',
            label: 'API Docs',
            position: 'left'
          },
          {
            href: 'https://github.com/flamableassassin/drawshield-api',
            label: 'GitHub',
            position: 'right',
          }],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              // {
              //   label: 'Drawshield',
              //   to: '/docs',
              // },
              {
                label: 'API',
                to: '/api'
              }
            ],
          },
          {
            title: 'Drawshield Links',
            items: [
              {
                label: 'Website',
                href: 'https://drawshield.net',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/YZpTjR7QUA',
              },
              {
                label: 'Github',
                href: 'https://github.com/orgs/drawshield',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCdD-Y_wxgZwO03lLEIo6alA'
              }
            ],
          }, {
            title: 'Support Drawshield',
            items: [
              {
                label: 'PayPal',
                href: 'http://paypal.me/drawshield'
              },
              {
                label: 'Buy me a coffee',
                href: 'https://www.buymeacoffee.com/drawshield'
              }
            ]
          }
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
