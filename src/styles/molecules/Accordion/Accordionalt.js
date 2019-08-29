import React, { Component } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { InnerStyled, SectionStyled } from '.././../_base/Inner'
import { AccordionContainerStyled } from './styles'

class Toggle extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    const { trigger } = this.props

    const children = React.Children.map(this.props.children, child => {
      if (child.type === DropdownTrigger) {
        return React.cloneElement(child, { onClick: this.toggle })
      } else if (React.isValidElement(child)) {
        return React.cloneElement(child, { isOpen: this.state.isOpen })
      } else {
        return (
          <DropdownContent isOpen={this.state.isOpen}>{child}</DropdownContent>
        )
      }
    })

    return (
      <span className={this.props.className}>
        {trigger && (
          <DropdownTrigger onClick={this.toggle}>{trigger}</DropdownTrigger>
        )}
        {children}
      </span>
    )
  }
}

const DropdownTrigger = styled.span``

const DropdownContent = styled.div`
  position: absolute;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

const fadeIn = keyframes`
  0%   { opacity: 0 }
  100% { opacity: 100 }
`

const CustomContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${fadeIn} 1s linear;
`

class Accordionalt extends Component {
  render() {
    return (
      // <SectionStyled>
      <InnerStyled>
        <AccordionContainerStyled>
          <Toggle trigger="Click me">
            <CustomContent>Hello</CustomContent>
          </Toggle>
          <Toggle trigger="Click me">
            <CustomContent>Hello</CustomContent>
          </Toggle>
          <Toggle trigger="Click me">
            <CustomContent>Hello</CustomContent>
          </Toggle>
        </AccordionContainerStyled>
      </InnerStyled>
      // </SectionStyled>
    )
  }
}

export default Accordionalt
