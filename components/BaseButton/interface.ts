import React from 'react'

export interface BaseButtonProps {
  text: string
  size?: 's' | 'm'
  isFluid?: boolean
}

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseButtonProps {
  href: string
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {
  href?: undefined
}
