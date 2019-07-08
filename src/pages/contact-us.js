import React from 'react'
import ContactPage from '../components/contact/ContactComponent'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
class Contact extends React.Component {
  render() {
    const { location } = this.props
    return (
      <Layout pathname={location.pathname}>
        <SEO title="Contact Us | PRIME Philippines" />
        <ContactPage />
      </Layout>
    )
  }
}

export default Contact
