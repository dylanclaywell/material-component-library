import React from 'react'

type Props = {
  children: React.ReactNode
  name: string
}

const SlidePanel = ({ children }: Props) => {
  return <div>{children}</div>
}

export default SlidePanel
