import React from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    children: React.ReactNode
    href?: string
    target?: string
    size: "m" | "m"
    isFluid?: boolean
    className: string
    as: "a" | "button"
}