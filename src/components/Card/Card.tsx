import React from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../../colors'

type Props = {
  children: React.ReactNode
  square?: boolean
  elevation?: 1 | 2 | 3 | 4
  elevated?: boolean
}

type Elevation = 'elevation1' | 'elevation2' | 'elevation3' | 'elevation4'

const useStyles = createUseStyles({
  root: {
    background: colors.white,
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
  },
  square: {
    borderRadius: 0,
  },
  elevation1: { boxShadow: '0px 1px 4px gray' },
  elevation2: { boxShadow: '0px 1px 5px gray' },
  elevation3: { boxShadow: '0px 1px 6px gray' },
  elevation4: { boxShadow: '0px 1px 7px gray' },
})

const Card: React.FC<Props> = ({
  children,
  square,
  elevation = 1,
  elevated = true,
}: Props) => {
  const classes = useStyles()
  const elevationClassName = `elevation${elevation}` as Elevation
  console.log(elevationClassName)
  const rootClasses = classnames(classes.root, {
    [classes.square]: Boolean(square),
    [classes[elevationClassName]]: Boolean(elevated),
  })

  return <div className={rootClasses}>{children}</div>
}

export default Card
