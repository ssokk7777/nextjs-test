import React, { ReactNode } from 'react'
import './divider.scss'

interface DividerProps {
  variant?: 'fullWidth' | 'middle'
  orientation?: 'horizontal' | 'vertical'
  textAlign?: 'left' | 'center' | 'right'
  children?: ReactNode
}

export const Divider = ({
  variant = 'fullWidth',
  orientation = 'horizontal',
  textAlign = 'center',
  ...props
}: DividerProps) => {
  return (
    <div className={`ktc-divider-root ktc-divider-${orientation} ktc-divider-${variant}`}>
      {textAlign !== 'left' && <span className="ktc-divider-line"></span>}
      {props.children && <span className={`ktc-divider-content ktc-divider-content-${textAlign}`}>{props.children}</span>}
      {textAlign !== 'right' && <span className="ktc-divider-line"></span>}
    </div>
  )
}
