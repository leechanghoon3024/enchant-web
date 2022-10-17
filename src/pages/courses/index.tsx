import { getMainLayout } from '@layout/main.layout';
import { NextPageWithLayout } from '@pages/_app';
import { CoursesPlain } from '@layout/views/courses/courses.plain';
import CustomSeo from '@framework/lib/seo/custome.seo';
import { CoursesPlainUrl } from '@framework/lib/page.url';

const CoursesPage: NextPageWithLayout = () => {
    return (
        <>
            <CustomSeo url={CoursesPlainUrl} title={'courses'} />
            <CoursesPlain />
        </>
    );
};
export default CoursesPage;
CoursesPage.getLayout = getMainLayout;
