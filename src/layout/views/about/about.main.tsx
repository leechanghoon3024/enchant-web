import { SectionHeader } from '@components/section/section.header';
import { AboutSection } from '@layout/views/about/about.section';
import { AboutLogoList } from '@layout/views/about/about.logo.list';
import { AboutPlain } from '@layout/views/about/about.plain';
import { AboutTeacher } from '@layout/views/about/about.teacher';
import { UserDataInformationType } from '../../../mock/data/blog.data';
interface IAboutCard {
    teacher: UserDataInformationType[];
}
export const AboutMain = ({ teacher }: IAboutCard) => {
    return (
        <>
            <SectionHeader
                category={'About us'}
                title={'5 years of helping designers unlock their true potential'}
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed nec justo tempus.'}
            />
            <AboutSection />
            <AboutLogoList />
            <AboutPlain />
            <SectionHeader
                category={'Teachers'}
                title={'Our teachers'}
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
            <AboutTeacher teacher={teacher} />
        </>
    );
};
