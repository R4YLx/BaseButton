import { Props } from './types'
import styles from './Button.module.scss'

const BaseButton = ({ text, href, target, size, isFluid }: Props) => {
  return href ? (
    <a href={href} className={styles.button} target={target}>
      {text}
    </a>
  ) : (
    <button className={styles.button}>{text}</button>
  )
}

export default BaseButton
