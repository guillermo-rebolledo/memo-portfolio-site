module.exports = {
  pathPrefix: `/about-me/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Guillermo Rebolledo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hyperspace',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight\:300,400,400i,600,700`,
          `source sans pro\:300,400,400i,600,700`,
          `IBM Plex Mono\:300,400,400i,600,700`,
        ],
        display: 'swap',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
