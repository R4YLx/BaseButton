import { IButtonProps } from './interface'
import styles from './Button.module.scss'

const BaseButton = ({ text, href, target, size, isFluid }: IButtonProps) => {
  const fullWidth = isFluid ? `${styles.fullWidth}` : ''
  const btnSize =
    size === 'm'
      ? `${styles.buttonMedium}`
      : size === 's'
      ? `${styles.buttonSmall}`
      : ''

  return href ? (
    <a
      href={href}
      className={`${styles.button} ${fullWidth} ${btnSize}`}
      target={target}
    >
      {text}
    </a>
  ) : (
    <button className={styles.button}>{text}</button>
  )
}

export default BaseButton
