import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'
export type ButtonProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  fullWith?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWith,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWith ? s.fullWith : ''}${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
