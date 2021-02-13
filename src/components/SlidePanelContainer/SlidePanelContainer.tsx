import React from 'react'
import { createUseStyles } from 'react-jss'

import SlidePanelInternal from './SlidePanelInternal'
import { Props as SlidePanelProps } from '../SlidePanel'

type Props = {
  currentPanelName: string
  children:
    | React.ReactElement<SlidePanelProps>
    | Array<React.ReactElement<SlidePanelProps>>
}

const useStyles = createUseStyles({
  root: {},
})

const SlidePanelContainer: React.FC<Props> = ({
  currentPanelName,
  children,
}: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {children &&
        React.Children.map(children, (child: React.ReactElement) => {
          return (
            <SlidePanelInternal isOpen={currentPanelName === child.props.name}>
              {child.props.children}
            </SlidePanelInternal>
          )
        })}
    </div>
  )
}

export default SlidePanelContainer
