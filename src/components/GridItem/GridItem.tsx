import React from 'react'

export type Props = {
  children: React.ReactNode
  large?: number
  medium?: number
  small?: number
}

const GridItem: React.FC<Props> = ({
  children,
  large,
  medium,
  small,
}: Props) => {
  return <div>{children}</div>
}

export default GridItem
