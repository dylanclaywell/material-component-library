import React from 'react'
import { createUseStyles } from 'react-jss'

import SlidePanelInternal from './SlidePanelInternal'

type Props = {
  currentPanelName: string
  children: React.ReactNode
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
      {React.Children.map(children, (child: React.ReactElement) => {
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
