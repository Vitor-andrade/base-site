const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages(
    withCSS(
        withSass({
            cssModules: false,
            env: {
                API_URL: "http://localhost:8280"
                // API_URL: "http://ec2-54-232-11-152.sa-east-1.compute.amazonaws.com:8280"
                // API_URL: "https://api.includeandpreserve.com"
            },
            i18n: {
                locales: ['pt-BR', 'en-US'],
                defaultLocale: 'pt-BR',
                domains: [
                    // {
                    //     domain: 'localhost',
                    //     defaultLocale: 'en-US',
                    // },
                ],
            }
        })
    )
)
