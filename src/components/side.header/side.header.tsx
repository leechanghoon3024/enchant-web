import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { IconTiny } from '@styles/styled/icon.styled';
import { WInlineblock } from '@styles/styled/typo.styled';
import { Drawer } from '@components/modals/drawer.modal';
import { CartModal } from '@components/modals/cart.modal';
import { useDrawer } from '@store/drawer/use.drawer';
import { SideButton } from '@components/side.header/side.button';
import { useLayout } from '@framework/utils/use.layout';
import { useRouter } from 'next/router';
import { SignupUrl } from '@framework/lib/page.url';
const SideHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    margin-left: 1.5rem;
    justify-content: flex-end;
    align-items: center;
    grid-column-gap: 1.5rem;
    color: #fff;
    align-items: center;
`;

const SideGapWrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-column-gap: 8px;
    color: #fff;
    cursor: pointer;
    padding-top: 9px;
    padding-bottom: 9px;
`;
export const SideHeader = () => {
    const { onOpen, open, onClose } = useDrawer('cart');
    const searchDrawer = useDrawer('search', true);
    const router = useRouter();
    const { isDesktop, isMobile } = useLayout();
    return (
        <>
            <SideHeaderContainer>
                {!isMobile && (
                    <>
                        <SideGapWrapper onClick={() => searchDrawer.onOpen()}>
                            <IconTiny>search</IconTiny>
                            <WInlineblock>검색</WInlineblock>
                        </SideGapWrapper>
                        <SideGapWrapper onClick={() => onOpen()}>
                            <IconTiny>shopping_cart</IconTiny>
                            <WInlineblock>장바구니</WInlineblock>
                        </SideGapWrapper>
                    </>
                )}

                <a onClick={() => router.push(SignupUrl)} className="button-secondary hide-tablet w-button">
                    로그인
                </a>
                {!isDesktop && <SideButton />}
            </SideHeaderContainer>
            <Drawer open={open} onClose={onClose} useBlurBackdrop={true}>
                <CartModal />
            </Drawer>
        </>
    );
};
