import React from 'react';
declare type Props = {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
    style: any;
    styles?: {
        root?: string;
    };
};
declare const TextArea: React.FC<Props>;
export default TextArea;
