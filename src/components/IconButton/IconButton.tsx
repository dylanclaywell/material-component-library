import React from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../../colors'

type Props = {
  name: string
  onClick: () => void
  styles?: {
    root?: string
  }
}

const useStyles = createUseStyles({
  root: {
    borderRadius: '50%',
    width: '4em',
    height: '4em',
    cursor: 'pointer',
    outline: 'none',
    border: '1px transparent',
    background: 'none',
    color: colors.gray6,
    transition: '300ms',
    '&:hover': {
      background: colors.gray1,
    },
  },
})

const IconButton: React.FC<Props> = ({ name, onClick, styles }: Props) => {
  const classes = useStyles()
  return (
    <button
      onClick={onClick}
      className={classnames(classes.root, styles?.root)}
    >
      <i className="material-icons">{name}</i>
    </button>
  )
}

export default IconButton
