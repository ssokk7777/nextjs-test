import React, { ReactNode } from 'react'
import './typography.scss'

type VariantOptions =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'

type AlignOptions = 'left' | 'center' | 'right' | 'justify'
type ColorOptions =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'textPrimary'
  | 'textSecondary'
  | 'textDisabled'

interface TypographyProps {
  id?: string
  variant?: VariantOptions
  align?: AlignOptions
  color?: ColorOptions
  children?: ReactNode
}

export const Typography = ({
  id,
  children,
  variant = 'body1',
  align = 'left',
  color,
  ...props
}: TypographyProps) => {
  const Tag = (variant.startsWith('h') ? variant : 'p') as keyof JSX.IntrinsicElements
  const classes = [
    'ktc-typography-root',
    `ktc-typography-${variant}`,
    `ktc-typography-${align}`,
    `ktc-typography-${color}`,
  ].join(' ')

  return (
    <Tag id={id} className={classes} {...props}>
      {children}
    </Tag>
  )
}
