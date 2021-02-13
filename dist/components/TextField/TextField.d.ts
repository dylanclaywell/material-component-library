import React from 'react';
import { Props as MenuItemProps } from '../MenuItem';
declare type Props = {
    value: string;
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    styles?: {
        root?: string;
        input?: string;
    };
    type?: 'password' | 'email' | 'default';
    variant?: 'default' | 'select';
    children?: React.ReactElement<typeof MenuItemProps> | React.ReactElement<typeof MenuItemProps>[];
};
declare const TextField: React.FC<Props>;
export default TextField;
