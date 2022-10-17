import { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
    const slug = params?.slug as string;
    //여기서 넣기
    //here
    //
    return {
        props: {
            checkout: slug
        }
    };
};
