import React from 'react'
import { IButton } from './IButton'
import { StyledButton } from './style'

const Button = (props: IButton) => {
  const {label, color, onMyClick} = props
  return (
    <StyledButton color={color} onClick={onMyClick}>{label}</StyledButton>
  )
}

export default Button