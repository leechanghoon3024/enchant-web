import { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
    const slug = params?.slug as string;
    return {
        props: {
            checkout: slug
        }
    };
};
