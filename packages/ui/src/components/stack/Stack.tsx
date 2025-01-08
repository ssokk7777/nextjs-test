import React, { CSSProperties  } from 'react'
import './stack.scss'

interface StackProps {
  children?: any
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  alignItems?: 'start' | 'center' | 'end' | 'stretch'
  justifyContent?: 'start' | 'center' | 'end' | 'space-between'  // | 'space-around' | 'space-evenly'
  spacing?: number
}

export const Stack = ({
  children,
  direction = 'row',
  alignItems = 'center',
  justifyContent = 'center',
  spacing = 10,
}: StackProps) => {
  return (
    <div
      className={`ktc-stack-root ktc-stack-${direction}`}
      style={{
        gap: `${spacing}px`,
        alignItems: alignItems as CSSProperties['alignItems'],
        justifyContent: justifyContent as CSSProperties['justifyContent'],
      }}
    >
      {children}
    </div>
  )
}


