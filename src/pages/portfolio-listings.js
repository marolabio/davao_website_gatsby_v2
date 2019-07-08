import React from 'react'
import Layout from '../components/Layout'
import CarouselSection from '../components/portfolio/CarouselComponent'
import ListingsSection from '../components/portfolio/ListingsComponent'
import SEO from '../components/Seo'
import properties from '../data/properties.json'

class PortfolioListings extends React.Component {
  render() {
    const { pathname } = this.props.location

    return (
      <Layout pathname={pathname}>
        <SEO title="Portfolio | PRIME Philippines" />
        <CarouselSection properties={properties} />
        <ListingsSection properties={properties} pathname={pathname} />
      </Layout>
    )
  }
}

export default PortfolioListings
