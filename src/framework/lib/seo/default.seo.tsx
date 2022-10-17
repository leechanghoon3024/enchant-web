import React from 'react';
import { DefaultSeo as NextDefaultSeo } from 'next-seo';

export const DefaultSeo = () => {
    return (
        <NextDefaultSeo
            additionalMetaTags={[
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1 maximum-scale=1'
                },
                {
                    name: 'apple-mobile-web-app-capable',
                    content: 'yes'
                },
                {
                    name: 'theme-color',
                    content: '#ffffff'
                }
            ]}
            openGraph={{
                type: 'website',
                locale: 'ko_KR',
                url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
                title: '노코드:클래스',
                site_name: '노코드:클래스',
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_SITE_IMAGE}`,
                        width: 175,
                        height: 35
                    }
                ]
            }}
            // additionalLinkTags={[
            //     {
            //         rel: 'apple-touch-icon',
            //         href: 'icons/apple-icon-180.png'
            //     },
            //     {
            //         rel: 'manifest',
            //         href: '/manifest.json'
            //     }
            // ]}
            title={'노코드:클래스'}
            defaultTitle="노코드:클래스"
        />
    );
};
