import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const flying = keyframes`
  0% {
    transform:translate(0%,0%);
  }
  10% {
    transform:translate(-10%,10%);
  }
  20% {
    transform:translate(-15%,20%);
  }
  30% {
    transform:translate(-30%,30%);
  }
  40% {
    transform:translate(-45%,25%);
  }
  50% {
    transform:translate(-55%,30%);
  }
  60% {
    transform:translate(-90%,10%);
  }
  70% {
    transform:translate(-45%,40%);
  }
  80% {
    transform:translate(-30%,20%);
  }
  80% {
    transform:translate(-10%,10%);
  }
  100% {
    transform:translate(0%,0%);
  }
`

const loader = keyframes`
from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

export { rotate, flying, loader }
