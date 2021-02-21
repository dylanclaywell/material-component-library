import React from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../../colors'

type Props = {
  isOpen: boolean
  children: React.ReactElement
  styles?: {
    root?: string
    isOpen?: string
  }
}

const useStyles = createUseStyles({
  root: {
    position: 'fixed',
    top: '100%',
    left: 0,
    width: '100%',
    height: '100%',
    background: colors.white,
    transition: '300ms',
    opacity: 0,
    visibility: 'hidden',
  },
  isOpen: {
    top: 0,
    visibility: 'visible',
    opacity: 1,
  },
})

const FullScreenDialog: React.FC<Props> = ({
  styles,
  isOpen,
  children,
}: Props) => {
  const classes = useStyles()

  return (
    <div
      className={classnames(
        classes.root,
        { [classes.isOpen]: isOpen },
        styles?.isOpen && { [styles.isOpen]: isOpen },
        styles?.root
      )}
      role="presentation"
      {...(!isOpen ? { 'aria-hidden': 'true' } : {})}
    >
      {children}
    </div>
  )
}

export default FullScreenDialog
