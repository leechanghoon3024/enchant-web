import { NextSeo, NextSeoProps } from 'next-seo';
interface SeoProps extends NextSeoProps {
    url: string;
}
const CustomSeo = ({ title, description, url, ...props }: SeoProps) => {
    return (
        <NextSeo
            title={title}
            openGraph={{
                url: `${process.env.NEXT_PUBLIC_SITE_URL}${url}`,
                title,
                description,
                type: 'website',
                locale: 'ko_KR',
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_SITE_IMAGE}`,
                        width: 175,
                        height: 35
                    }
                ]
            }}
            {...props}
        />
    );
};

export default CustomSeo;
