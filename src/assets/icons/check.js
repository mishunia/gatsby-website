import React from 'react'

import { Icon } from '../../styles/_base/Icon'

const CheckIcon = props => {
  const { iconColor, iconWidth, iconHeight } = props
  return (
    <Icon iconColor={iconColor} iconWidth={iconWidth} iconHeight={iconHeight}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
      </svg>
    </Icon>
  )
}

export default CheckIcon
