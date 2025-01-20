import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'RoboFTC',
  description: 'Open Source FTC',
  base: '/Website/',  // Set the base URL for deployment
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
    ],
    sidebar: [
      {
        text: 'RoboCAD',
        items: [
          { text: 'Overview', link: '/' }
        ]
      } 
    ]
  },
});
