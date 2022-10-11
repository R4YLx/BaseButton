import { Props } from './types'
import styles from './Button.module.scss'
import clsx from 'clsx'

const BaseButton = ({ text, href, target, size, isFluid }: Props) => {
  const propStyles = clsx({
    [styles.fullWidth]: isFluid,
    [styles.buttonMedium]: size === 'm',
    [styles.buttonSmall]: size === 's'
  })

  return href ? (
    <a href={href} className={`${propStyles} ${styles.button}`} target={target}>
      {text}
    </a>
  ) : (
    <button className={`${propStyles} ${styles.button}`}>{text}</button>
  )
}

export default BaseButton
