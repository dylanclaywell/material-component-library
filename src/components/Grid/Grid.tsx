import React, { useState, useEffect, useRef } from 'react'
import { createUseStyles } from 'react-jss'

import GridItem, { Props as GridItemProps } from '../GridItem'

type Props = {
  children: React.ReactNode
  spacing: 8 | 12 | 16 | 20 | 24 | 28 | 32
}

const fontSizeInPixels = '16'
const useStyles = createUseStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: `${fontSizeInPixels}px`,
  },
  '@media (min-width: 1440)': {},
  child: (props) => ({
    margin: `${props.spacing / 2}px`,
  }),
})

const getWindowDimensions = () => {
  const { innerHeight, innerWidth } = window
  return { width: innerWidth, height: innerHeight }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions)

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowDimensions])

  return windowDimensions
}

const useWidth = (ref: React.RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth || 0)
    }

    const handleResize = () => {
      setWidth(ref?.current?.offsetWidth || 0)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref])

  return width
}

const getNumberOfColumns = (width: number) => {
  if (width > 839) {
    return 12
  } else if (width > 599) {
    return 8
  }

  return 4
}

const Grid: React.FC<Props> = ({ children, spacing = 8 }: Props) => {
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child?.type !== GridItem) {
      throw new Error('Grid children must be of type GridItem')
    }
  })

  const classes = useStyles({ spacing })
  const ref = useRef<HTMLDivElement>(null)
  const width = useWidth(ref)
  const { width: screenWidth } = useWindowDimensions()

  const numberOfChildren = React.Children.count(children)
  console.log(numberOfChildren)
  const numberOfColumns = getNumberOfColumns(screenWidth)

  const wrappedChildren = React.Children.map(
    children as React.ReactElement<GridItemProps>[],
    (child) => {
      const something =
        numberOfChildren > numberOfColumns ? numberOfColumns : numberOfChildren
      const childWidth = (width - spacing * something) / something

      return (
        <div
          style={{
            width: `${childWidth}px`,
          }}
          className={classes.child}
        >
          {child}
        </div>
      )
    }
  )

  return (
    <div ref={ref} className={classes.root}>
      {wrappedChildren}
    </div>
  )
}

export default Grid
