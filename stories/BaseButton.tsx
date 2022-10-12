import React from 'react'
import clsx from 'clsx'
import styles from './basebutton.module.css'

interface BaseButtonProps {
  text: string
  size?: 's' | 'm'
  isFluid?: boolean
}

interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseButtonProps {
  href: string
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {
  href?: undefined
}

export const BaseButton = ({
  text = 'BaseButton',
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
