import CustomSeo from '@framework/lib/seo/custome.seo';

export { getStaticPaths, getStaticProps } from '@framework/ssr/blog.ssr';
import { NextPageWithLayout } from '@pages/_app';
import { getMainLayout } from '@layout/main.layout';
import { BlogDataInformationType } from '../../mock/data/blog.data';
import { BlogLayout } from '@components/blog/blog.layout';
import { BlogHeader } from '@components/blog/blog.header';
import { BlogImage } from '@components/blog/blog.image';
import { BlogContent } from '@components/blog/blog.content';
import { Main6Section } from '@layout/views/main/main.6.section';
import { BlogPageUrl, BlogPlainUrl } from '@framework/lib/page.url';
interface IProductPage {
    blog: BlogDataInformationType;
}
const BlogPage: NextPageWithLayout<IProductPage> = ({ blog }) => {
    return (
        <>
            <CustomSeo url={BlogPageUrl(blog.id)} title={`${blog.title}`} />
            <BlogLayout>
                <BlogHeader item={blog} />
                <BlogImage item={blog} />
                <BlogContent item={blog} />
                <Main6Section />
            </BlogLayout>
        </>
    );
};
export default BlogPage;
BlogPage.getLayout = getMainLayout;
