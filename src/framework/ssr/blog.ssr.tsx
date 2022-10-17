import { fetchBlog, fetchBlogs } from '@framework/api/blog.api';
import { GetStaticPathsContext, GetStaticProps } from 'next';

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
    const blogs = await fetchBlogs();
    const paths = blogs.map((blog) => ({ params: { slug: blog.id } }));
    return {
        paths,
        fallback: 'blocking'
    };
}
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
    const slug = params?.slug as string;
    try {
        const blog = await fetchBlog(slug);
        if (!blog) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                blog
            },
            revalidate: 60
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};
