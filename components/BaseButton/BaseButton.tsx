import { ButtonType } from './interface'
import styles from './Button.module.scss'
import clsx from 'clsx'

const BaseButton = ({ text, href, size, isFluid }: ButtonType) => {
  const propStyles = clsx({
    [styles.fullWidth]: isFluid,
    [styles.buttonMedium]: size === 'm',
    [styles.buttonSmall]: size === 's'
  })

  if (href) {
    return (
      <a href={href} className={`${styles.button} ${propStyles}`}>
        {text}
      </a>
    )
  }

  return <button className={`${styles.button} ${propStyles}`}>{text}</button>
}

export default BaseButton
