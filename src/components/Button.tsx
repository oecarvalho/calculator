import { Text } from "./Text"

type Variant = 'default' | 'primary'

const buttonVariants: Record<Variant, string> = {
  default: 'bg-[var(--background)]',
  primary: 'bg-[var(--primary)]',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

export function Button({
  variant = 'default',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <Text
      as="button"
      variant="default"
      className={`
        flex items-center justify-center 
        rounded-xl p-1 cursor-pointer 
        text-[var(--text)] 
        bg-var[(--gradient)]
        hover: bg-[var(--gradient-hover)] 
        shadow-[var(--shadow)]
        ${buttonVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Text>
  )
}
