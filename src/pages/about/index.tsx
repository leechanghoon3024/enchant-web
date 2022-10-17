import { NextPageWithLayout } from '@pages/_app';
import { getMainLayout } from '@layout/main.layout';
import { UserDataInformationType } from '@mock/data/blog.data';
import { AboutMain } from '@layout/views/about/about.main';
import CustomSeo from '@framework/lib/seo/custome.seo';
import { AboutPlainUrl, BlogPageUrl } from '@framework/lib/page.url';
export { getServerSideProps } from '@framework/ssr/about.ssr';
interface IProductPage {
    teacher: UserDataInformationType[];
}

const AboutPage: NextPageWithLayout<IProductPage> = ({ teacher }) => {
    return (
        <div>
            <CustomSeo url={AboutPlainUrl} title={`About us`} />
            <AboutMain teacher={teacher} />
        </div>
    );
};
export default AboutPage;
AboutPage.getLayout = getMainLayout;
