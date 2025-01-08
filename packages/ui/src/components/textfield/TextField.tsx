import React, { useState, useEffect, useRef } from 'react'
import { Icons } from '@storybook/components'
import './textfield.scss'

type ColorOptions = 'primary' | 'secondary' | 'error' | 'success' | 'warning'
type SizeOptions = 'small' | 'medium' | 'large'
type VariantOptions = 'filled' | 'outlined' | 'standard'
type TypeOptions = 'text' | 'date' | 'datetime-local' | 'file' | 'password'

interface TextFieldProps {
  id?: string | any
  label?: string
  value?: string
  variant?: VariantOptions
  placeholder?: string | any
  color?: ColorOptions
  required?: boolean | any
  size?: SizeOptions
  type?: TypeOptions
  style?: React.CSSProperties
  error?: boolean
  disabled?: boolean | any
  multiline?: boolean
  rows?: number | undefined
  helperText?: string
  readOnly?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const TextField = ({
  id,
  label,
  value = '',
  variant = 'outlined',
  placeholder,
  color = 'primary',
  required = false,
  size = 'medium',
  type = 'text',
  style,
  error = false,
  disabled,
  multiline = false,
  rows,
  helperText,
  readOnly,
  onChange,
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [internalValue, setInternalValue] = useState(value || '')
  const [showPassword, setShowPassword] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const showPlaceholder = !internalValue && placeholder

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInternalValue(e.target.value)
    if (onChange) {
      onChange(e)
    }
  }

  const getClassNames = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(' ')

  const commonProps = {
    id,
    value: internalValue,
    className: getClassNames(`ktc-textfield-input`, `ktc-textfield-input--${color}`),
    placeholder: showPlaceholder ? placeholder : '',
    required,
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled,
    onChange: handleChange,
    style,
    readOnly,
    ...props,
  }

  useEffect(() => {
    if (!textareaRef.current) return

    if (multiline && !rows) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    } else if (rows && multiline) {
      textareaRef.current.style.height = `${rows * 1}em`
      textareaRef.current.style.overflow = ''
    }
    textareaRef.current.style.overflow = 'hidden'
  }, [internalValue, multiline, rows])
  ;<textarea ref={textareaRef} rows={rows || 1} {...commonProps} />

  useEffect(() => {
    setInternalValue(value || '')
  }, [value])

  return (
    <div className="ktc-textfield-root">
      <div
        className={getClassNames(
          `ktc-textfield-${size}`,
          `ktc-textfield-${variant}`,
          error && 'ktc-textfield-error',
        )}
      >
        <div
          className={getClassNames(
            'ktc-textfield-wrapper',
            (isFocused || internalValue || showPlaceholder) && 'ktc-textfield-wrapper--focused',
          )}
        >
          {label && (
            <label
              id={id}
              className={getClassNames(
                `ktc-textfield-label`,
                (isFocused || internalValue || showPlaceholder) &&
                  `ktc-textfield-label-active ktc-textfield-label--${error ? 'error' : color}`,
              )}
            >
              {label}
            </label>
          )}
          <div className="ktc-textfield-input-container">
            {multiline ? (
              <textarea ref={textareaRef} rows={rows ?? 1} {...commonProps} />
            ) : (
              <>
                <input
                  type={type === 'password' && showPassword ? 'text' : type}
                  {...commonProps}
                />
                {type === 'password' && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ktc-textfield-show-password"
                  >
                    {showPassword ? <Icons icon="eyeclose" /> : <Icons icon="eye" />}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        {error ? (
          <span className="ktc-textfield-error">{helperText}</span>
        ) : (
          <span className="ktc-textfield-helperText">{helperText}</span>
        )}
      </div>
    </div>
  )
}
