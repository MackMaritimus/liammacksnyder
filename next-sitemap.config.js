module.exports = {
    siteUrl: 'https://liammacksnyder.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/Liam_Snyder_Resume.pdf',
            },
        ],
    },
};