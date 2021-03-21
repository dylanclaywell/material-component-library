import React from 'react'
import { createUseStyles } from 'react-jss'

type Props = {
  children: React.ReactNode
}

const useStyles = createUseStyles({
  root: {
    margin: '0.5em 1em',
  },
})

const CardContent: React.FC<Props> = ({ children }: Props) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

export default CardContent
