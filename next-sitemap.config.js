module.exports = {
    siteUrl: 'https://liammacksnyder.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        additionalSitemaps: [
            'https://liammacksnyder.com/sitemap.xml',
        ],
    },
};