import React, { Component } from 'react'
import styled from 'styled-components'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const NewsletterStyledWrap = styled.div`
  width: 100%;
  max-width: 580px;
  color: #fff;

  span {
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    padding: ${({ theme }) => theme.gutter.xs};
  }
`

const NewsletterStyled = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 580px;
`

const NewsletterInputStyled = styled.div`
  position: relative;
  width: 100%;
`

const NewsletterButtonStyled = styled.div`
  position: absolute;
  right: -10px;
  top: 0;
`

const mailValidate = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i

export default class Newsletter extends Component {
  constructor() {
    super()
    this.state = { name: '', email: '', isOpened: false, inactiveSubmit: true }
  }

  handleChange = event => {
    event.target.value = event.target.value.toLowerCase()
    this.setState({ [event.target.name]: event.target.value })
    console.log(event)
    if (event.target.value && mailValidate.test(event.target.value)) {
      // $submitBtn.addClass(cssClass.isActive)
      //inputMailValue = event.target.value.val()
      this.setState({ inactiveSubmit: false })
      console.log('good')
    } else {
      this.setState({ inactiveSubmit: true })
      console.log('bad')
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log('User name : ' + this.state.name)
    console.log('User Email : ' + this.state.email)
    const url = 'https://jsonplaceholder.typicode.com/users/'
    const data = {
      name: this.state.name,
      email: this.state.email
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .then(response => {
        this.setState({ isOpened: true })
      })
  }
  render() {
    return (
      <NewsletterStyledWrap>
        {!this.state.isOpened ? (
          <NewsletterStyled onSubmit={this.handleSubmit}>
            <NewsletterInputStyled>
              <Input name="email" onChange={this.handleChange} newsletter />
            </NewsletterInputStyled>
            <NewsletterButtonStyled>
              <Button as="button" medium disabled={this.state.inactiveSubmit}>
                Subscribe
              </Button>
              {/* {this.state.isOpened ? <div>DONE!</div> : ''} */}
            </NewsletterButtonStyled>
          </NewsletterStyled>
        ) : (
          <div>
            <Paragraph p5 center>
              DONE!
            </Paragraph>
            <Paragraph center>
              Email has been sent to your mail <span>{this.state.email}</span>.
              Check your inbox
            </Paragraph>
          </div>
        )}
      </NewsletterStyledWrap>
    )
  }
}
