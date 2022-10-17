import { GetServerSideProps } from 'next';
import { TestBlogData } from '../../mock/data/blog.data';
export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
    const teacher = [...TestBlogData].map((v) => v.user);
    //여기서 넣기
    //here
    //
    return {
        props: {
            teacher
        }
    };
};
