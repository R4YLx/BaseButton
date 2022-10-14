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

export interface AnchorElementProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseButtonProps {
  href: AnchorElementAttributes['href']
}

export interface ButtonElementProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {
  href?: undefined
}

export type ButtonProps = AnchorElementProps | ButtonElementProps

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
