import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, ReactElement } from 'react';
import { fadeAndTop } from '@framework/lib/motion/fade.and.top';

interface IScrollFadeBox {
    children: ReactElement | ReactElement[] | string;
    duration: number;
    className?: string;
    disabled?: boolean;
}
export const ScrollFadeBox = ({ disabled, children, duration, className }: IScrollFadeBox) => {
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            control.start('to');
        } else {
            control.start('from');
        }
    }, [control, inView]);
    return (
        <motion.div className={className} ref={ref} variants={fadeAndTop(duration)} initial={disabled ? false : 'from'} animate={control}>
            {children}
        </motion.div>
    );
};
