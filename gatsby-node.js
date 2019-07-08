const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve(`src/template.js`)

  return graphql(`
    {
      allPropertiesJson {
        edges {
          node {
            listing_id
            property_name
            description
            location
            property_type
            thumb_path
            banner_path
            active
            feature_flag
            status
            url_path
            specs {
              key
              value
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allPropertiesJson.edges.forEach(({ node }) => {
      createPage({
        path: `portfolio-listings/${node.listing_id}/${node.url_path}`,
        component: template,

        // Send additional data to page from JSON (or query inside template)
        context: {
          listing_id: node.listing_id,
        },
      })
    })
  })
}
