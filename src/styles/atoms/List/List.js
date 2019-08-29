import styled, { css } from 'styled-components'
import CheckIcon from '../../../assets/images/check-mark.svg'

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

const ListItem = styled.li`
  position: relative;
  list-style: none;
  margin-bottom: ${props => props.theme.gutter.m};
  list-style: none;
  padding-left: 20px;

  font-size: ${props => props.theme.fontSizes.s2};

  &:before {
    content: '';
    position: absolute;
    background-image: url(${CheckIcon});
    background-repeat: no-repeat;
    width: 2em;
    height: 23px;
    background-size: 12px;
    left: 5px;
    top: 3px;
    color: red;
  }
`
export { List, ListItem }
