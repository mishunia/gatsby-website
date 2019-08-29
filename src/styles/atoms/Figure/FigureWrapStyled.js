import styled, { css } from 'styled-components'
import { flying } from '../../_base/Animations'

const FigureWrapStyled = styled.div`
  position: absolute;
  top: ${props => props.topPosition};
  left: ${props => props.leftPosition};
  animation: ${flying} ${props => props.animSpeed} linear infinite;
`

export default FigureWrapStyled
