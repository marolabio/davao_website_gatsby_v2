import React, { Component } from 'react'
import { Row, Col, Carousel, Icon } from 'antd'
import Styled from 'styled-components'
import NukaCarousel from 'nuka-carousel'

const StyledBannerFlag = Styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-position:center;
  background-size: cover;
  background-repeat:no-repeat;
  height: 400px;
  padding: 40px 50px;

  ${props =>
    props.banner_path
      ? `background-image: url('${require(`../../images/portfolio/banner/${
          props.banner_path
        }`)}');`
      : `
        background-image: url('${require(`../../images/placeholder.jpg`)}');
        background-color:#242424;
      `}

  ::after {
    position:absolute;
    top:0;
    left:0;
    z-index:0;
    height:100%;
    width:100%;
    content:'';
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(6,6,6,0) 32%, rgba(20,20,20,1) 100%);
  }    
  

  .banner-description {
    z-index: 1;  

    h1 {
      color:#fad127;    
      margin-bottom: 5px;
    }

    h3 {
      color: white;    
      margin-bottom: 5px;
    }
    
    div {
      color: white;    
      overflow: hidden;
    }
  }

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  padding: 40px 20px;
  .banner-description {
    z-index: 1;  

    h1 {
      color:#fad127;    
      margin-bottom: 5px;
    }

    h3 {
      color: white;    
      margin-bottom: 5px;
    }
    
    div {
      color: white;    
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical; 
    }
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  padding: 40px 20px;
  .banner-description {
    z-index: 1;  

    h1 {
      color:#fad127;    
      margin-bottom: 5px;
    }

    h3 {
      color: white;    
      margin-bottom: 5px;
    }
    
    div {
      color: white;    
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical; 
    }
  }
}

`
const StyledRow = Styled(Row)`
  .icon {
    font-size: 42px;
    cursor: pointer;
    color: white;
  }
  .icon:hover {
    color: #fad127;
  }
  .slick-initialized{
    display: none !important;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    .slick-initialized{
      display: block !important;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .slick-initialized{
      display: block !important;
    }
  }
`

export default class carousel extends Component {
  BannerFlag = props => {
    const { property_name, location, description, banner_path, bp } = props
    return (
      <StyledBannerFlag banner_path={banner_path} bp={bp}>
        <Row className="banner-description">
          <Col xs={24} sm={24} lg={18}>
            <div>
              <h1>{property_name}</h1>
              <h3>{location}</h3>
              <div>{description}</div>
            </div>
          </Col>
        </Row>
      </StyledBannerFlag>
    )
  }

  render() {
    const { screenBreakpoint: bp, properties } = this.props
    const mobile = !!(bp === 'xs' || bp === 'sm')
    return (
      <StyledRow>
        {mobile ? (
          <Carousel>
            {properties.map((props, index) =>
              props.feature_flag === true ? (
                <this.BannerFlag key={index} {...props} bp={bp} />
              ) : null
            )}
          </Carousel>
        ) : (
          <NukaCarousel
            cellAlign="center"
            dragging={false}
            renderCenterLeftControls={({ previousSlide }) => (
              <Icon type="left" className="icon" onClick={previousSlide} />
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Icon type="right" className="icon" onClick={nextSlide} />
            )}
            renderBottomCenterControls={null}
          >
            {properties.map((props, index) =>
              props.feature_flag === true ? (
                <this.BannerFlag key={index} {...props} bp={bp} />
              ) : null
            )}
          </NukaCarousel>
        )}
      </StyledRow>
    )
  }
}
