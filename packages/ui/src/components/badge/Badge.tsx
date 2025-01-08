import React, { CSSProperties, ReactNode, useMemo } from 'react'
import './badge.scss'

export interface BadgeProps {
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning'
  variant?: 'dot' | 'standard'
  max?: number
  showZero?: boolean
  content: number
  children?: ReactNode
  id?: string
  className?: string
  style?: CSSProperties
}

export const Badge = ({
  color = 'primary',
  variant = 'standard',
  max = 99,
  showZero = false,
  ...props
}: BadgeProps) => {
  const badgeContent = useMemo(() => {
    if (props.content > max) {
      return `${max}+`
    } else {
      return props.content
    }
  }, [max, props.content])

  return (
    <div className={'ktc-badge-root'}>
      {props.children && props.children}
      {(props.content > 0 || (props.content === 0 && showZero)) && (
        <div className={`ktc-badge-color-${color} ktc-badge-variant-${variant}`}>
          {variant !== 'dot' && <div>{badgeContent}</div>}
        </div>
      )}
    </div>
  )
}
