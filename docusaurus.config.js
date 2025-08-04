// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Harrek Heals',
  tagline: 'Healing theorycrafting and guidewriting',
  favicon: 'img/harrek_favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://harrekheals.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Harreks', // Usually your GitHub org/user name.
  projectName: 'HarrekHeals', // Usually your repo name.

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
          routeBasePath: '/guides'
        },
        blog: {
          showReadingTime: false,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        style: 'dark',
        title: 'HarrekHeals',
        logo: {
          alt: 'Harrek Logo',
          src: 'img/rounded-logo-w-background.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/services', label: 'Services', position: 'left'},
        ],
		},
		footer: {
			style: 'dark',
			links: [
			{
				title: 'Docs',
				items: [
				{
					label: 'Guides',
					to: '/guides',
				},
				{
					label: 'Blog',
					to: '/blog',
				},
				{
					label: 'Services',
					to: '/services',
				},
				],
			},
			{
				title: 'Community',
				items: [
				{
					label: 'Youtube',
					href: 'https://youtube.com/@harreks',
				},
				{
					label: 'Spiritbloom.Pro Discord',
					href: 'https://discord.spiritbloom.pro',
				},
				{
					label: 'Wyrmrest Temple Discord',
					href: 'https://discord.com/invite/evoker',
				},
				],
			},
			{
				title: 'More',
				items: [
				{
					label: 'Patreon',
					href: 'https://www.patreon.com/harrek',
				},
				{
					label: 'Bluesky',
					href: 'https://bsky.app/profile/spiritbloom.pro',
				},
				{
					label: 'GitHub',
					href: 'https://github.com/Harreks',
				},
				],
			},
			],
		},
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
    }),
  	scripts: [
		'/scripts/wowheadTooltips.js',
		'https://wow.zamimg.com/js/tooltips.js'
	]
};

export default config;
