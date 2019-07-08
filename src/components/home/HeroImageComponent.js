import React, { Component } from 'react'
import Styled from 'styled-components'
import { Button, Row, Col } from 'antd'
// import { Link } from 'gatsby'
import heroimage from '../../images/home/featured-property.jpg'

const Wrapper = Styled.div`
  background-color:white;
  min-height:100vh;
  background-image: url('${props => props.heroimagesrc}');
  background-size:cover;
  background-position:center;
  position:relative;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items:center; 
  flex-wrap:wrap;

  line-height: normal;

  &:after{
    background-color:rgba(10,10,10,0.7);
    content:'';
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    z-index:0;
  }

   

  .headerTop{
    color: #fad127;
    font-weight: 700;
    font-size: 4em;
  }
  
  .headerBottom {
    color: #ffffff;
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 1.5em;
  }

  p {
    color: #ffffff;
    line-height: 20px;
    font-size: 1em;
  }

  button {
    margin-bottom: 20px;
  }

/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  .headerTop {
    font-size: 4em;
    margin-bottom: 2px;
  }
  .headerBottom {
    font-size: 1.75em;
    margin-bottom: 2px;
  }
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  .headerTop {
    font-size: 4em;
    margin-bottom: 2px;
  }
  .headerBottom {
    font-size: 1.75em;
    margin-bottom: 2px;
  }
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  .headerTop {
    font-size: 4em;
    margin-bottom: 2px;
  }
  .headerBottom {
    font-size: 1.75em;
    margin-bottom: 2px;
  }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  .headerTop {
    font-size: 4em;
    margin-bottom: 2px;
  }
  .headerBottom {
    font-size: 1.75em;
    margin-bottom: 2px;
  }
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .headerTop {
    font-size: 4em;
    margin-bottom: 2px;
  }
  .headerBottom {
    font-size: 1.75em;
    margin-bottom: 2px;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  .headerTop {
    font-size: 2.9em;
    margin-bottom: 5px;
  }
  .headerBottom {
    font-size: 1.3em;
    margin-bottom: 5px;
  }
  p{
    font-size: 1em;
  }
}
`

const StyledRow = Styled(Row)`
  margin-top:64px;
  z-index:1;
  position:relative;

  p {
    color: white;  
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;   
  }
  p.visible {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 100;
    -webkit-box-orient: vertical;   
  }
`

class HeroImageComponent extends Component {
  state = {
    isOpen: false,
  }
  handleClick = () => {
    let { isOpen } = this.state

    const paragraph = document.querySelector('.paragraph')
    paragraph.classList.toggle('visible')

    if (isOpen) {
      this.setState({ isOpen: false })
    } else {
      this.setState({ isOpen: true })
    }
  }

  render() {
    const { isOpen } = this.state
    return (
      <Wrapper heroimagesrc={heroimage}>
        <StyledRow>
          <Col
            xs={{ span: 22, offset: 1 }}
            md={{ span: 16, offset: 1 }}
            lg={{ span: 16, offset: 2 }}
            xl={{ span: 14, offset: 2 }}
            xxl={{ span: 10, offset: 4 }}
          >
            <div className="headerTop">GT COMPLEX</div>
            <div className="headerBottom">
              WHY SETTLE ON REGULAR PIECE? <br /> GRAB THE CENTER PIECE
            </div>
            <p className="paragraph">
              With the influx of opportunities to the King City of the South,
              everyone is waiting for what would be the next viable investment
              in the Metro. With that, we are glad to present Davao City’s most
              sought-after and most valuable property, now available for
              acquisition which possesses high value, feasibility, accessibility
              and commerciality.
              <br />
              <br />
              This 1-hectare property is not just another commercial land in the
              crown jewel of Mindanao, but it poses to be a tactical investment
              as it is just a stone throw away from SM Lanang Premier, adjacent
              to Robinsons Communities Bloomfields, near Damosa Gateway of
              Damosa Land and Megaworld’s Davao Park District. This property is
              ideal for office, commercial and another ground-breaking
              destination landmark in Davao City.
              <br />
              <br />
              Strategically situated at the heart of Lanang area, along J.P.
              Laurel Avenue, this is the perfect investment for the visionary
              who wants to make it big in the city. Dubbed also as the Ayala
              Avenue of Mindanao, this property is truly the Center piece of
              Davao’s Commercial Real Estate.
            </p>
            {isOpen ? (
              <Button type="primary" onClick={this.handleClick}>
                SHOW LESS
              </Button>
            ) : (
              <Button type="primary" onClick={this.handleClick}>
                SHOW MORE
              </Button>
            )}
          </Col>
        </StyledRow>
      </Wrapper>
    )
  }
}

export default HeroImageComponent
