import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { TextSizeSmall, TextSizeSmallP, TextWeightSemiBold } from '@styles/styled/typo.styled';
import { ICategoryCardProps } from '../../types/card.types';
const CardItem = styled.div`
    display: grid;
    padding: 12px;
    align-items: flex-start;
    grid-auto-columns: 1fr;
    grid-column-gap: 12px;
    grid-row-gap: 0px;
    grid-template-columns: -webkit-max-content 1fr;
    grid-template-columns: max-content 1fr;
    grid-template-rows: auto;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background-color: #f3f4f6;
    }
`;
const CardImage = styled.div`
    overflow: hidden;
    width: 66px;
    height: 66px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-radius: 8px;
    color: #22a45a;
`;
const CardRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #1f2937;
`;

export const CategoryCard = ({ image, content, title }: ICategoryCardProps) => {
    return (
        <CardItem>
            <CardImage>
                <Image
                    layout={'responsive'}
                    width={'100%'}
                    height={'100%'}
                    src={image}
                    loading="lazy"
                    alt=""
                    objectFit={'cover'}
                    className="navbar-image"
                />
            </CardImage>
            <CardRightWrapper>
                <TextWeightSemiBold>{title}</TextWeightSemiBold>
                <TextSizeSmallP>{content}</TextSizeSmallP>
            </CardRightWrapper>
        </CardItem>
    );
};
