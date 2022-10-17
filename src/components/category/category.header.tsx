import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { getUuid } from '@framework/utils/get.uuid';
import Link from 'next/link';
import { NavbarMenuWrapper } from '@styles/styled/wrapper.styled';
import { CategoryContainer } from '@styles/styled/container.styled';
import { CategoryText } from '@styles/styled/typo.styled';
import { CategoryModal } from '@components/modals/category.modal';
import { ICategoryCardProps } from '../../types/card.types';
import { TestCategoryData } from '../../mock/data/category.data';
import { SearchModal } from '@components/modals/search.modal';
import { SideHeader } from '@components/side.header/side.header';
import { useDrawer } from '@store/drawer/use.drawer';
import { useLayout } from '@framework/utils/use.layout';
import { MobileCategoryModal } from '@components/modals/mobile.category.modal';
// @ts-ignore
import { IStyleResponsive } from '../../types/style.types';

interface IDropDownIcon {
    open: boolean;
}
export const DropDownIcon = styled.div<IDropDownIcon>`
    transform-style: preserve-3d;
    font-family: 'webflow-icons' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    color: #fff;
    font-family: GmarketSans, sans-serif;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    margin-top: auto;
    margin-right: 0px;
    margin-bottom: auto;
    width: 1em;
    height: 1em;
    &:before {
        content: '\\e603';
    }
    transition: all 0.3s ease-out;
    transform: ${(props) => (props.open ? 'rotateZ(180deg);' : 'rotateZ(0deg)')};
`;
export const ToggleWrapper = styled.div<IStyleResponsive>`
    padding: 1.5rem 1.5rem 1.5rem 1rem;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    font-family: GmarketSans, sans-serif;
    position: relative;
    vertical-align: top;
    text-decoration: none;
    color: #222222;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    white-space: nowrap;
    color: #fff;
    cursor: pointer;
    ${(props) =>
        props.isTablet &&
        `
            display: flex;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            padding-left: 0rem;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            color: #fff;
            font-size: 1.125rem;
      `}
`;
export const CategoryHeader = () => {
    const [menu, setMenu] = useState([
        {
            path: 'about',
            name: 'A',
            id: getUuid()
        },
        {
            path: 'blog',
            name: 'B',
            id: getUuid()
        },
        {
            path: 'contact',
            name: 'dd',
            id: getUuid()
        }
    ]);
    const categoryDrawer = useDrawer('category', true);
    const { isDesktop } = useLayout();
    return (
        <>
            {isDesktop && (
                <CategoryContainer>
                    <>
                        <NavbarMenuWrapper>
                            {menu.map((v) => (
                                <Link href={v.path} key={v.id}>
                                    <CategoryText>{v.name}</CategoryText>
                                </Link>
                            ))}
                            <ToggleWrapper onClick={() => categoryDrawer.onOpen()}>
                                카테고리
                                <DropDownIcon open={categoryDrawer.open} />
                            </ToggleWrapper>
                        </NavbarMenuWrapper>
                    </>
                    <CategoryModal open={categoryDrawer.open} onClose={categoryDrawer.onClose} />
                    <SearchModal />
                </CategoryContainer>
            )}
            <SideHeader />
        </>
    );
};
