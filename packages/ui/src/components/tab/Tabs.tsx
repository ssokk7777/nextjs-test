import { ReactNode, useEffect, useState } from 'react'
import TabContext from './TabContext'

export interface TabsProps {
  value: string | number
  children: ReactNode
  onChange?: (value: string | number) => void
  variant?: 'standard' | 'filled' | 'outlined'
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  fullWidth?: boolean
}

export const Tabs = ({
  value,
  onChange,
  children,
  variant = 'standard',
  color = 'primary',
  fullWidth = false,
}: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string | number>(value)

  useEffect(() => {
    if (onChange) {
      onChange(selectedTab)
    }
  }, [selectedTab])

  return (
    <div
      className={`ktc-tabs ktc-tabs-${variant}-${color} ${fullWidth ? 'ktc-tabs-fullWidth' : ''}`}
    >
      <TabContext.Provider value={{ selectedTab, setSelectedTab } as any}>
        {children}
      </TabContext.Provider>
    </div>
  )
}
