
const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-resolve-src`,
      oprions: {
        src: path.resolve(__dirname, 'src'),
        utils: path.resolve(__dirname, 'utils'),
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'altrady',
        schemas: {
           exchanges: require("./custom_types/exchange.json"),
           sections: require("./custom_types/section.json"),
           heroSection: require("./custom_types/hero_section.json"),
           featureSection: require("./custom_types/feature_section.json"),
           trustPilot: require("./custom_types/trustpilot_reviews.json"),
           testimonial: require("./custom_types/testimonial.json"),
           benoistTestimonial: require("./custom_types/benoist_testimonial.json"),
           blogPost: require("./custom_types/blog_post.json"),
           blogCategory: require("./custom_types/blog_category.json"),
           softwareList: require("./custom_types/software_list.json"),
        },
      },
    },
  ],
}
