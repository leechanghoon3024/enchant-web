import React, { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@styles/styled/box.styled';
import { TextSizeSmall } from '@styles/styled/typo.styled';
import { ICategoryCardProps } from '../../types/card.types';
import { TestBlogCardData, TestCategoryData } from '../../mock/data/category.data';
import { CategoryCard } from '@components/cards/category.card';
import { getUuid } from '@framework/utils/get.uuid';
import { BlogCard } from '@components/cards/blog.card';
import { IconTiny } from '@styles/styled/icon.styled';
import { keyframes } from '@emotion/css';
import { CSSTransition } from 'react-transition-group';
import { useLayout } from '@framework/utils/use.layout';
import { IStyleResponsive } from '@type/styles.types';

interface ICategoryModalProps {
    open: boolean;
    onClose: () => void;
}

interface ICategoryModalContainer extends IStyleResponsive {
    open: boolean;
}
const openModalKeyFrame = keyframes`
    0 { display: none; opacity: 0; z-index:0;}
    50% { display: flex; opacity: 0.5; z-index:999;}
    100%{ display: flex; opacity: 1; z-index:999; }
`;
const closeModalKeyFrame = keyframes`
    0 { display: flex; opacity: 1; z-index:999;}
    50% { display: flex; opacity: 0.5; z-index:999;}
    100%{ display: none; opacity: 0; z-index:0; }
`;
const CategoryModalContainer = styled.div<ICategoryModalContainer>`
    position: absolute;
    left: 0%;
    top: 4.5rem;
    right: 0%;
    bottom: auto;
    overflow: hidden;
    width: 100vw;
    max-width: 100%;
    padding-right: 5%;
    padding-left: 5%;
    background-color: #fff;
    display: flex;
    z-index: 999;
    box-shadow: 0 2px 4px -2px rgb(16 24 40 / 6%), 0 4px 8px -2px rgb(16 24 40 / 10%);
    ${(props) =>
        props.isTablet &&
        `flex-direction: column;
         top: 0rem;
         position: relative;
         padding: 2rem;
         border-bottom-style: none;
         border-radius: 16px;
         margin-bottom: 2rem;
          `}
`;

const ModalLeftWrapper = styled.div<IStyleResponsive>`
    display: grid;
    padding: 2rem 2rem 2rem 0rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    grid-auto-columns: 1fr;
    grid-auto-rows: -webkit-min-content;
    grid-auto-rows: min-content;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: -webkit-min-content;
    -ms-grid-rows: min-content;
    grid-template-rows: -webkit-min-content;
    grid-template-rows: min-content;

    ${(props) =>
        props.isTablet &&
        `
        padding: 2rem;
        align-items: start;
        align-content: start;
          `}
`;

const ModalRightWrapper = styled.div`
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-width: 35rem;
    padding: 2rem 0rem 2rem 2rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
`;

const TitleWrapper = styled.div`
    grid-column-start: span 1;
    grid-column-end: span 1;
    grid-row-start: span 1;
    grid-row-end: span 1;
`;

const GridWrapper = styled.div<IStyleResponsive>`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: -webkit-max-content;
    grid-auto-rows: max-content;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: -webkit-min-content;
    grid-template-rows: min-content;
    ${(props) =>
        props.isTablet &&
        `
         grid-template-columns: 1fr;
    `}
`;

const BlogCardListWrapper = styled.div`
    display: grid;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    grid-auto-columns: 1fr;
    grid-column-gap: 0rem;
    grid-row-gap: 0.5rem;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
`;

const BlogCardContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    display: grid;
    grid-auto-rows: -webkit-max-content;
    grid-auto-rows: max-content;
    grid-row-gap: 0.5rem;
    grid-template-rows: max-content max-content;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
`;

const ButtonWrapper = styled.div`
    display: flex;
    padding-top: 1rem;
`;

const AllButton = styled.a`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0.5rem 0px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-column-gap: 4px;
    background-color: transparent;
    -webkit-transition: color 200ms ease;
    transition: color 200ms ease;
    color: #111827;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
`;

export const CategoryModal = ({ onClose, open }: ICategoryModalProps) => {
    const [category, setCategory] = useState<ICategoryCardProps[]>(TestCategoryData);
    const [blog, setBlog] = useState<ICategoryCardProps[]>(TestBlogCardData);
    const { isTablet } = useLayout();
    return (
        <CSSTransition classNames={'category-modal'} in={open} timeout={800} unmountOnExit>
            <CategoryModalContainer open={open} isTablet={isTablet}>
                <ModalLeftWrapper>
                    <TitleWrapper>
                        <TextSizeSmall css={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Trending courses</TextSizeSmall>
                    </TitleWrapper>
                    <TitleWrapper>
                        <GridWrapper isTablet={isTablet}>
                            {category.map((v) => (
                                <CategoryCard image={v.image} title={v.title} content={v.content} key={getUuid()} />
                            ))}
                        </GridWrapper>
                    </TitleWrapper>
                </ModalLeftWrapper>
                <ModalRightWrapper>
                    <BlogCardContainer>
                        <TextSizeSmall css={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Featured from Blog</TextSizeSmall>
                        <BlogCardListWrapper>
                            {blog.map((v) => (
                                <BlogCard image={v.image} title={v.title} content={v.content} key={getUuid()} />
                            ))}
                        </BlogCardListWrapper>
                        <ButtonWrapper>
                            <AllButton>
                                <div css={{ fontFamily: 'GmarketSans, sans-serif' }}>See all articles</div>
                                <IconTiny css={{ fontSize: '1.5rem' }}>chevron_right</IconTiny>
                            </AllButton>
                        </ButtonWrapper>
                    </BlogCardContainer>
                </ModalRightWrapper>
            </CategoryModalContainer>
        </CSSTransition>
    );
};
