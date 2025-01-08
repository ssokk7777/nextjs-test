import React, { ReactNode } from 'react'
import './paper.scss'

type VariantOptions = 'outlined' | 'elevation'
type ElevationOptions = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

interface PaperProps {
  id?: string
  variant?: VariantOptions
  elevation?: ElevationOptions
  children?: ReactNode
  style?: React.CSSProperties
}

export const Paper = ({
  id,
  children,
  variant = 'elevation',
  elevation = 1,
  style,
  ...props
}: PaperProps) => {
  const classes = [
    'ktc-paper-root',
    variant === 'outlined'
      ? `ktc-paper-outlined ktc-paper-outlined-elevation-${elevation}`
      : `ktc-paper-elevation-${elevation}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div id={id} className={classes} style={style} {...props}>
      {children}
    </div>
  )
}
