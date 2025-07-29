import React from "react"

const textVariants = {
    default: 'text-xl',
    muted: 'text-xl text-(--text-secondary)',
    heading:'text-2xl',
    blast: 'text-3xl'

}
type TextProps = {
  variant?: keyof typeof textVariants
  className?: string
  children: React.ReactNode
  [x: string]: any
}

export function Text({ as = 'span', variant = 'default', className, children, ...props}: TextProps){
    return (
        React.createElement(as, { className: `${textVariants[variant]} ${className ? className: ''}`, ...props}, children)
    )
}