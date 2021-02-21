import React from 'react'
import { createUseStyles } from 'react-jss'

import colors from '../../colors'

const useStyles = createUseStyles({
  root: {
    transition: '300ms',
    cursor: 'pointer',
    padding: '1em',
    '&:hover': {
      background: colors.gray1,
    },
  },
})

export type Props = {
  onClick?: (event: any, value: string) => void
  children: React.ReactNode
  value?: string
}

const MenuItem: React.FC<Props> = ({ children, value, onClick }: Props) => {
  const classes = useStyles()

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (onClick) {
      onClick(event, value ?? '')
    }
  }

  return (
    <div
      className={classes.root}
      onClick={handleClick}
      {...(onClick ? { role: 'button' } : {})}
    >
      {children}
    </div>
  )
}

export default MenuItem
