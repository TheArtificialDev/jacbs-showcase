/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jacbs.in',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/demo', '/etheral-demo'],
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/demo/', '/etheral-demo/'],
      },
    ],
    additionalSitemaps: [
      'https://jacbs.in/sitemap.xml',
    ],
  },
};
