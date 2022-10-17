import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portal from '@reach/portal';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { fadeInLeft } from '@framework/lib/motion/fade.in.left';
import styled from '@emotion/styled';
import { fadeInOut } from '@framework/lib/motion/fade.in.out';
import { fadeInRight } from '@framework/lib/motion/fade.in.right';
interface DrawerProps {
    children: any;
    open: boolean;
    variant?: 'left' | 'right';
    useBlurBackdrop?: boolean;
    onClose: () => void;
}
type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const ModalContent = styled.div`
    overflow: hidden;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 928px;
    width: 100%;
`;

const ModalContentBackground = styled(motion.div)`
    inset: 0;
    overflow: hidden;
    height: 100vh;
    position: fixed;
`;

const ModalBackgroundWrapper = styled(motion.aside)`
    inset: 0;
    overflow: hidden;
    height: 100vh;
    z-index: 9999;
    position: fixed;
`;
export const FullScreenModal = ({ children, open = false, useBlurBackdrop, onClose }: DrawerProps) => {
    const ref = useRef() as DivElementRef;
    useEffect(() => {
        if (ref.current) {
            if (open) {
                disableBodyScroll(ref.current);
            } else {
                enableBodyScroll(ref.current);
            }
        }
        return () => {
            clearAllBodyScrollLocks();
        };
    }, [open]);
    return (
        <Portal>
            <AnimatePresence>
                {open && (
                    <ModalBackgroundWrapper
                        className={useBlurBackdrop ? 'use-blur-backdrop' : ''}
                        ref={ref}
                        key="drawer-full"
                        initial="from"
                        animate="to"
                        exit="from"
                        variants={fadeInOut(0.5)}
                    >
                        <ModalContentBackground
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                            initial="from"
                            animate="to"
                            exit="from"
                            variants={fadeInOut(0.35)}
                            onClick={() => onClose()}
                        />
                        <ModalContent className={'123'}>{children}</ModalContent>
                    </ModalBackgroundWrapper>
                )}
            </AnimatePresence>
        </Portal>
    );
};
