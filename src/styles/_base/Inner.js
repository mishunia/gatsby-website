import styled from 'styled-components'
import { media } from './Media'

const InnerStyled = styled.div`
  max-width: ${props => props.theme.size.inner};
  padding: 0 ${props => props.theme.gutter.l};
  width: 100%;
  margin: 0 auto;
`

export default InnerStyled
