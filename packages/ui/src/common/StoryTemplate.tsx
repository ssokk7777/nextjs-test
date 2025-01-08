import React from 'react'

const StyledContainer: React.FC<{ items: React.ReactNode[] }> = ({ items }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '40px',
        margin: '40px auto',
        alignItems: 'center',
      }}
    >
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export default StyledContainer
