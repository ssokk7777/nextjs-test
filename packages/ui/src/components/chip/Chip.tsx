import { CrossIcon } from '@storybook/icons'
import './chip.scss'
import { MouseEventHandler } from 'react'

export interface ChipProps {
  id?: string
  label?: string
  variant?: 'filled' | 'outlined'
  size?: 'small' | 'medium'
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  clickable?: boolean
  onClick?: (event?: MouseEvent) => void
  deletable?: boolean
  onDelete?: (event?: MouseEvent) => void
}

export const Chip = ({
  id,
  label,
  variant = 'outlined',
  size = 'small',
  color = 'default',
  clickable = false,
  onClick,
  deletable = false,
  onDelete,
  ...props
}: ChipProps) => {
  const handleClick = (e: any) => {
    if (onClick) {
      onClick(e)
    }
  }
  const handleDelete = (e: MouseEventHandler<HTMLDivElement> | any) => {
    e.stopPropagation()
    if (onDelete) {
      onDelete(e)
    }
  }
  return (
    <div
      className={`ktc-chip${clickable ? '-click' : ''} ktc-chip-${variant}-${color} ktc-chip-${size}`}
      onClick={clickable ? handleClick : () => ''}
    >
      <div className={'ktc-chip-label'}>{label}</div>
      {deletable && (
        <div className={'ktc-chip-delete-icon'} onClick={handleDelete}>
          <CrossIcon size={10} />
        </div>
      )}
    </div>
  )
}
