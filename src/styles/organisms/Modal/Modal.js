import React, { Component } from 'react'
import Modal from 'styled-react-modal'
import styled from 'styled-components'
import Button from '../../atoms/Button/Button'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'


const StyledModal = Modal.styled`
  width: ${props => props.theme.size.modal};
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  color: #000;
  padding: ${({theme}) => theme.gutter.xl};
`

const StyleModalHead = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

const StyleModalAction = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

const StyleModalContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

class FancyModalButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(e) {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleModal}>Click me</Button>
        <StyledModal
          isOpen={this.state.isOpen}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
        >
          <StyleModalHead>
            <Heading center h3>
              Modal title
            </Heading>
          </StyleModalHead>
          <StyleModalContent>
            <Paragraph p2>
              b la bla bla bla bla bla la bla bla bla bla bla la bla bla bla bla
              bla
            </Paragraph>
            <Paragraph p2>
              b la bla bla bla bla bla la bla bla bla bla bla la bla bla bla bla
              bla
            </Paragraph>
          </StyleModalContent>
          <StyleModalAction>
            <Button onClick={this.toggleModal}>Close me</Button>
          </StyleModalAction>
        </StyledModal>
      </div>
    )
  }
}

export default FancyModalButton

