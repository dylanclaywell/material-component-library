import React from 'react';
export declare type Props = {
    onClick?: (event: any, value: string) => void;
    children: React.ReactNode;
    value?: string;
};
declare const MenuItem: React.FC<Props>;
export default MenuItem;
