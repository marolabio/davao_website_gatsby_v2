import React from 'react'
import { Row, Col } from 'antd'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faExpandArrowsAlt,
  faGripHorizontal,
  faBroadcastTower,
  faStreetView,
  faCalendarCheck,
  faCertificate,
  faVectorSquare,
  faCheckDouble,
  faParking,
  faLayerGroup,
  faHandshake,
  faClipboardList,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faExpandArrowsAlt,
  faGripHorizontal,
  faBroadcastTower,
  faStreetView,
  faCalendarCheck,
  faCertificate,
  faVectorSquare,
  faCheckDouble,
  faParking,
  faLayerGroup,
  faHandshake,
  faClipboardList
)

const StyledSpecificationWrapper = Styled(Col)`
  padding: 2px 40px;
  svg {
    margin: 0 5px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    svg {
      display: none;
    }
    
    font-size: 16px;
    line-height: 18px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    svg {
      display: none;
    }
    
    font-size: 14px;
    line-height: 16px;
  }
`

const StyledContent = Styled.div`
  padding: 2px 10px;

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 16px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
  }
`

class DetailsComponent extends React.Component {
  ListingDetailTitle = ({
    icon,
    content,
    fontSize = '1em',
    fontWeight = 'normal',
  }) => (
    <div
      style={{
        display: 'flex',
        ...{ fontSize, fontWeight },
      }}
    >
      {icon ? (
        <div style={{ minWidth: 24, maxWidth: 30 }}>
          <FontAwesomeIcon {...{ icon }} />
        </div>
      ) : null}
      <div>{content}</div>
    </div>
  )

  SpecificationItem = ({ details: { key, value, icon } }) => {
    return (
      <StyledSpecificationWrapper>
        <Row type="flex">
          <Col span={12}>
            <FontAwesomeIcon color="#636e72" icon={icon} /><b>{key}</b>:
          </Col>
          <Col span={12}>{value}</Col>
        </Row>
      </StyledSpecificationWrapper>
    )
  }
  render() {
    const { screenBreakpoint: bp, property } = this.props
    return (
      <div style={{ padding: '3% 0' }}>
        <Row type="flex" justify="center">
          <Col xs={23} sm={23} md={20} lg={20} xl={20} xxl={15}>
            <Row type="flex" gutter={24}>
              <Col
                xs={{ span: 24, order: 2 }}
                lg={{ span: 12, order: 1 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <div>
                <StyledContent>
                  <this.ListingDetailTitle
                    content={property.property_name}
                    fontSize="2em"
                    fontWeight="bold"
                  />
                  <this.ListingDetailTitle
                    icon={faMapMarkedAlt}
                    content={property.location}
                  />
                  <br />
                    <p>{property.description}</p>
                    {property.specs
                      .filter(v => v.key === 'Ideal Development')
                      .map((v, index) => (
                        <div key={index}>
                          <div style={{ fontWeight: 'bold' }}>
                            Ideal Development
                          </div>
                          <div>{v.value}</div>
                        </div>
                      ))}
                  </StyledContent>

                  <br />
                  {property.specs
                    .filter(v => v.key !== 'Ideal Development')
                    .map((value, index) => (
                      <this.SpecificationItem key={index} details={value} />
                    ))}
                </div>
              </Col>

              <Col
                xs={{ span: 24, order: 1 }}
                lg={{ span: 12, order: 2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:
                    bp === 'sm' || bp === 'xs' ? 'center' : 'start',
                }}
              >
                <img
                  src={
                    property.thumb_path
                      ? require(`../../images/portfolio/thumb/${
                          property.thumb_path
                        }`)
                      : require(`../../images/placeholder.jpg`)
                  }
                  alt={property.property_name}
                  style={{
                    margin: 0,
                    backgroundColor: '#242424',
                    maxWidth: '100%',
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default DetailsComponent
