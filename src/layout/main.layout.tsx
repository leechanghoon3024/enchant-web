import React, { FC, ReactElement, ReactNode, useCallback, useState } from 'react';
import { useLayout } from '@framework/utils/use.layout';
import { useSession } from 'next-auth/react';
import { MainHeader } from '@layout/header/main.header';
import { Drawer } from '@components/modals/drawer.modal';
import { CartModal } from '@components/modals/cart.modal';
import { MobileCategoryModal } from '@components/modals/mobile.category.modal';
import { MainFooter } from '@layout/footer/main.footer';
import dynamic from 'next/dynamic';
// const Anyd = dynamic<{}>(() => import('@layout/header/main.header').then((module) => module.MainHeader), { ssr: false });
interface IMainLayoutProps {
    children: ReactElement;
}
const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
    const { data: session, status } = useSession();

    return (
        <div className="page-wrapper">
            <MainHeader />
            <MobileCategoryModal />
            {children}
            <MainFooter />
        </div>
    );
};

export const getMainLayout = (children: ReactElement) => <MainLayout>{children}</MainLayout>;
export default MainLayout;
