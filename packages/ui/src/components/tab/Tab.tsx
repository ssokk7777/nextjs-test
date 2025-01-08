import { ReactElement, useCallback, useContext } from 'react'
import './tab.scss'
import TabContext from '@kt-cloud-front/ui/components/tab/TabContext'

export interface TabProps {
  label?: string | ReactElement
  value: string | number
  disabled?: boolean
}

export const Tab = ({ label, value, disabled = false }: TabProps) => {
  const { selectedTab, setSelectedTab } = useContext(TabContext)

  const handleClick = useCallback(
    (value: string | number) => () => {
      setSelectedTab(value)
    },
    [selectedTab],
  )

  return (
    <div
      className={`ktc-tab ${value === selectedTab ? `ktc-tab-selected` : ''} ${disabled ? 'ktc-tab-disabled' : ''}`}
      onClick={handleClick(value)}
    >
      {label}
    </div>
  )
}
