import { ButtonProps } from './BaseButton.types'
import styles from './BaseButton.module.scss'
import clsx from 'clsx'
import { AnchorProps } from './BaseButton.interface'

const hasRef = (props: ButtonProps): props is AnchorProps => {
  return 'href' in props
}

const BaseButton = ({ text, size, isFluid, ...rest }: ButtonProps) => {
  const propStyles = clsx({
    [styles.fullWidth]: isFluid,
    [styles.buttonMedium]: size === 'm',
    [styles.buttonSmall]: size === 's'
  })

  const tProps = rest as ButtonProps

  if (hasRef(tProps)) {
    return (
      <a {...tProps} className={`${styles.button} ${propStyles}`}>
        {text}
      </a>
    )
  }

  return (
    <button className={`${styles.button} ${propStyles}`} {...tProps}>
      {text}
    </button>
  )
}

export default BaseButton
