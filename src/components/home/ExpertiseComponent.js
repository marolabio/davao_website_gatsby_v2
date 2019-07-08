import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = Styled.div`
  margin:4% 0px;
`

const StyledCard = Styled(Card)`  
  min-height: 100px;
  margin: 5px !important;
  border-radius: 5px !important;
  box-shadow: 0 4px 8px 0 #bdbdbd, 0 6px 20px 0 #bdbdbd;
  background-color: #fffff4 !important;
  h4 {
    margin-bottom: 0;
  }
  p { 
    margin-bottom: 0; 
  }

  .contents {
    font-size: .9em;
  }

  .title {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 6px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 30px;
    width: 15px;
    top: 20px;
    background-color: #003366;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

class ExpertiseComponent extends Component {
  expertise = [
    {
      id: 1,
      title: 'Commercial Property Investment',
      content:
        'We offer innovative solutions that maximize your real estate assets through high return investment.',
    },
    {
      id: 2,
      title: 'Brokerage/Leasing Solutions',
      content:
        'We provide innovative and tailor-fit brokerage solutions that complement space requirements to ensure maximum profitability and productivity.',
    },
    {
      id: 3,
      title: 'Real Estate Documentation Services',
      content:
        'We perform step-by-step real estate documentation on your behalf and offer comprehensive counsel on property potential.',
    },
    {
      id: 4,
      title: 'Property and Facilities Management ',
      content:
        'We present cost-efficient management strategies backed by top-notch research that will yeild maximum profit your residential and commercial properties.',
    },
    {
      id: 5,
      title: 'Research and Advisory',
      content:
        'Our internal research team equips you with optimized real estate solutions and sound decision-makin through in-depth market insight an extensive consultation services.',
    },
    {
      id: 6,
      title: 'Portfolio Management',
      content:
        'Our team comsolidates and organizes existing properties and provides sound investment advice to ensure maximum value of assets.',
    },
  ]

  render() {
    const { screenBreakpoint } = this.props
    return (
      <Wrapper>
        <Row type="flex" justify="center" style={{ textAlign: 'center' }}>
          <Col xs={23} md={18} lg={12}>
            <h1>Our Expertise</h1>
            <p>
              PRIME Philippines moves your business forward by incorporating the
              most innovative solutions to your ever changing real estate needs.
            </p>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xs={24} lg={22} xl={16}>
            <Row type="flex" justify="center">
              {this.expertise.map(data => (
                <Col
                  xs={{ span: 23 }}
                  md={{ span: 11 }}
                  lg={{ span: 8 }}
                  key={data.id}
                >
                  <StyledCard bp={screenBreakpoint} bordered={false}>
                    <div>
                      <h4 className="title">{data.title}</h4>
                      <div className="contents">{data.content}</div>
                    </div>
                  </StyledCard>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

ExpertiseComponent.propTypes = {
  screenBreakpoint: PropTypes.string,
}

export default ExpertiseComponent
