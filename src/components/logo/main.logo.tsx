import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/css';
import styled from '@emotion/styled';

interface IMainLogoProps {
    width: number;
    height?: number;
}
const ImageContainer = styled.div<IMainLogoProps>`
    width: ${(props) => props.width}px;
`;

export const MainLogo = ({ width, height }: IMainLogoProps) => {
    const mainLogoWidth = width;
    const mainLogoHeight = height ?? 0;
    return (
        <Link href={'/'} className="navbar-logo-link w-nav-brand w--current">
            <ImageContainer width={mainLogoWidth}>
                <Image
                    layout={'responsive'}
                    width={mainLogoWidth}
                    height={mainLogoHeight}
                    src={'/images/nc_bi_bk.svg'}
                    loading="lazy"
                    alt=""
                    objectFit={'contain'}
                    className="navbar-logo"
                />
            </ImageContainer>
        </Link>
    );
};
