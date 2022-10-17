import React from 'react';
import styled from '@emotion/styled';
import { AccordionItem } from '@components/accordion/accordion.item';
import { getUuid } from '@framework/utils/get.uuid';

interface IAccordionListProps {
    item: { title: string; content: string }[];
}
interface AccordionContainerProps {
    open: boolean;
}
const AccordionContainer = styled.div``;

const AccordionTitle = styled.div``;

const AccordionBody = styled.div<AccordionContainerProps>``;
export const AccordionList = ({ item }: IAccordionListProps) => {
    return (
        <AccordionContainer className="product-faq-component">
            {item.map((v) => (
                <AccordionItem item={v} key={getUuid()} />
            ))}
        </AccordionContainer>
    );
};
