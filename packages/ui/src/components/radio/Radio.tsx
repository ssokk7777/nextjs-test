import React from 'react'
import './radio.scss'
import '@kt-cloud-front/ui/styles/ktcTheme.scss'

export interface RadioProps {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  defaultChecked?: boolean
  disabled?: boolean
  id?: string
  name?: any
  label?: string
  size?: 'small' | 'medium' | 'large'
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = (
  {
    color = 'primary',
    defaultChecked,
    disabled = false,
    id,
    label,
    name,
    size = 'medium',
    value,
    onChange,
    ...props
  }: RadioProps) => {

  // 내부 상태로 checked 값을 관리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 외부로 변경 이벤트 전달
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <label
      className={[
        `storybook-font-${size}-${disabled ? 'disabled' : 'enabled'}`
      ].join(' ')}
    >
      <input
        type='radio'
        className={[`storybook-radio-color-${color}`, `storybook-radio-size-${size}`].join(' ')}
        name={name || ''}
        defaultChecked={!!defaultChecked}
        disabled={!!disabled}
        id={id || ''}
        value={value || ''}
        onChange={handleChange}
      />
      <span>{label}</span>
    </label>
  )
}
       
