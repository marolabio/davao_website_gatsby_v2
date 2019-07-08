import React, { Component } from 'react'
import Styled from 'styled-components'
import withSizes from 'react-sizes'
import PropTypes from 'prop-types'
import { Layout as AntLayout } from 'antd'
import { sizeBreakPoint } from '../utility/screen-size-dectector'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

// import './Layout.css'
import { GlobalStyle } from '../theme/globalStyle'
const { Content } = AntLayout

const StyledContent = Styled(Content)`
  ${props => (props.pathname === '/' ? `margin-top:0` : `margin-top:64px`)}
`

class Layout extends Component {
  state = {
    currentScrollHeight: 0,
    pathname: '/',
  }

  componentDidMount() {
    const windowGlobal = typeof window !== 'undefined' && window
    windowGlobal.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50
      this.setState({
        currentScrollHeight: newScrollHeight,
      })
    }
  }

  render() {
    const { children, screenWidth, screenBreakpoint, pathname } = this.props
    const { currentScrollHeight } = this.state
    const childrenWithProps = React.Children.map(children, (child, i) =>
      React.cloneElement(child, {
        screenBreakpoint: screenBreakpoint,
        screenWidth: screenWidth,
      })
    )
    return (
      <AntLayout>
        <GlobalStyle />
        <Header
          {...{
            screenWidth,
            screenBreakpoint,
            currentScrollHeight,
            pathname,
          }}
        />
        <StyledContent pathname={pathname}>{childrenWithProps}</StyledContent>
        <Footer {...{ screenWidth, screenBreakpoint }} />
      </AntLayout>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapSizesToProps = ({ width }) => ({
  screenWidth: width,
  screenBreakpoint: sizeBreakPoint(width),
})

export default withSizes(mapSizesToProps)(Layout)
