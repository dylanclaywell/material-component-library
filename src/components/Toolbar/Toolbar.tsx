import React from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../../colors'

const useStyles = createUseStyles({
  root: {
    background: colors.primary.dark,
    height: '2em',
    display: 'flex',
    alignItems: 'center',
    padding: '1em',
  },
})

type Props = {
  children?: React.ReactNode
  styles?: {
    root?: string
  }
}

const Toolbar: React.FC<Props> = ({ children, styles }: Props) => {
  const classes = useStyles()

  return (
    <div className={classnames(classes.root, styles?.root)}>{children}</div>
  )
}

export default Toolbar
