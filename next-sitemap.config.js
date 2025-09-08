/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jacbs.in',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/demo', '/etheral-demo'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Higher priority for paper pages
    if (path.startsWith('/browse/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Higher priority for browse page
    if (path === '/browse') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/demo/', '/etheral-demo/'],
      },
      // Additional policy for academic indexers
      {
        userAgent: 'Googlebot-Scholar',
        allow: '/',
        disallow: ['/api/', '/demo/', '/etheral-demo/'],
      },
    ],
    additionalSitemaps: [
      'https://jacbs.in/sitemap.xml',
    ],
  },
};
