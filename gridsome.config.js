// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "TechnoSchool 🔮",
  siteUrl: "https://tschool.uz",
  siteDescription:
    "Dasturlash tillari va sinchlari haqidagi blog 🧾",

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        route: "/:slug",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['Post'],
        coverField: 'cover_image'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/admin*'],
        config: {
          '/tag/*': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/*': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/': {
            changefreq: 'always',
            priority: 1
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Tschool-blog',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Tschool',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: 'src/favicon.png',
        msTileImage: '',
        msTileColor: '#666600'
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
