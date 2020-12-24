module.exports = {
  title: 'Rovel Docs',
  tagline: 'The extensive documentation for every project from Rovel Stars',
  url: 'https://docs.rovelstars.ga',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.discordapp.com/attachments/775220204699385886/775220344688214016/images_1.jpeg',
  organizationName: 'rovelstars', // Usually your GitHub org/user name.
  projectName: 'rovel-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Rovel Docs',
      logo: {
        alt: 'Rovel Logo',
        src: 'https://cdn.discordapp.com/attachments/775220204699385886/775220344688214016/images_1.jpeg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/rovelstars/rovel-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Project Links',
          items: [
            {
              label: 'Rovel URL shortener',
              href: 'https://url.rovelstars.ga',
            },
            {
              label: 'Rovel Bot Lisr',
              href: 'https://bots.rovelstars.ga',
            },
            {
              label: 'API',
              href: 'https://api.rovelstars.ga',
            },
            {
              label: 'Rovel.js',
              href: 'https://rovel.js.org',
	    },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.rovelstars.ga',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rovelstars',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/953XCpHbKF',
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rovel Stars, Inc. Built with ♥️`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/rovelstars/rovel-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
