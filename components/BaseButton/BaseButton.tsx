import { AnchorProps, ButtonProps } from './interface'
import styles from './Button.module.scss'
import clsx from 'clsx'

const BaseButton = ({
  text,
  href,
  size,
  isFluid,
  ...rest
}: ButtonProps | AnchorProps) => {
  const propStyles = clsx({
    [styles.fullWidth]: isFluid,
    [styles.buttonMedium]: size === 'm',
    [styles.buttonSmall]: size === 's'
  })

  if (href) {
    return (
      <a
        href={href}
        className={`${styles.button} ${propStyles}`}
        {...(rest as AnchorProps)}
      >
        {text}
      </a>
    )
  }

  return (
    <button
      className={`${styles.button} ${propStyles}`}
      {...(rest as ButtonProps)}
    >
      {text}
    </button>
  )
}

export default BaseButton
