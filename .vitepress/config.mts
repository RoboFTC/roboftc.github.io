import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'RoboFTC',
  description: 'Open Source FTC',
  base: '/',  // Set the base URL for deployment
  build: {
    rollupOptions: {
      external: ['../code/wheel-graph.js'], // Exclude the script
    },
  },
  head: [
    ["link", { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }]
  ],
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'RoboFTC',  // Displayed in the nav bar
    editLink: {
      pattern: 'https://github.com/RoboFTC/Website/edit/master/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "CAD", link: "/cad/claw" },
      { text: "Code", link: "/code/pedro" }

    ],
    sidebar: [
      {
        text: 'RoboCAD',
        items: [
          { text: 'Claw', link: '/cad/claw' }
        ]
      },
      {
        text: 'RoboCode',
        items: [
          { text: 'Pedro', link: '/code/pedro' }
        ]
      }
    ]
  },
});
