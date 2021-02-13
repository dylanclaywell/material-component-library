import React from 'react'

export type Props = {
  children: React.ReactNode
  name: string
}

const SlidePanel: React.FC<Props> = ({ children }: Props) => {
  return <div>{children}</div>
}

export default SlidePanel
