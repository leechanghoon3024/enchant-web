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
const SideContent = styled.div`
    overflow: hidden;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    right: 0;
    width: 100%;
    max-width: 480px;
    min-width: 320px;
`;

const SideBackground = styled(motion.div)`
    inset: 0;
    overflow: hidden;
    height: 100vh;
    position: fixed;
`;

const SideBackgroundWrapper = styled(motion.aside)`
    inset: 0;
    overflow: hidden;
    height: 100vh;
    z-index: 9999;
    position: fixed;
`;
export const Drawer = ({ children, open = false, useBlurBackdrop, onClose }: DrawerProps) => {
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
                    <SideBackgroundWrapper
                        className={useBlurBackdrop ? 'use-blur-backdrop' : ''}
                        ref={ref}
                        key="drawer"
                        initial="from"
                        animate="to"
                        exit="from"
                        variants={fadeInRight(0.5)}
                    >
                        <SideBackground
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                            initial="from"
                            animate="to"
                            exit="from"
                            variants={fadeInOut(0.35)}
                            onClick={() => onClose()}
                        />
                        <SideContent className={'123'}>{children}</SideContent>
                    </SideBackgroundWrapper>
                )}
            </AnimatePresence>
        </Portal>
    );
};
