import React from 'react'

type Props = {
  children: React.ReactNode
  isOpen: boolean
}

const SlidePanel = ({ children, isOpen }: Props) => {
  if (!isOpen) return null

  return <div>{children}</div>
}

export default SlidePanel
