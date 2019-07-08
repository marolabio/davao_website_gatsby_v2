import React, { Component } from 'react'
import Styled from 'styled-components'
import { Layout as AntLayout, Icon, Row, Col } from 'antd'

const { Footer } = AntLayout

const StyledFooter = Styled(Footer)`
  border-top: 1px solid black;
  padding: 20px;
  /* line-height: 20px; */
  background-color: #353535;
  color: white;

  h2 {
    color: #fad127;
  }

  .locationHead {
    font-size: 1.2em;
    margin-bottom: 4px;
  }

  ul {
    padding: 0;
    list-style: none;

    & > li {
      i {
        margin-right: 5px !important; 
      }
    }
  }
`

const StyledCol = Styled(Col)`
  padding-bottom: 15px;
  &:nth-child(3) {
    i {
      font-size: 24px;
      padding-right: 6px;
    }
  }
  li{
    margin-bottom: 5px;
    font-size: .9em;
    color: #f9f1f1;
    padding-left: 8px;
  }
  li:last-child{
    margin-bottom: 0;
  }
  a:link, a:visited {
    color: #fff;
  }
`

export default class FooterSectionComponent extends Component {
  render() {
    return (
      <StyledFooter>
        <Row type="flex" justify="center">
          <Col xs={24} md={24} lg={23} xl={20}>
            <Row type="flex">
              <Col xs={24}>
                <h2>You can reach us through:</h2>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <StyledCol sm={24} md={11} lg={7} xl={8}>
                <div className="locationHead">METRO MANILA</div>
                <ul style={{ marginLeft: 0 }}>
                  <li>
                    <Icon type="environment" />
                    Ground Floor, Pacific Century Tower #1472 - Quezon Avenue,
                    South Triangle, Quezon City, Manila, Philippines 1103
                  </li>
                  <li>
                    <Icon type="phone" />
                    (+632) 422 8888
                  </li>
                  <li>
                    <Icon type="mobile" />
                    (+63) 0917-555-8222
                  </li>
                  <li>
                    <Icon type="mail" />
                    inquiry@primephilippines.com
                  </li>
                </ul>
              </StyledCol>
              <StyledCol sm={24} md={11} lg={7}>
                <div className="locationHead">MINDANAO OFFICE</div>
                <ul style={{ marginLeft: 0 }}>
                  <li>
                    <Icon type="environment" />
                    Fourth Floor, Topaz Tower Damosa I.T. Park, J.P. Laurel
                    Avenue, Lanang Davao City, Davao Del Sur, Philippines 8000
                  </li>
                  <li>
                    <Icon type="phone" />
                    (+6382) 324 1086
                  </li>
                  <li>
                    <Icon type="mobile" />
                    (+63) 939 819 5610 / (+63) 917 622 0454
                  </li>
                  <li>
                    <Icon type="mail" />
                    inquiry.davao@primephilippines.com
                  </li>
                </ul>
              </StyledCol>
              <StyledCol sm={24} lg={7}>
                <div className="locationHead">SOCIAL MEDIA</div>
                <ul style={{ marginLeft: 0 }}>
                  <li>
                    <a href="https://www.facebook.com/PRIMEPhilippines/">
                      <Icon type="facebook" />
                    </a>
                    <a href="https://twitter.com/officialprimeph">
                      <Icon type="twitter" />
                    </a>
                    <a href="https://www.linkedin.com/company/prime-corporation-philippines">
                      <Icon type="linkedin" />
                    </a>
                  </li>
                  <li>
                    &copy; Copyright 2013 - 2019 <br />
                    PRIME Philippines All Rights Reserved
                  </li>
                </ul>
              </StyledCol>
            </Row>
          </Col>
        </Row>
      </StyledFooter>
    )
  }
}
