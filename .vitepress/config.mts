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
      { text: 'Code', link: '/code/pidf' },
      { text: 'Portfolios', link: '/port/indubs' },
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
          { text: 'Active Intake', link: '/cad/activeintake' },
          { text: 'Swerve Module', link: '/cad/swervemodule' },
          { text: 'Boxtube', link: '/cad/boxtube' },
          { text: 'Differential Wrist', link: '/cad/differential' },
          { text: 'Robot Sign', link: '/cad/robotsign' }
        ],
      },
      {
        text: 'Robots', // New "Robots" section
        items: [
          { text: 'Eclipse', link: '/robots/eclipse' },
          { text: 'Horizon', link: '/robots/horizon' },
          { text: 'Knockout', link: '/robots/knockout' },
          { text: 'Riptide', link: '/robots/riptide' },
          { text: 'Exodus', link: '/robots/exodus' },
          { text: 'Loomy Squad', link: '/robots/loomysquad' }
        ],
      },
      {
        text: 'Code', // New "Robots" section
        items: [
          { text: 'PIDF', link: '/code/pidf' }
        ],
      },
      {
        text: 'Portfolios', // New "Robots" section
        items: [
          { text: 'Indubitables', link: '/port/indubs' }
        ],
      },
    ],
  },
});
