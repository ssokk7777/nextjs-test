import React, { ReactNode } from 'react'
import './button.scss'

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  disabled?: boolean
  href?: string
  label?: string
  loading?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'filled' | 'outlined' | 'standard'
  startIcon?: ReactNode
  endIcon?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (
  {
    color = 'primary',
    disabled = false,
    href,
    label,
    loading = false,
    size = 'medium',
    variant = 'filled',
    onClick,
    startIcon,
    endIcon,
    ...props
  }: ButtonProps) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e); // 클릭 이벤트 객체를 전달하여 호출
    }
  }

  const buttonContent = (
    <>
      {startIcon && (
        <span className={['storybook-icon-button-start'].join(' ')}>
          {startIcon}
        </span>
      )}
      <span>{label}</span>
      {endIcon && (
        <span className={['storybook-icon-button-end'].join(' ')}>
          {endIcon}
        </span>
      )}
    </>
  )

  return loading ? (
      <button
        type='button'
        className={[
          `storybook-button-${size}`,
          `storybook-button-spin-${variant}`
        ].join(' ')}
        disabled={true}
      >
        <span className={[`loader-${variant}`].join(' ')}></span>
      </button>
    ) : href && !disabled ? (
      <a href={href}>
        <button
          type='button'
          className={[
            `storybook-button-${size}`,
            `button-${variant}-${color}`,
          ].join(' ')}
        >
            {buttonContent}
        </button>
      </a>
    ) : (
    <button
      type='button'
      className={[
        `storybook-button-${size}`,
        `button-${variant}-${color}`,
      ].join(' ')}
      disabled={!!disabled}
      onClick={handleClick}
      {...props}
    >
      {buttonContent}
    </button>
  )
}