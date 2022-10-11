import { IButtonProps } from './interface'
import Button from './Button.module.scss'
import clsx from 'clsx'

const BaseButton = ({ text, href, target, size, isFluid }: IButtonProps) => {
  const fullWidth = isFluid ? `${Button.fullWidth}` : ''

  return <button className={clsx(fullWidth)}>{text}</button>
}

export default BaseButton
