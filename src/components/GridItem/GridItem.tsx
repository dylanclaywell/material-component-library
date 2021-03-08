import React from 'react'

export type Props = {
  children: React.ReactNode
}

const GridItem: React.FC<Props> = ({ children }: Props) => {
  return <div>{children}</div>
}

export default GridItem
