import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'RoboFTC',
  description: 'Open Source FTC',
  base: '/', // Set the base URL for deployment
  head: [
    ["link", { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }]
  ],
  build: {
    rollupOptions: {
      external: [
        '/code/mecanum/processing.min.js' // Ensure the path matches the public folder reference
      ],
    },
  },
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'RoboFTC', // Displayed in the nav bar
    editLink: {
      pattern: 'https://github.com/RoboFTC/Website/edit/master/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CAD', link: '/cad/deadaxel' },
      { text: "Discord", link: "https://discord.gg/SWHq9Xu7Jm"},
      { text: "YouTube", link: "https://youtube.com/@theroboftc"}
    ],
    sidebar: [
      {
        text: 'RoboCAD',
        items: [
          { text: 'Dead Axle', link: '/cad/deadaxel' },
          { text: 'Claw', link: '/cad/claw' },
          { text: 'Inserts', link: '/cad/counterspringinserts' },
          { text: 'Active Intake', link: '/cad/activeintake' }
        ],
      },
      {
        text: 'Robots', // New "Robots" section
        items: [
          { text: 'Eclipse', link: '/robots/eclipse' },
          { text: 'Horizon', link: '/robots/horizon' },
          { text: 'Knockout', link: '/robots/knockout' },
          { text: 'Riptide', link: '/robots/riptide' }
        ],
      },
    ],
  },
});
