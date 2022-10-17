import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { emotionGlobal } from '@emotionStyle/emotion.global';
import { SessionProvider } from 'next-auth/react';
// --- WebFlow css Import --- //

import '@styles/webflow/normalize.css';
import '@styles/webflow/webflow.css';
import '@styles/webflow/projectStyle.css';
import '@styles/animation.css';
import '@styles/customeStyle.css';
import { NextPage } from 'next';
import React, { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { useComponentHydrated } from 'react-hydration-provider';
import { Context as ResponsiveContext } from 'react-responsive';
import { DefaultSeo } from '@framework/lib/seo/default.seo';
import { MainHeader } from '@layout/header/main.header';
// --- layout Type --- //
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
// --- ---//
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    const hydrated = useComponentHydrated();
    return (
        <Provider store={store}>
            <Global styles={emotionGlobal} />
            <DefaultSeo />
            <SessionProvider>{getLayout(<Component {...pageProps} />)}</SessionProvider>
        </Provider>
    );
}

export default MyApp;
