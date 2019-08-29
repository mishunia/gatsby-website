import React, { Component } from 'react'
import styled from 'styled-components'

const TextblockStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
`

export { TextblockStyled }
