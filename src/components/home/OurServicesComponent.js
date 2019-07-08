import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'
import Styled from 'styled-components'

import commercialLotThumb from '../../images/home/commercial-lot-thumb.jpg'
import officeSpaceThumb from '../../images/home/office-space-thumb.jpg'
import retailSpaceThumb from '../../images/home/retail-space-thumb.jpg'

const StyledCol = Styled(Col)`
  background-color:'white';
  background-image:url('${props => props.src}');
  background-size:cover;
  background-position:center;
  padding:20px !important;
  position:relative;
  margin-bottom: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  > div {
    position:relative;
    color:white;
    z-index:1;
    font-size: .9em;
  }

  .boxHeading {
    color: #fad127;
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 4px;
  }

  &:after{
    content:'';
    position:absolute;
    z-index:0;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(19,19,19,0.9);
    background: linear-gradient(to bottom, rgba(19,19,19,0.9) 0%, rgba(76,76,76,0.42) 50%, rgba(19,19,19,0.9) 100%);
  }
`

class OurPortfolioComponent extends Component {
  render() {
    return (
      <div style={{ margin: '4% 0px' }}>
        <Row type="flex" justify="center">
          <Col xs={23} md={23} lg={22} xl={18}>
            <Row>
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 12, offset: 6 }}
                style={{ textAlign: 'center' }}
              >
                <div className="headerName">
                  <Icon
                    type="deployment-unit"
                    style={{ fontSize: '54px', color: '#001529' }}
                  />
                  <div style={{ marginBottom: 0 }}>Our Services</div>
                  <div>
                    We are an end-to-end real estate consultancy firm ready to
                    provide your business with solutions regardless of the stage
                    you are in.
                  </div>
                </div>
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="center">
              <StyledCol
                xs={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 7 }}
                src={officeSpaceThumb}
              >
                <div>
                  <div className="boxHeading">
                    Office Buildings/Office Spaces
                  </div>
                  <div>
                    PRIME Philippines is with you in choosing the most
                    strategic, cost-efficient and accessible workplace to
                    operate your business in the metro. We aim to provide you
                    with your next business address in line with your business
                    aggressive growth and expansion towards success.
                  </div>
                </div>
              </StyledCol>
              <StyledCol
                xs={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 7 }}
                src={retailSpaceThumb}
              >
                <div>
                  <div className="boxHeading">
                    Retail Building/Retail Spaces
                  </div>
                  <div>
                    As the leading real estate consultancy firm in the country,
                    PRIME Philippines expertise lies in our market knowledge and
                    influence among the top real estate developers. We help you
                    find the best commercial space solution for your business to
                    be the next go-to destination in Davao City.
                  </div>
                </div>
              </StyledCol>
              <StyledCol
                xs={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 7 }}
                src={commercialLotThumb}
              >
                <div>
                  <div className="boxHeading">Commercial Lots</div>
                  <div>
                    These commercial lots are strategically located along the
                    major thoroughfares in the Metro, specifically along the
                    roads of J.P. Laurel Avenue and C.P. Garcia Highway. With
                    our experience and heavy exposure in the retail industry, we
                    believe that expanding your business in this
                    highly-progressive area will open more opportunities for
                    your growth.
                  </div>
                </div>
              </StyledCol>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default OurPortfolioComponent
