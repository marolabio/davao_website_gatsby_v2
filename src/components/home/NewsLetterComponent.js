import React, { Component } from 'react'
import { Input, Row, Col, Modal, Button, Form, Spin } from 'antd'
import Styled from 'styled-components'
import PublicationCover from '../../images/home/businesasusual.png'

const Wrapper = Styled.div`
  margin:4% 0px;
`

const StyledRow = Styled(Row)`
  background-color: #003366;
  padding: 10px;
`

const StyledCol = Styled(Col)`
  color: #fff;
  & > h3{
    color: #fad127;
  }
`

const PublicationCoverStyled = Styled.img`
  max-height:250px;
  margin-bottom:0;
  filter: drop-shadow(5px 5px 5px #222);

  /* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
  */

  @media (min-width: 1281px) {
    max-height: 170px;
    transform: scale(1.5, 1.5);
  }

  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-height: 170px;
    transform: scale(1.5, 1.5);
  }

  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) {
    transform: scale(1.2,1.2);
    max-width: initial;
    left: -35%;
    position: relative;
  }

  /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    transform: scale(1.2,1.2);
    max-width: initial;
    left: -35%;
    position: relative;
  }

  /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */

  @media (min-width: 481px) and (max-width: 767px) {
    transform: scale(1.2,1.2);
    max-width: initial;
    left: -45%;
    position: relative;
  }

  /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */

  @media (min-width: 320px) and (max-width: 480px) {
    transform: scale(1.2,1.2);
    max-width: initial;
    left: -45%;
    position: relative;
  }
`

const StyledForm = Styled(Form)`
  .ant-form-explain {
    color: #fad127 !important; 
  }
`

class NewsLetterComponent extends Component {
  state = { email: '', loading: false }

  handleSubscribeForm = e => {
    e.preventDefault()
    const { email } = this.state
    // eslint-disable-next-line react/destructuring-assignment
    const { validateFields } = this.props.form
    validateFields(err => {
      if (!err) {
        this.setState({ loading: true })
        fetch('https://www.primephilippines.com/radar-subscription', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_name: email,
          }),
        }).then(
          () => {
            this.setState({ email: '', loading: false })
            Modal.success({
              title: 'Thank you for getting in touch!',
              content: (
                <div>
                  <p>
                    We appreciate you joining our weekly PRIME radar newsletter.
                    One of our colleagues will get back to you shortly.
                  </p>
                  <p>Have a great day!</p>
                </div>
              ),
            })
          },
          () => {
            this.setState({ loading: false })
            Modal.confirm({
              title: 'Do you want to continue?',
              content: 'Sorry there might be some problem on your connection',
              centered: true,
              onOk() {
                // this.handleSubscribeForm()
              },
            })
          }
        )
      }
    })
  }

  inputChange(value) {
    this.setState({ email: value })
  }

  render() {
    const { screenBreakpoint } = this.props
    // eslint-disable-next-line react/destructuring-assignment
    const { getFieldDecorator } = this.props.form
    const { email } = this.state
    return (
      <Wrapper>
        <StyledRow type="flex" align="middle" justify="center">
          <StyledCol
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {screenBreakpoint === 'xs' || screenBreakpoint === 'sm' ? null : (
              <PublicationCoverStyled
                src={PublicationCover}
                alt={PublicationCover}
              />
            )}
          </StyledCol>
          <StyledCol
            xs={24}
            sm={24}
            md={15}
            lg={{ span: 13, offset: 1 }}
            xl={{ span: 10, offset: 2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3>Join our weekly PRIME radar newsletter</h3>
            <p>
              Be up to date with PRIME news, tips and more about real estate.
              Subscribe now!
            </p>
            <div>
              <Spin className="loadingIcon" spinning={this.state.loading}>
                <StyledForm
                  style={{ display: 'flex' }}
                  onSubmit={this.handleSubscribeForm}
                >
                  <Form.Item style={{ flex: '1 1 auto' }}>
                    {getFieldDecorator('userEmail', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your email!',
                          type: 'email',
                        },
                      ],
                      initialValue: email,
                    })(
                      <Input
                        placeholder="Please enter your email address..."
                        onChange={e => this.inputChange(e.target.value)}
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Subscribe
                    </Button>
                  </Form.Item>
                </StyledForm>
              </Spin>
            </div>
          </StyledCol>
        </StyledRow>
      </Wrapper>
    )
  }
}
export default Form.create()(NewsLetterComponent)
