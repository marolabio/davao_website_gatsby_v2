import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import logo from '../images/logo.png'

const StyledLogo = Styled.div`
  position: fixed;
  z-index: 10;
  
  img {
    cursor: pointer;
    padding: 10px;
    padding-right: 30px;
    max-height: 64px;
    background-color: white;
    float: left;
    margin-bottom: 0;
  }

  &:after {
    content: '';
    float: left;
    border: transparent;
    border-left: 32px solid white;
    border-right: 32px solid transparent;
    border-bottom: 32px solid transparent;
    border-top: 32px solid white;
  }
`

const StyledHeader = Styled.div`
  background-color: white;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 64px;
  padding: 0;
`

const StyledNavigationMenu = Styled.div`
  z-index: 9;
  width: 100%;
  position: fixed;

  nav {
    float: right;

    button {
      position: absolute;
      right: 0;
      top: 0;
      padding: 10px 20px;
      margin: 2px;
      cursor: pointer;
      background-color: transparent;
      border: 0;
      
      .menu-btn {
        transition: all 0.5s ease-out;
      }

      .menu-btn .btn-line {
        width: 40px;
        height: 5px;
        border-radius: 5px;
        margin: 6px 0;
        transition: all 0.5s ease-out;
        background-color: ${props =>
          props.textColor > 0.7 ? '#1e1e1e' : '#ffffff'};
      }

      .menu-btn.close {
        transform: rotate(180deg); 
      } 
      .menu-btn.close .btn-line:nth-child(1) {
        transform: rotate(45deg) translate(7px, 8px); 
      }
      .menu-btn.close .btn-line:nth-child(2) {
        opacity: 0; 
      }
      .menu-btn.close .btn-line:nth-child(3) {
        transform: rotate(-45deg) translate(8px, -7px); 
      }

    }

    ul {
      list-style-type: none;
      padding-right: 16px;

      li {
        padding: 0 10px;
        float: left;
        line-height: 64px;
        font-size: 18px;
        text-decoration: none;
        margin-bottom: 0;
        a {
          color: ${props => (props.textColor > 0.7 ? '#1e1e1e' : '#ffffff')};
        }
      }
    }
  }

`

const StyledSidebar = Styled.div`
  .sidebar {
    ${props =>
      props.screenBreakpoint === 'md'
        ? `padding-top: 15%;`
        : `padding-top: 25%;`}
    

    background: white;
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100%;
    z-index: 9;
    padding-left: 5%;
    opacity: 0.9;
    transition:left 0.3s linear;


    ul {
      margin:0px;
      padding:0px;
    }

    ul li {

      list-style:none;
      font-size: 1.5em;
    }
    ul li a {
      font-weight: 700; 
      border-bottom: 3px solid #003366;
    }
  }

  .sidebar.visible {
    left: 0vw;
    overflow: 'hidden';
    transition:left 0.3s linear;
  }
`

const StyledWrapper = Styled.div`

/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  .sidebar {
    display: none;
  }
  .burgerMenu {
    display: none;
  }
  .links {
    display: block;
  } 
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  .sidebar {
    display: none;
  }
  .burgerMenu {
    display: none;
  }
  .links {
    display: block;
  } 
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar {
    padding-top: 15%;
  }

  .sidebar {
    display: block;
  }
  .burgerMenu {
    display: block;
  }
  .links {
    display: none;
  } 
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  .sidebar {
    display: none;
  }
  .burgerMenu {
    display: none;
  }
  .links {
    display: block;
  } 
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
  .sidebar {
    display: block;
  }
  .burgerMenu {
    display: block;
  }
  .links {
    display: none;
  } 
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  .sidebar {
    display: block;
  }
  .burgerMenu {
    display: block;
  }
  .links {
    display: none;
  } 
  
}
`

class Header extends React.Component {
  toggleMenu = () => {
    const menuBtn = document.querySelector('.menu-btn')
    const sidebar = document.querySelector('.sidebar')
    menuBtn.classList.toggle('close')
    sidebar.classList.toggle('visible')
  }

  Slider = () => (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" onClick={this.toggleMenu}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/portfolio-listings" onClick={this.toggleMenu}>
            PORTFOLIO
          </Link>
        </li>

        <li>
          <Link to="/contact-us" onClick={this.toggleMenu}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  )

  BurgerMenu = props => (
    <button className="burgerMenu" type="button" onClick={props.toggleMenu}>
      <div className="menu-btn">
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>
    </button>
  )

  Links = () => (
    <ul className="links">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/portfolio-listings">PORTFOLIO</Link>
      </li>
      <li>
        <Link to="/contact-us">CONTACT US</Link>
      </li>
    </ul>
  )

  render() {
    const { currentScrollHeight, pathname, screenBreakpoint } = this.props
    const opacityHeader =
      pathname === '/' ? Math.min(currentScrollHeight / 300, 1) : 1
    return (
      <StyledWrapper>
        <StyledLogo>
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </StyledLogo>
        <StyledHeader style={{ opacity: `${opacityHeader}` }} />
        <StyledSidebar {...screenBreakpoint}>
          <this.Slider />
        </StyledSidebar>
        <StyledNavigationMenu textColor={opacityHeader}>
          <nav>
            <this.BurgerMenu toggleMenu={this.toggleMenu} />
            <this.Links />
          </nav>
        </StyledNavigationMenu>
      </StyledWrapper>
    )
  }
}

export default Header
