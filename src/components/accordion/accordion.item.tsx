import React, { useState } from 'react';
import styled from '@emotion/styled';
interface AccordionContainerProps {
    open: boolean;
}
const AccordionTitle = styled.div`
    color: #fff;
`;
const AccordionContainer = styled.div``;
const AccordionBody = styled.div`
    color: #fff;
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;
    transition: height 0.5s ease-in-out;
    height: 0px;
`;
const AccordionToggle = styled.div<AccordionContainerProps>`
    transition: all 0.3s ease-out;
    transform: ${(props) => (props.open ? 'rotateZ(180deg);' : 'rotateZ(0deg)')};
`;
interface IAccordionListProps {
    item: { title: string; content: string };
}
export const AccordionItem = ({ item }: IAccordionListProps) => {
    const [open, setOpen] = useState(false);
    const parentRef = React.useRef<HTMLDivElement>(null);
    const childRef = React.useRef<HTMLDivElement>(null);
    const handleButtonClick = React.useCallback(() => {
        setOpen((p) => !p);
        if (parentRef.current === null || childRef.current === null) {
            return;
        }
        if (parentRef.current.clientHeight > 0) {
            parentRef.current.style.height = '0';
        } else {
            parentRef.current.style.height = `${childRef.current.clientHeight + 10}px`;
        }
    }, [open]);
    return (
        <AccordionContainer onClick={() => handleButtonClick()}>
            <AccordionTitle data-w-id="20521e02-51dd-a907-9fd1-51e495e52920" className="product-faq-question">
                <div className="text-size-medium text-weight-bold">{item.title}</div>
                <AccordionToggle open={open} className="icon-xsmall">
                    keyboard_arrow_down
                </AccordionToggle>
            </AccordionTitle>
            <AccordionBody className="product-faq-answer" ref={parentRef}>
                <div className="margin-bottom margin-small">
                    <div className="max-width-xlarge" ref={childRef}>
                        <p>{item.content}</p>
                    </div>
                </div>
            </AccordionBody>
        </AccordionContainer>
    );
};
