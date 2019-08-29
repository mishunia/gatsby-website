import React from 'react'
import styled from 'styled-components'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const TicketStyled = styled.div`
  padding: ${({ theme }) => theme.gutter.xl} ${({ theme }) => theme.gutter.l};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  width: 100%;
  max-width: 372px;
`

const TicketHeadStyled = styled.div`
  display: inline-flex;
  position: relative;
  margin-bottom: ${({ theme }) => theme.gutter.l};

  &:before {
    position: absolute;
    content: '${({ number }) => number}';
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${props => props.theme.fontWeights.bold};
    opacity: 0.5;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;
    transform: translateY(-50%);
  }
   
`

const TicketContentStyled = styled.div`
  width: 100%;
`

const Ticket = () => (
  <TicketStyled>
    <TicketHeadStyled number="1">
      <Heading as="h4" h4>
        Download App
      </Heading>
    </TicketHeadStyled>
    <TicketContentStyled>
      <Paragraph p3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamc
      </Paragraph>
    </TicketContentStyled>
  </TicketStyled>
)

export default Ticket
