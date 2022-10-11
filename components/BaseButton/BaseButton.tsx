import { IButtonProps } from './interface'

const BaseButton = ({
  text,
  href,
  target,
  size,
  isFluid,
  as
}: IButtonProps) => {
  return <button>{text}</button>
}

export default BaseButton
