import React from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../../colors'

const useStyles = createUseStyles({
  root: {
    width: '100%',
    padding: '1em',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    fontSize: '1em',
    fontFamily: 'sans-serif',
    outline: 'none',
    borderColor: colors.borderGray,
    resize: 'none',
    '&:active, &:focus': {
      borderColor: colors.secondary.dark,
    },
  },
})

type Props = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  style: any
  styles?: {
    root?: string
  }
}

const TextArea: React.FC<Props> = ({
  style,
  styles,
  onChange,
  value,
}: Props) => {
  const classes = useStyles()

  return (
    <textarea
      style={style}
      spellCheck={false}
      onChange={onChange}
      value={value}
      className={classnames(classes.root, styles.root)}
    />
  )
}

export default TextArea
