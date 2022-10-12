import React from 'react'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  size?: 's' | 'm'
  isFluid?: boolean
}

export interface IAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
  size?: 's' | 'm'
  isFluid?: boolean
}

export interface IBaseButtonProps<
  T extends React.ElementType = React.ElementType
> {
  as: T
  text: string
  size?: 's' | 'm'
  isFluid?: boolean
}

export type ButtonProps<T extends React.ElementType> = IBaseButtonProps<T> &
  Omit<React.ComponentProps<T>, keyof IBaseButtonProps>

// export interface IBaseButtonProps {
//   as: 'button' | 'a'
//   text: string
//   size?: 's' | 'm'
//   isFluid?: boolean
// }
