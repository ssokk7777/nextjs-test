import { MouseEventHandler, ReactNode, useCallback, useRef, useState } from 'react'
import './select.scss'
import { ChevronSmallDownIcon } from '@storybook/icons'
import Chip from '../chip'

export interface IMenuList {
  [key: string]: any
}

export interface SelectProps {
  value: any
  onChange: (e: any | any[]) => void
  menuList: IMenuList[]
  menuKey?: string
  menuLabel?: string
  variant?: 'outlined' | 'standard'
  size?: 'small' | 'medium'
  error?: boolean
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  multiple?: boolean
  placeholder?: string
  helperText?: string
  id?: string
  label?: ReactNode
  labelAlign?: 'vertical' | 'horizontal'
}

export const Select = ({
  value,
  menuList,
  menuKey,
  menuLabel,
  variant = 'outlined',
  size = 'small',
  labelAlign = 'vertical',
  error = false,
  required = false,
  disabled = false,
  readOnly = false,
  multiple = false,
  placeholder,
  helperText,
  onChange,
  id,
  label,
  ...props
}: SelectProps) => {
  const controlRef = useRef<HTMLDivElement>(null)
  const [isOpened, setIsOpened] = useState(false)
  const [selectedValue, setSelectedValue] = useState<any | any[]>(value)

  const handleFocus = useCallback(() => {
    controlRef.current?.focus()
  }, [])

  const handleClick = useCallback(() => {
    setIsOpened(!isOpened)
    handleFocus()
  }, [isOpened])

  const handleBlur = useCallback(() => {
    setIsOpened(false)
  }, [])

  // Single Select Handling
  const handleSelectItem = useCallback(
    (item: any) => () => {
      setSelectedValue(item)
      onChange(item)
      setIsOpened(false)
    },
    [selectedValue],
  )

  // Multi Select Handling
  const handleMultiSelectItem = useCallback(
    (item: any) => () => {
      const array = [selectedValue].flat(Infinity)
      if (typeof item === 'object') {
        if (
          array
            .map((k) => {
              return k.value
            })
            .includes(item.value)
        ) {
          setSelectedValue(selectedValue.filter((v: any) => v.value !== item.value))
          onChange([selectedValue.filter((v: any) => v.value !== item.value)])
        } else {
          setSelectedValue([...selectedValue, item])
          onChange([...selectedValue, item])
        }
      } else {
        if (selectedValue.includes(item)) {
          setSelectedValue(selectedValue.filter((v: any) => v !== item))
          onChange([selectedValue.filter((v: any) => v !== item)])
        } else {
          setSelectedValue([...selectedValue, item])
          onChange([...selectedValue, item])
        }
      }
    },
    [selectedValue],
  )

  const handleMouseDownItem = (e: MouseEventHandler<HTMLDivElement> | any) => {
    e.preventDefault() // blur 방지
  }

  // 선택된 item의 Label 값 반환
  const transferMenuItem = (item: any, key: any) => {
    return typeof item === 'object' ? item[key] : item
  }

  const isSelectedMenuItem = (item: any) => {
    const array = [selectedValue].flat(Infinity)
    if (multiple) {
      if (
        typeof item === 'object' &&
        array.map((s: any) => s.value).includes(item[menuKey as string])
      ) {
        return true
      } else {
        if (array.includes(item)) return true
      }
    } else {
      if (transferMenuItem(item, menuKey) === transferMenuItem(selectedValue, menuKey)) {
        return true
      }
    }
  }

  return (
    <div className={`ktc-select-wrapper-${labelAlign} ${error ? 'ktc-select-error' : ''}`}>
      <div className="ktc-select-label">
        {label}
        {required && <span className={'ktc-select-label-required'}>*</span>}
      </div>
      <div
        className={`ktc-select-control ${disabled ? 'ktc-select-disabled' : ''} ${readOnly ? 'ktc-select-readonly' : ''}`}
      >
        <div
          ref={controlRef}
          onBlur={handleBlur}
          tabIndex={disabled ? -1 : 0}
          className={`ktc-select-controlBox ktc-select-controlBox-${variant} ktc-select-controlBox-${size}`}
          onClick={handleClick}
        >
          {selectedValue.length === 0 && (
            <div className="ktc-select-placeholder">{placeholder}</div>
          )}
          {selectedValue.length !== 0 && !multiple && (
            <div>{transferMenuItem(selectedValue, menuLabel)}</div>
          )}
          {selectedValue.length !== 0 && multiple && (
            <div className={'ktc-select-controlBox-multiple-chip'}>
              {selectedValue.map((value: any) => (
                <Chip
                  key={transferMenuItem(value, menuKey)}
                  label={transferMenuItem(value, menuLabel)}
                  deletable
                  onDelete={handleMultiSelectItem(value)}
                  variant={'filled'}
                />
              ))}
            </div>
          )}
          <ChevronSmallDownIcon
            className={`ktc-select-controlBox-chevronIcon ${isOpened ? 'ktc-select-controlBox-chevronIcon-open' : ''}`}
          />
        </div>
        <div className={`ktc-select-menuList ${isOpened ? 'ktc-select-menuList-open' : ''}`}>
          {menuList.length === 0 ? (
            <div className={`ktc-select-menuItem-${size}`}>데이터가 존재하지 않습니다.</div>
          ) : (
            menuList.map((item: any) => (
              <div
                key={transferMenuItem(item, menuKey)}
                // className={`ktc-select-menuItem-${size} ${transferMenuItem(item, menuKey) === transferMenuItem(selectedValue, menuKey) ? 'ktc-select-menuItem-selected' : ''}`}
                className={`ktc-select-menuItem-${size} ${isSelectedMenuItem(item) ? 'ktc-select-menuItem-selected ' : ''}`}
                onClick={!multiple ? handleSelectItem(item) : handleMultiSelectItem(item)}
                onMouseDown={handleMouseDownItem}
              >
                {transferMenuItem(item, menuLabel)}
              </div>
            ))
          )}
        </div>
      </div>
      {helperText && <div className={'ktc-select-helperText'}>{helperText}</div>}
    </div>
  )
}
