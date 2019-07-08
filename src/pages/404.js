import React from 'react'
import Styled from 'styled-components'
import { Button } from 'antd'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const Wrapper = Styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 100px;
    color: #fad127;
    font-weight: bold;    
    margin-bottom: 5px;
  }
  b {
    margin: 5px;

  }
  p span {
    text-align: center;
    display: block;
  }

`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>Oops!</h1>
      <b>404 - PAGE NOT FOUND</b>
      <p>
        <span>The page you are looking for might have been removed</span>
        <span>had its name changed or is temporarily unavailable.</span>
      </p>
      <Link to="/">
        <Button type="primary">GO TO HOMEPAGE</Button>
      </Link>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
