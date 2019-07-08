import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import HeroImageSection from '../components/home/HeroImageComponent'
import OurServicesSection from '../components/home/OurServicesComponent'
import NewsLetterSection from '../components/home/NewsLetterComponent'
import ExpertiseSection from '../components/home/ExpertiseComponent'

class IndexPage extends React.Component {
  render() {
    const { location } = this.props
    return (
      <Layout pathname={location.pathname}>
        <SEO title="PRIME Philippines" />
        <HeroImageSection />
        <OurServicesSection />
        <NewsLetterSection />
        <ExpertiseSection />
      </Layout>
    )
  }
}

export default IndexPage
