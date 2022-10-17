import React from 'react';
import styled from '@emotion/styled';
import { TextSizeSmall, TextSizeSmallP, TextWeightSemiBold } from '@styles/styled/typo.styled';
import { ICategoryCardProps } from '../../types/card.types';
import { IconTiny } from '@styles/styled/icon.styled';
import Image from 'next/image';
const BlogCardWrapper = styled.div`
    display: grid;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 0px;
    grid-template-columns: 0.6fr 1fr;
    grid-template-rows: auto;
    color: #1f2937;
    text-decoration: none;
`;

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 8px;
`;

const RightWrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Box = styled.div``;

const TitleHoverLink = styled(TextWeightSemiBold)`
    transition: color 300ms ease;
`;
export const BlogCard = ({ image, title, content }: ICategoryCardProps) => {
    return (
        <Box>
            <BlogCardWrapper>
                <ImageWrapper>
                    <Image
                        layout={'responsive'}
                        width={'100%'}
                        height={'65.66%'}
                        src={image}
                        loading="lazy"
                        alt=""
                        objectFit={'cover'}
                        className="navbar-image"
                    />
                </ImageWrapper>
                <RightWrapper>
                    <TitleHoverLink>{title}</TitleHoverLink>
                    <TextSizeSmallP css={{ color: '#4b5563' }}>{content}</TextSizeSmallP>
                    <Box css={{ marginTop: '0.5rem', display: 'flex' }}>
                        <TextSizeSmall css={{ fontWeight: 500, color: '#1f2937', '&:hover': '#6b7280' }}>Read more</TextSizeSmall>
                        <IconTiny>chevron_right</IconTiny>
                    </Box>
                </RightWrapper>
            </BlogCardWrapper>
        </Box>
    );
};
