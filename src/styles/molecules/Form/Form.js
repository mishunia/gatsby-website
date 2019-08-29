import React from 'react'
import styled from 'styled-components'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import { media } from '../../_base/Media'

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 740px;
`

const FormRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.gutter.l};
`

const FormRowItemStyled = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.gutter.l};

  @media ${media.tablet} {
    flex: 1;
  }
`

const FormActionStyled = styled.div`
  width: 100%;
`

const Form = props => (
  <FormStyled>
    <FormRowStyled>
      <FormRowItemStyled>
        <Input placeholder={props.name} />
      </FormRowItemStyled>
      <FormRowItemStyled>
        <Input placeholder={props.surname} />
      </FormRowItemStyled>
    </FormRowStyled>
    <FormRowStyled>
      <FormRowItemStyled>
        <Input textarea placeholder={props.text} />
      </FormRowItemStyled>
    </FormRowStyled>
    <FormActionStyled>
      <Button medium type="submit">
        Submit
      </Button>
    </FormActionStyled>
  </FormStyled>
)

export default Form
