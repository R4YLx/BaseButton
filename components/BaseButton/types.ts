import { IButtonProps } from './BaseButton.interface'

type ConditionalProps =
  | {
      href?: undefined
      target?: never
    }
  | {
      href: string
      target?: string
    }

export type Props = IButtonProps & ConditionalProps
