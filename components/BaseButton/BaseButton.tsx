import { forwardRef, Ref, ReactElement, ElementType } from 'react'
import clsx from 'clsx'
import { ButtonProps, IBaseButtonProps } from './interface'
// import { Props } from './types'
import styles from './Button.module.scss'

const defaultElement = 'button' || 'a'

// const BaseButton = ({ text, href, target, size, isFluid }: Props) => {
//   const propStyles = clsx({
//     [styles.fullWidth]: isFluid,
//     [styles.buttonMedium]: size === 'm',
//     [styles.buttonSmall]: size === 's'
//   })

//   return href ? (
//     <a href={href} className={`${propStyles} ${styles.button}`} target={target}>
//       {text}
//     </a>
//   ) : (
//     <button className={`${propStyles} ${styles.button}`}>{text}</button>
//   )
// }

export const BaseButton: <T extends ElementType = typeof defaultElement>(
  props: ButtonProps<T>
) => ReactElement = forwardRef(function Button(
  { text, size, isFluid, as, ...props }: IBaseButtonProps,
  ref: Ref<Element>
) {
  const Element = as

  const propStyles = clsx({
    [styles.fullWidth]: isFluid,
    [styles.buttonMedium]: size === 'm',
    [styles.buttonSmall]: size === 's'
  })

  return (
    <Element
      ref={ref}
      {...props}
      as={defaultElement}
      className={`${styles.button} ${propStyles}`}
    >
      {text}
    </Element>
  )
})

// export const BaseButton = forwardRef<
//   HTMLAnchorElement | HTMLButtonElement,
//   IBaseButtonProps
// >(function Button({ text, size, isFluid, as, ...rest }, ref: Ref<Element>) {
//   const Element = as

//   const propStyles = clsx({
//     [styles.fullWidth]: isFluid,
//     [styles.buttonMedium]: size === 'm',
//     [styles.buttonSmall]: size === 's'
//   })

//   return (
//     <Element ref={ref} as={as} className={`${styles.button} ${propStyles}`}>
//       {text}
//     </Element>
//   )
// })
