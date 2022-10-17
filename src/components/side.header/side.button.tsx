import React from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useDrawer } from '@store/drawer/use.drawer';
export const SideButton = () => {
    const mobileDrawer = useDrawer('mobileMenu', true);
    return <Hamburger duration={0.5} size={24} onToggle={(toggled) => (toggled ? mobileDrawer.onOpen() : mobileDrawer.onClose())} />;
};
