import React from 'react'
import './text.css'

export interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  text: string
  color?: string
  align?: 'left' | 'center' | 'right' | 'justify'
}

export const Text: React.FC<TextProps> = ({ variant = 'p', text }) => {
  const Tag = variant // 'h1', 'p', 'span' 등으로 설정

  return <Tag>{text}</Tag>
}
