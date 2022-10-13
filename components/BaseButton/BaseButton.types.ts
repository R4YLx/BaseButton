import React from 'react'

type AnchorElementAttributes = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'aria-label'
>

interface BaseButtonProps {
  text: string
  size?: 's' | 'm'
  isFluid?: boolean
}

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseButtonProps {
  href?: AnchorElementAttributes['href']
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {
  href?: undefined
}

export type ButtonProp = AnchorProps | ButtonProps

// export type BaseProps = BaseButtonProps & (AnchorProps | ButtonProps)

// import { IButtonProps } from './BaseButton.types'

// type ConditionalProps =
//   | {
//       href?: undefined
//       target?: never
//     }
//   | {
//       href: string
//       target?: string
//     }

// export type Props = IButtonProps & ConditionalProps
