import { getMainLayout } from '@layout/main.layout';
import { NextPageWithLayout } from '@pages/_app';
import { BlogMain } from '@layout/views/blog/blog.main';
import CustomSeo from '@framework/lib/seo/custome.seo';
import { BlogPlainUrl, CoursesPlainUrl } from '@framework/lib/page.url';

const BlogPage: NextPageWithLayout = () => {
    return (
        <>
            <CustomSeo url={BlogPlainUrl} title={'Blog'} />
            <BlogMain />
        </>
    );
};
export default BlogPage;
BlogPage.getLayout = getMainLayout;
