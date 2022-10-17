import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRender } from '@framework/utils/use.render';
import { useComponentHydrated } from 'react-hydration-provider';
const isClient = typeof window === 'object';
export const useMedia = (query: string, defaultState: boolean = false) => {
    const hydrated = useComponentHydrated();
    const [state, setState] = useState(hydrated ? () => window.matchMedia(query).matches : defaultState);
    useEffect(() => {
        let mounted = true;
        const mql = window.matchMedia(query);
        const onChange = () => {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };

        mql.addListener(onChange);
        setState(mql.matches);

        return () => {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);

    return state;
};
/**
 * @constructor ChLee
 * @description window size check and responsive Check
 */
export const useLayout = () => {
    const isMobile = useMedia('(max-width: 580px)');
    const isTablet = useMedia('(max-width: 991px)');
    const isDesktop = useMedia('(min-width: 992px)');
    return { isTablet, isDesktop, isMobile };
};
