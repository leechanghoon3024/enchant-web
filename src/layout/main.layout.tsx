import React, { FC, ReactElement, ReactNode, useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { MainHeader } from '@layout/header/main.header';
import { MainFooter } from '@layout/footer/main.footer';

interface IMainLayoutProps {
    children: ReactElement;
}
const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
    const { data: session, status } = useSession();

    return (
        <div className="page-wrapper">
            <MainHeader />
            {children}
            <MainFooter />
        </div>
    );
};

export const getMainLayout = (children: ReactElement) => <MainLayout>{children}</MainLayout>;
export default MainLayout;
