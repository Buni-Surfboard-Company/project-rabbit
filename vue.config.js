const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
      path: '/',
      lastmod: '2022-10-10',
      priority: 1.0,
      changefreq: 'yearly'
  },
  {
      path: '/about/',
      lastmod: '2022-10-10',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
    path: '/repairs/', 
    lastmod: '2022-10-10',
    priority: 0.6,
    changefreq: 'yearly'
  },
  {
    path: '/ourstory/', 
    lastmod: '2022-10-10',
    priority: 0.8,
    changefreq: 'yearly'
  },
  {
    path: '/sustainability/', 
    lastmod: '2022-10-10',
    priority: 0.8,
    changefreq: 'yearly'
  },
  {
    path: '/team/', 
    lastmod: '2022-10-10',
    priority: 0.8,
    changefreq: 'yearly'
  },
  {
    path: '/terms-and-conditions/', 
    lastmod: '2022-10-10',
    priority: 0.1,
    changefreq: 'yearly'
  },
  {
    path: '/privacy/', 
    lastmod: '2022-10-10',
    priority: 0.1,
    changefreq: 'yearly'
  },
  {
    path: '/terms-and-conditions/', 
    lastmod: '2022-10-10',
    priority: 0.1,
    changefreq: 'yearly'
  },
  {
    path: '/events/', 
    lastmod: '2022-10-10',
    priority: 0.5,
    changefreq: 'yearly'
  },
  {
    path: '/contact/', 
    lastmod: '2022-10-10',
    priority: 0.7,
    changefreq: 'yearly'
  },
  {
    path: '/products/', 
    lastmod: '2022-10-10',
    priority: 0.7,
    changefreq: 'yearly'
  },
  {
    path: '/surfboards/', 
    lastmod: '2022-10-10',
    priority: 0.9,
    changefreq: 'yearly'
  }
]
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
        new SitemapPlugin({ base: 'https://buniboards.com', paths })
    ]
  },
  transpileDependencies: true,
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(400000)
      .maxAssetSize(400000)
  }
})
