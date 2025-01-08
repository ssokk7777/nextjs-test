import React from 'react'

interface ContainerProps {
  size?: 'small' | 'large'
  label?: string
  backgroundColor?: string
  children?: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  size = 'small',
  label,
  backgroundColor,
  children,
}) => {
  const containerSize = size === 'large' ? 'container-large' : 'container-small'

  return (
    <div className={`container ${containerSize}`} style={{ backgroundColor }}>
      {label && <h3>{label}</h3>}
      {children}
    </div>
  )
}
