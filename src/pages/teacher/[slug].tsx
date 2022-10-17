import CustomSeo from '@framework/lib/seo/custome.seo';

export { getStaticPaths, getStaticProps } from '@framework/ssr/teacher.ssr';
import { NextPageWithLayout } from '@pages/_app';
import { getMainLayout } from '@layout/main.layout';
import { UserDataInformationType } from '../../mock/data/blog.data';
import { TeacherMain } from '@components/teacher/teacher.main';
import { TeacherPageUrl } from '@framework/lib/page.url';
interface ITeacherPage {
    teacher: UserDataInformationType;
}
const TeacherPage: NextPageWithLayout<ITeacherPage> = ({ teacher }) => {
    return (
        <>
            <CustomSeo url={TeacherPageUrl(teacher.id)} title={`${teacher.userFirstName} ${teacher.userLastName}`} />
            <TeacherMain teacher={teacher} />
        </>
    );
};
export default TeacherPage;
TeacherPage.getLayout = getMainLayout;
