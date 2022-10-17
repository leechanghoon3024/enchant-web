import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDrawer } from '@store/drawer/use.drawer';
import { CSSTransition } from 'react-transition-group';
import { CategoryCard } from '@components/cards/category.card';
import { getUuid } from '@framework/utils/get.uuid';
import { ICategoryCardProps } from '../../types/card.types';
import { TestCategoryData } from '../../mock/data/category.data';
import Link from 'next/link';
import { CategoryText } from '@styles/styled/typo.styled';
import { DropDownIcon, ToggleWrapper } from '@components/category/category.header';
import { useLayout } from '@framework/utils/use.layout';
import { CategoryModal } from '@components/modals/category.modal';
const MobileCategoryModalContainer = styled.div`
    position: absolute;
    overflow: auto;
    height: 100vh;
    margin-left: 0rem;
    padding-top: 1.5rem;
    padding-right: 5%;
    padding-left: 5%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    background-color: #292929;
    background-clip: border-box;
    -webkit-text-fill-color: inherit;
    width: 100vw;
`;

const MobileMenuList = styled.div`
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
`;

const MobileCategoryText = styled.a`
    margin-left: 0px;
    padding: 1rem 0rem;
    font-size: 1.125rem;
    text-align: left;
    color: #fff;
    font-weight: 500;
    font-family: GmarketSans, sans-serif;
    width: 100%;
    display: block;
    position: relative;
`;
export const ToggleWrapper2 = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
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
`;

export const MobileCategoryModal = () => {
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
    const { open } = useDrawer('mobileMenu', true);
    const mobileCategory = useDrawer('mobileCategory');

    const { isDesktop, isTablet } = useLayout();
    return (
        <CSSTransition classNames={'category-modal'} in={open} timeout={800} unmountOnExit>
            <MobileCategoryModalContainer>
                <MobileMenuList>
                    {menu.map((v) => (
                        <Link href={v.path} key={v.id}>
                            <MobileCategoryText>{v.name}</MobileCategoryText>
                        </Link>
                    ))}
                </MobileMenuList>
                <ToggleWrapper isTablet={isTablet} onClick={() => mobileCategory.onOpen()}>
                    카테고리
                    <DropDownIcon open={mobileCategory.open} />
                </ToggleWrapper>
                <CategoryModal open={mobileCategory.open} onClose={mobileCategory.onClose} />
            </MobileCategoryModalContainer>
        </CSSTransition>
    );
};
