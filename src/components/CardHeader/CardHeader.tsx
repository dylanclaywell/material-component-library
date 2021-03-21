import React from 'react'
import { createUseStyles } from 'react-jss'

import colors from '../../colors'

type Props = {
  title?: string
  subtitle?: string
}

const useStyles = createUseStyles({
  root: {
    margin: '1em 1em 0.5em',
    display: 'inline-block',
  },
  title: {
    fontSize: '1.3em',
    margin: '0 0 0.2em',
  },
  subtitle: {
    margin: 0,
    fontSize: '0.9em',
    color: colors.gray5,
  },
})

const CardHeader: React.FC<Props> = ({ title, subtitle }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <p className={classes.title}>{title}</p>
      <p className={classes.subtitle}>{subtitle}</p>
    </div>
  )
}

export default CardHeader
