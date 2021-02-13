import React from 'react';
declare type Props = {
    isOpen: boolean;
    children: React.ReactElement;
    onClose: () => void;
};
declare const Menu: React.FC<Props>;
export default Menu;
