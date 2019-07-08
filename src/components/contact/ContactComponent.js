import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Form, Row, Col, Input, Icon, Spin, Modal, Button } from 'antd'
import Styled from 'styled-components'
// import PropTypes from 'prop-types'

const ContactContainer = Styled(Row)`
  padding: 5% 0%;
    .outer-column{
    }
  
`

const StyledFormContainer = Styled(Row)`
  .display_error {
    background: transparent;
    border: none;
    border-bottom: 2px solid red;
  }
  
  padding: 5% 0%;
`
const StepsContent = Styled(Col)`
  height: 380px !important;
  display: flex !important;
  align-content: stretch;
  padding: 50px 0px;
    input {
      font-size: 1.5em;
      background: transparent;
      border: none;
      border-bottom: 2px solid #D3D3D3;
    }

    input:focus {
      box-shadow: none;
      background: transparent;
      border: none;
      border-bottom: 2px solid #fad127;
    }

    input:hover {
      box-shadow: none;
      background: transparent;
      border: none;
      border-bottom: 2px solid #fad127;
    }

    .loadingIcon{
      text-align: center;
      background: rgba(0,0,0,0.05);
      size: large;
    }
      
    div{
      display: flex;
      flex-direction: column;
      align-items: stretch;
      flex: 1 1 auto;
      div{
        flex: 0 1 auto;
        flex-direction: row;
        .number{
          font-size: 4em;
          font-weight: bold;
          user-select: none;
        }
        .last-number{
          font-size: 1.5em;
          color: #D3D3D3;
          margin-top: 12px;
          user-select: none;
        }
      }
      .question{
        font-size: 2em;
        flex: 1 1 auto;
        user-select: none;
      }
      .form{
        flex-direction: row;
        align-items: flex-end;
      }
      .email{
        margin-top: 10px;
        font-size: 1em;
        display: inline;
        a:link {
          text-decoration: underline;
        }
      }
    }
`

const StyledPrevInput = Styled(Col)`
  height: ${props =>
    props.bp === 'xs' || props.bp === 'sm' ? '190px' : '380px'};
  display: flex !important;
  padding: 5px !important;
  height: 380px !important;

  > div {
    padding: 10px;
    background-color:#ffffff;
    flex: 1 1 auto;
    display: flex;
    :hover{
      background-color: ${props => (props.hover === 0 ? '#ffffff' : '#fad127')};
      cursor:pointer;
    }
  }
  div > div{
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

/* Small Devices */
@media (min-width: 481px) and (max-width: 767px) {
  height: 190px !important;
}

@media (min-width: 320px) and (max-width: 480px) {
  height: 190px !important;  
}



`

const StyledNextInput = Styled(Col)`
  height: 380px !important;
  padding: 5px !important;
  display: flex !important;
  
  > div {
    padding: 10px;
    background-color:#ffffff;
    flex: 1 1 auto;
    display: flex;
    :hover{
        background-color:#fad127;
        cursor:pointer;
    }
  }

  div > div {
    display: flex;
    flex-direction: column;
    .next-step-number{
      font-size: 4em;
      font-weight: bold;
      user-select: none;
      text-align: left;
      flex:1 1 auto;
    }
    .small-text-content{
      font-size: .9em;
      user-select: none;
    }
    .textpadding{
      user-select: none;
      align-items: flex-end;
      display: flex;
      flex-direction: row;
    }
  }

  /* Small Devices */

  @media (min-width: 481px) and (max-width: 767px) {
    height: 190px !important;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 190px !important;  
  }
`

const StyledFormTitle = Styled.div`
  font-size: 3em;
  user-select: none;
`

const ContactMessage = Styled.div`
  display: flex;
  align-content: stretch;
  align-items: center;
  height: 70vh;
    div{
      flex-direction: column;
      align-content: stretch;
        .message{
          font-size: 3em;
          font-weight: bold;
          flex: 1 1 auto;
          padding-bottom: 5%;
        }
        .gotoPortfolio{
          flex: 1 1 auto;
        }
    }
`

const StyledLink = Styled(Link)``

class ContactComponent extends Component {
  state = {
    currentFormIndex: 0,
    name: '',
    email: '',
    mobilenumber: '',
    description: '',
    loading: false,
    error: false,
    successful: false,
  }

  steps = [
    {
      title: '01',
      content: "What's your name?",
      input: <Input name="name" type="text" placeholder="Name" />,
    },
    {
      title: '02',
      content: "What's your email address?",
      input: <Input name="email" type="email" placeholder="Email" required />,
    },
    {
      title: '03',
      content: "What's your contact number?",
      input: (
        <Input
          name="contact"
          type="text"
          placeholder="(+63) 917 555 8222"
          required
        />
      ),
    },
    {
      title: '04',
      content: 'How can we help you?',
      input: <Input name="help" placeholder="Describe your needs" required />,
    },
    {
      title: '05',
      content: 'Submit',
    },
  ]

  handleOnClickNext = e => {
    e.preventDefault()
    let { currentFormIndex } = this.state
    if (this.checkErrorFields(currentFormIndex)) {
      this.setState({ currentFormIndex: (currentFormIndex += 1) })
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  }

  /**
   * Stateless Components
   */

  nextStepButton = ({ currentFormIndex, isFinish }) => (
    <StyledNextInput
      xs={{ span: 12, order: 2 }}
      md={{ span: 4, order: 1 }}
      onClick={isFinish ? this.handleSubmitForm : this.handleOnClickNext}
    >
      <div>
        <div>
          <div className="next-step-number">
            {this.steps[currentFormIndex + 1].title}
          </div>
          <div className="textpadding">
            <div className="small-text-content">
              {this.steps[currentFormIndex + 1].content}
            </div>
            <Icon type="caret-right" />
          </div>
        </div>
      </div>
    </StyledNextInput>
  )

  handleOnClickPrev = e => {
    e.preventDefault()
    let { currentFormIndex } = this.state
    this.setState({ currentFormIndex: (currentFormIndex -= 1) })
    this.setState({ error: false })
  }

  prevStepButton = ({ currentFormIndex }) => (
    <StyledPrevInput
      hover={currentFormIndex}
      xs={{ span: 12, order: 2 }}
      md={{ span: 4, order: 1 }}
      onClick={currentFormIndex === 0 ? null : this.handleOnClickPrev}
    >
      <div>
        <div>
          <Icon type="caret-left" />
        </div>
      </div>
    </StyledPrevInput>
  )

  checkErrorFields = currentFormIndex => {
    switch (currentFormIndex) {
      case 0:
        return !!this.state.name.trim()
      case 1:
        return !!this.state.email.trim()
      case 2:
        return !!this.state.mobilenumber.trim()
      case 3:
        return !!this.state.description.trim()
      default:
        return true
    }
  }

  handleBlur = () => {
    this.setState({ error: false })
  }

  handleSubmitForm = e => {
    e.preventDefault()
    const { name, email, mobilenumber, description } = this.state
    const { currentFormIndex } = this.state
    if (this.checkErrorFields(currentFormIndex)) {
      this.setState({ error: false })

      // trigger loading indicator
      this.setState({
        loading: true,
        name: '',
        email: '',
        mobilenumber: '',
        description: '',
      })

      fetch('https://www.primephilippines.com/inquiry-contact-form-davao', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_name: name,
          client_email: email,
          contact_number: mobilenumber,
          message_text: description,
        }),
      }).then(
        () => {
          this.setState({ loading: false })
          this.setState({ successful: true })
        },
        () => {
          this.setState({ loading: false })
          Modal.confirm({
            title: 'Do you want to continue?',
            content: 'Sorry there might be some problem on your connection',
            centered: true,
            onOk() {
              // this.handleSubmitForm()
            },
          })
        }
      )
    } else {
      this.setState({ error: true })
    }
  }

  // eslint-disable-next-line class-methods-use-this
  inputTextChange(currentIndex, e) {
    this.setState({
      [currentIndex === 0
        ? 'name'
        : currentIndex === 1
        ? 'email'
        : currentIndex === 2
        ? 'mobilenumber'
        : 'description']: e.target.value,
    })
  }

  render() {
    const { currentFormIndex, error, successful } = this.state
    const { screenBreakpoint: screensize } = this.props
    const { isPortfolio } = this.props
    return (
      <ContactContainer type="flex" justify="center" align="middle">
        <Col
          xs={{ span: 22 }}
          sm={{ span: 22 }}
          md={{ span: 20 }}
          lg={{ span: 18 }}
          xl={{ span: 16 }}
          xxl={{ span: 12 }}
          style={{ display: successful ? '' : 'none' }}
        >
          <ContactMessage>
            <div>
              <div
                className="message"
                style={{
                  fontSize:
                    screensize === 'xs' || screensize === 'sm' ? '2em' : '',
                }}
              >
                Thank you for inquiry to us. One of our associate will get back
                to you within 24 to 48 hours.
              </div>
              {isPortfolio ? null : (
                <StyledLink to="/portfolio-listings">
                  <Button className="gotoPortfolio" type="primary">
                    Check our portfolio
                  </Button>
                </StyledLink>
              )}
            </div>
          </ContactMessage>
        </Col>
        <Col
          xs={{ span: 22 }}
          sm={{ span: 22 }}
          md={{ span: 20 }}
          lg={{ span: 18 }}
          xl={{ span: 16 }}
          xxl={{ span: 12 }}
          className="outer-column"
          style={{ display: successful ? 'none' : '' }}
        >
          <StyledFormTitle>Share your needs with us</StyledFormTitle>
          <Spin className="loadingIcon" spinning={this.state.loading}>
            <StyledFormContainer type="flex" justify="space-between">
              {currentFormIndex > 0 ? (
                <this.prevStepButton {...{ currentFormIndex }} />
              ) : (
                <this.prevStepButton {...{ currentFormIndex }} />
              )}
              <StepsContent
                xs={{ span: 24, order: 1 }}
                md={{ span: 12, order: 1 }}
              >
                <div>
                  <div>
                    <div className="number">
                      {this.steps[currentFormIndex].title}
                    </div>
                    <div className="last-number">0{this.steps.length - 1}</div>
                  </div>
                  <div className="question">
                    {this.steps[currentFormIndex].content}
                  </div>
                  <Form className="form">
                    {/** React.createElement(ReactNode, {props}) */}
                    {/** React.cloneElement(ReactElement, {props}) */}
                    {React.cloneElement(this.steps[currentFormIndex].input, {
                      value:
                        currentFormIndex === 0
                          ? this.state.name
                          : currentFormIndex === 1
                          ? this.state.email
                          : currentFormIndex === 2
                          ? this.state.mobilenumber
                          : this.state.description,
                      onChange: this.inputTextChange.bind(
                        this,
                        currentFormIndex
                      ),
                      onBlur: this.handleBlur,
                      onPressEnter:
                        currentFormIndex < this.steps.length - 2
                          ? this.handleOnClickNext
                          : this.handleSubmitForm,
                      required: true,
                      className: error ? 'display_error' : '',
                    })}
                    <div className="email">
                      Or send us an email{' '}
                      <a href="mailto:davao.inquiry@primephilippines.com">
                        davao.inquiry@primephilippines.com
                      </a>
                    </div>
                  </Form>
                </div>
              </StepsContent>
              {currentFormIndex < this.steps.length - 2 ? (
                <this.nextStepButton
                  {...{ currentFormIndex, isFinish: false }}
                />
              ) : (
                <this.nextStepButton
                  {...{ currentFormIndex, isFinish: true }}
                />
              )}
            </StyledFormContainer>
          </Spin>
        </Col>
      </ContactContainer>
    )
  }
}

export default ContactComponent
