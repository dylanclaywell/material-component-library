import React from 'react';
declare type Props = {
    isOpen: boolean;
    children: React.ReactElement;
    styles?: {
        root?: string;
        isOpen?: string;
    };
};
declare const FullScreenDialog: React.FC<Props>;
export default FullScreenDialog;
