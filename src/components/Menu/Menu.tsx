import React, { useRef, useEffect } from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'

import colors from '../../colors'
import theme from '../../theme'

const useStyles = createUseStyles({
  root: {
    width: '16em',
    background: colors.white,
    position: 'absolute',
    boxShadow: theme.elevation1,
    borderRadius: '4px',
    transition: '100ms',
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
  },
})

type Props = {
  isOpen: boolean
  children: React.ReactElement
  onClose: () => void
}

const Menu: React.FC<Props> = ({ isOpen, children, onClose }: Props) => {
  const ref = useRef<HTMLDivElement>()
  const classes = useStyles()

  const handleClickOutside = (event) => {
    if (isOpen && ref && !ref.current.contains(event.target)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <div
      ref={ref}
      className={classnames(classes.root, { [classes.hidden]: !isOpen })}
    >
      {children}
    </div>
  )
}

export default Menu
