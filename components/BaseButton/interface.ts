import React from 'react'

export interface ButtonProps {
  text: string
  size?: 's' | 'm'
  isFluid?: boolean
}

export interface IAnchor
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonProps {
  href: string
}

export interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  href?: undefined
}

export type ButtonType = IAnchor | IButton
