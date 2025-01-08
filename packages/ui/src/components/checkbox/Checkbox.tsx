import React, { useState, ReactNode } from 'react'
import './checkbox.scss'

export interface CheckboxProps {
  checked?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  defaultChecked?: boolean
  disabled?: boolean
  id?: string
  indeterminate?: boolean
  label?: string
  size?: 'small' | 'medium' | 'large'
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: ReactNode
  checkedIcon?: ReactNode
}
export const Checkbox = (
  {
    color = 'primary',
    checked,
    defaultChecked = false,
    disabled = false,
    id,
    indeterminate= false,
    label,
    size = 'medium',
    value,
    onChange,
    ...props
  }: CheckboxProps) => {

  // 내부 상태로 checked 값을 관리
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked ?? false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked
    setInternalChecked(newChecked) // 내부 상태 업데이트
    if (onChange) {
      onChange(e)
    }
  }

  console.log(onChange)

  return (
    <label
      className={[
        `storybook-font-${size}-${disabled ? 'disabled' : 'enabled'}`
      ].join(' ')}
    >
      <input
        type="checkbox"
        className={[
          `storybook-check-color-${color}`,
          indeterminate ?
            `storybook-check-size-determinate-${size}` : `storybook-check-size-${size}`
        ].join(' ')}
        checked={indeterminate || (checked ?? internalChecked)}
        // checked={indeterminate ?
        //   true
        //   : onChange !== undefined ?
        //     checked != undefined ? checked : internalChecked
        //     : checked != undefined ?  checked : internalChecked}
        disabled={!!disabled}
        id={id || ''}
        value={value || ''}
        onChange={handleChange}
      />
      <span>{label}</span>
    </label>
  )
}
