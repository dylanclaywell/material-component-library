import React from 'react';
declare type Props = {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'text' | 'contained';
    color?: 'primary' | 'secondary';
    styles?: {
        root?: string;
    };
};
declare const Button: React.FC<Props>;
export default Button;
