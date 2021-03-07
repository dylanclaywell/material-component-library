import React from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../../colors'

const useStyles = createUseStyles(
  {
    root: {
      fontSize: '0.9em',
      padding: '0.5em',
      border: 'none',
      textTransform: 'uppercase',
      fontWeight: 600,
      cursor: 'pointer',
      letterSpacing: '2px',
      transition: '300ms',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
    },
    contained: {
      color: colors.white,
      background: colors.primary.dark,
      '&:hover': {
        background: colors.primary.base,
      },
    },
    text: {
      background: 'none',
      color: colors.primary.dark,
      '&:hover': {
        background: colors.primary.light,
      },
    },
    secondary: {
      '&$text': {
        color: colors.secondary.dark,
        '&:hover': {
          background: colors.secondary.light,
        },
      },
      '&$contained': {
        color: colors.white,
        background: colors.secondary.dark,
        '&:hover': {
          background: colors.secondary.base,
        },
      },
    },
  },
  { name: 'Button' }
)

export type Props = {
  onClick: () => void
  children: React.ReactNode
  variant?: 'text' | 'contained'
  color?: 'primary' | 'secondary'
  styles?: {
    root?: string
  }
}

const Button: React.FC<Props> = ({
  onClick,
  variant = 'text',
  color = 'primary',
  children,
  styles,
}: Props) => {
  const classes = useStyles()
  const rootClasses = classnames(
    classes.root,
    {
      [classes.text]: variant === 'text',
      [classes.contained]: variant === 'contained',
      [classes.secondary]: color === 'secondary',
    },
    styles?.root
  )

  return (
    <button className={rootClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
