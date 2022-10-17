import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainLogo } from '@components/logo/main.logo';
import { CategoryHeader } from '@components/category/category.header';
import { SideHeader } from '@components/side.header/side.header';

export const MainHeader = () => {
    return (
        <div
            data-animation="default"
            className="navbar-component w-nav"
            data-easing2="ease"
            data-easing="ease"
            data-collapse="medium"
            data-w-id="bcd16cde-3794-2f46-9625-d95b8adc8325"
            role="banner"
            data-no-scroll="1"
            data-duration="300"
            data-doc-height="1"
        >
            <div className="navbar-wrapper">
                <div className="container-large">
                    <div className="navbar-container">
                        <div className="navbar-logo-link-wrapper">
                            <MainLogo width={170} height={35.17} />
                        </div>
                        <CategoryHeader />
                    </div>
                </div>
            </div>
        </div>
    );
};
