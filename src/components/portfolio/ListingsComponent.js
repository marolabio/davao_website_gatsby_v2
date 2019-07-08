import React, { Component } from 'react'
import { Row, Col, Input, Select } from 'antd'
import { Link } from 'gatsby'
import Styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Option = Select.Option
const Search = Input.Search

const scaleUpY = keyframes`
  from {
    transform:scaleY(0);
    transform-origin: 0 100%;
  }

  to {
    transform:scaleY(1);
    transform-origin: 0 100%;
  }
`

const StyledCol = Styled(Col)`
  padding: 5px !important;
  & > a > div:first-child {
    height:100%;
    padding:10px;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.25);
  }

  & > a:hover {
    > div > div:last-child {
      color:#fad127;
      animation: ${scaleUpY} 0.2s linear both;
    }
  }
`

const StyledPropertyCardContainer = Styled.div`
  display: flex;
  align-items: flex-end;
  position:relative;
  background-position:center;
  background-repeat:no-repeat;
  min-height: 250px;
  ${props =>
    props.thumb_path
      ? `background-image: url('${require(`../../images/portfolio/thumb/${
          props.thumb_path
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

  > div {
    z-index:1;
    color:white;
  }
`
const StyledOverlayDescription = Styled.div`
  background-color:rgba(0,51,102,0.9);
  position:absolute;
  left:0;
  top:0;
  z-index:1;
  height:100%;
  width:100%;
  padding:10px;
  transform:scaleY(0);
  display:flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  color:#fad127;

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`

const StyledSearchBar = Styled.div`
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  text-aling: right;

  .input {
    width: 350px;
    margin-right: 10px;
  }
  .select {
    width: 150px;
  }
`

const ListingDetail = ({
  icon,
  content,
  color = '#ffffff',
  fontSize = '1em',
  status,
}) => {
  const showStatus = status ? { display: 'block' } : { display: 'none' }

  return (
    <div
      style={{
        display: 'flex',
        ...{ color, fontSize },
      }}
    >
      <div style={showStatus}>
        <span
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: 'white',
            fontSize: '.7em',
            borderBottom: '3px solid	#8B0000',
            backgroundColor: '#FF0000',
            padding: '3px 10px 3px 10px',
            textTransform: 'uppercase',
            marginTop: '5px',
          }}
        >
          {status}
        </span>
      </div>
      <div style={{ minWidth: 24, maxWidth: 30 }}>
        <FontAwesomeIcon {...{ icon }} />
      </div>
      <div>{content}</div>
    </div>
  )
}

export default class listings extends Component {
  state = {
    keyword: '',
    type: '',
  }

  handleInput = e => {
    const keyword = e.target.value.toLowerCase()
    this.setState({ keyword })
  }

  handleSelect = value => {
    this.setState({ type: value })
  }

  keywordFilter = keyword => {
    return function(p) {
      return (
        p.property_name.toLowerCase().includes(keyword) ||
        p.location.toLowerCase().includes(keyword) ||
        !keyword
      )
    }
  }

  typeFilter = type => {
    return function(p) {
      return p.property_type === type || !type
    }
  }

  PropertyThumbCard = ({ props: propDetails }) => {
    const {
      listing_id,
      property_name,
      location,
      url_path,
      thumb_path,
      status,
    } = propDetails
    return (
      <StyledCol xs={24} sm={24} md={8} lg={8} xl={6} xxl={6}>
        <Link to={`/portfolio-listings/${listing_id}/${encodeURI(url_path)}`}>
          <StyledPropertyCardContainer {...{ thumb_path }}>
            <div>
              <ListingDetail
                icon={faBuilding}
                content={property_name}
                color="#fad127"
                fontSize="1.2em"
                status={status}
              />
              <ListingDetail icon={faMapMarkedAlt} content={location} />
            </div>
            <StyledOverlayDescription>
              Read more about this property
            </StyledOverlayDescription>
          </StyledPropertyCardContainer>
        </Link>
      </StyledCol>
    )
  }

  render() {
    const { properties, pathname, property } = this.props
    const { keyword, type } = this.state
    const showAll = !!(
      pathname === '/portfolio-listings' || pathname === '/portfolio-listings/'
    )
    const filteredProperties = properties.sort((a, b) => ('' + a.status).localeCompare(b.status))
      .filter(this.keywordFilter(keyword))
      .filter(this.typeFilter(type))
    const noResults = !!(filteredProperties.length === 0)

    return (
      <Row
        type="flex"
        justify="center"
        style={{
          marginBottom: '4%',
        }}
      >
        {showAll ? (
          <Col xs={23} md={22} lg={23} xl={23} xxl={18}>
            <StyledSearchBar>
              <Search
                size="large"
                className="input"
                type="text"
                placeholder="Enter an address, property and etch.."
                onChange={this.handleInput}
              />
              <Select
                size="large"
                className="select"
                name="type"
                onChange={this.handleSelect}
                value={this.state.type}
              >
                <Option value="">All</Option>
                <Option value="Commercial Lot">Commercial Lot</Option>
                <Option value="Office Space">Office Space</Option>
                <Option value="Retail Space">Retail Space</Option>
              </Select>
            </StyledSearchBar>

            {noResults ? (
              <div style={{ textAlign: 'center', margin: '4%' }}>
                <h3>Sorry, no results were found.</h3>
              </div>
            ) : (
              filteredProperties.map((props, index) =>
                props.active ? (
                  <this.PropertyThumbCard key={index} {...{ props }} />
                ) : null
              )
            )}
          </Col>
        ) : (
          <Col xs={23} sm={23} md={20} lg={20} xl={20} xxl={15}>
            <h2>Similar Properties</h2>
            {properties
              .filter(
                p =>
                  p.property_type === property.property_type &&
                  p.property_name !== property.property_name
              )
              .map((props, index) =>
                props.active ? (
                  <this.PropertyThumbCard key={index} {...{ props }} />
                ) : null
              )}
          </Col>
        )}
      </Row>
    )
  }
}
