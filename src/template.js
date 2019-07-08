import React from 'react'
import Layout from './components/Layout'
import { graphql } from 'gatsby'
import SEO from './components/Seo'
import ListingsSection from './components/portfolio/ListingsComponent'
import DetailsSection from './components/portfolio/DetailsComponent'
import ContactFormSection from './components/contact/ContactComponent'
import properties from './data/properties.json'

class template extends React.Component {
  render() {
    const property = this.props.data.propertiesJson
    const { pathname } = this.props.location
    const isPortfolio = true
    return (
      <Layout pathname={pathname}>
        <SEO
          title={`Portfolio Details | ${property.property_name}`}
          keywords={property.keywords}
          description={property.description}
        />
        <DetailsSection property={property} />
        <ListingsSection
          properties={properties}
          property={property}
          pathname={pathname}
        />
        <ContactFormSection isPortfolio={isPortfolio} />
      </Layout>
    )
  }
}

export const propertyQuery = graphql`
  query($listing_id: Int!) {
    propertiesJson(listing_id: { eq: $listing_id }) {
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
        icon
        key
        value
      }
      keywords
    }
  }
`

export default template
