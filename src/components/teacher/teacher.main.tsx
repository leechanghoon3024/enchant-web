import { TeacherLayout } from '@components/teacher/teacher.layout';
import { ProductLeftLayout } from '@components/prdouct/product.left';
import { ProductRightLayout } from '@components/prdouct/product.right';
import { UserDataInformationType } from '../../mock/data/blog.data';
import { SectionHeader } from '@components/section/section.header';
import { TeacherContent } from '@components/teacher/teacher.content';
import { TeacherHeader } from '@components/teacher/teacher.header';
interface ITeacherPage {
    teacher: UserDataInformationType;
}
export const TeacherMain = ({ teacher }: ITeacherPage) => {
    return (
        <TeacherLayout>
            {/*<SectionHeader*/}
            {/*    category={'Teachers'}*/}
            {/*    title={'Meet the teachers'}*/}
            {/*    content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}*/}
            {/*/>*/}
            <TeacherHeader teacher={teacher} />
            <TeacherContent teacher={teacher} />
        </TeacherLayout>
    );
};
