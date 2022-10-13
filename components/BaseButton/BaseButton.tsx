import { ButtonProp } from './BaseButton.types'
import styles from './BaseButton.module.scss'
import clsx from 'clsx'

const hasRef = (props: ButtonProp) => {
  return 'href' in props
}

const BaseButton = ({ text, size, isFluid, ...rest }: ButtonProp) => {
  const propStyles = clsx({
    [styles.fullWidth]: isFluid,
    [styles.buttonMedium]: size === 'm',
    [styles.buttonSmall]: size === 's'
  })

  const tProps = rest as ButtonProp

  console.log('hasRef(tProps', hasRef(tProps))

  if (hasRef(tProps)) {
    return (
      // @ts-ignore
      <a {...tProps} className={`${styles.button} ${propStyles}`}>
        {text}
      </a>
    )
  }

  return (
    // @ts-ignore
    <button className={`${styles.button} ${propStyles}`} {...tProps}>
      {text}
    </button>
  )
}

export default BaseButton
