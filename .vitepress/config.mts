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
    ],
    sidebar: [
      {
        text: 'RoboCAD',
        items: [
          { text: 'Dead Axel', link: '/cad/deadaxel' },
          { text: 'Claw', link: '/cad/claw' },
        ],
      },
      {
        text: 'Robots', // New "Robots" section
        items: [
          { text: 'Eclipse', link: '/robots/eclipse' }, // New subsection for "Eclipse"
        ],
      },
    ],
  },
});
