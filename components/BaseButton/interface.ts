import React from 'react'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  href?: string
  target?: string
  size: 'm' | 'm'
  isFluid?: boolean
  as: 'a' | 'button'
}
