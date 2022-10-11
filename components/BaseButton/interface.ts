import React from 'react'

export interface IButtonProps extends React.ComponentProps<"button"> {
    text: string
    href?: string
    target?: string
    size?: "s" | "m"
    isFluid?: boolean
    // as?: "a" | "button"
}
