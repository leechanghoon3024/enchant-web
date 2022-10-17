import { fetchBlog, fetchBlogs } from '@framework/api/blog.api';
import { GetStaticPathsContext, GetStaticProps } from 'next';
import { fetchTeacher } from '@framework/api/teacher.api';

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
    const blogs = await fetchBlogs();
    const paths = blogs.map((blog) => ({ params: { slug: blog.user.id } }));
    return {
        paths,
        fallback: 'blocking'
    };
}
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
    const slug = params?.slug as string;
    try {
        const user = await fetchTeacher(slug);
        if (!user) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                teacher: user
            },
            revalidate: 60
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};
