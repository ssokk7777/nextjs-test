import React, { ReactNode } from 'react'
import './icon-button.scss'

export interface IconButtonProps {
  icon: ReactNode
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  disabled?: boolean
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const IconButton = (
  {
    color = 'primary',
    disabled = false,
    href,
    onClick,
    ...props
  }: IconButtonProps) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e); // 클릭 이벤트 객체를 전달하여 호출
    }
  }

  const ButtonElement = (
    <button
      type='button'
      className={`storybook-icon-button-${color}`}
      disabled={!!disabled}
      onClick={handleClick}
    >
      {props.icon}
    </button>
  )

  return href && !disabled ?
    <a href={href}>
      {ButtonElement}
    </a>
   : ButtonElement
}