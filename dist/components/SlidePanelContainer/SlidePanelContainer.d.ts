import React from 'react';
import { Props as SlidePanelProps } from '../SlidePanel';
declare type Props = {
    currentPanelName: string;
    children: React.ReactElement<SlidePanelProps> | Array<React.ReactElement<SlidePanelProps>>;
};
declare const SlidePanelContainer: React.FC<Props>;
export default SlidePanelContainer;
