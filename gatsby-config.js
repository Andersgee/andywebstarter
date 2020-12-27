require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    defaultTitle: `andywebstarter`,
    titleTemplate: "%s - andywebstarter",
    defaultDescription: `default description goes here`,
    lang: `en`,
    siteUrl: "https://github.com/andersgee/gatsbystarter",
    defaultImage: "andyfx.png",
    author: "Anders Gustafsson",
  },
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `andywebstarter`,
        short_name: `andywebstarter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/assets/images/andyfx.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
