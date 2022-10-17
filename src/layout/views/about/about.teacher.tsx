import { ScrollFadeBox } from '@components/motion/scroll.fade.box';
import { UserDataInformationType } from '../../../mock/data/blog.data';
import { AboutCard } from '@components/cards/about.card';
import { getUuid } from '@framework/utils/get.uuid';
interface IAboutCard {
    teacher: UserDataInformationType[];
}
export const AboutTeacher = ({ teacher }: IAboutCard) => {
    return (
        <>
            <section className="section-about-team">
                <div className="page-padding">
                    <div className="container-large">
                        <div className="padding-vertical padding-custom-1">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="max-width-xlarge">
                                    <ScrollFadeBox duration={0.2} className="margin-bottom margin-xsmall">
                                        <div data-w-id="699e5d6b-c6fa-f7ce-20fe-bcaef6b1351d" className="tagline secondary">
                                            Teachers
                                        </div>
                                    </ScrollFadeBox>
                                    <ScrollFadeBox duration={0.3} className="margin-bottom margin-small">
                                        <h2 data-w-id="699e5d6b-c6fa-f7ce-20fe-bcaef6b13520">teachers</h2>
                                    </ScrollFadeBox>
                                    <p data-w-id="699e5d6b-c6fa-f7ce-20fe-bcaef6b13523" className="text-size-medium text-color-neutral-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                                    </p>
                                </div>
                            </div>
                            <ScrollFadeBox duration={0.4} data-w-id="699e5d6b-c6fa-f7ce-20fe-bcaef6b13525" className="about-team-component">
                                <div className="team-list-wrapper w-dyn-list">
                                    <div role="list" className="blog-list w-dyn-items">
                                        {teacher && teacher.map((v) => <AboutCard teacher={v} key={getUuid()} />)}
                                    </div>
                                </div>
                            </ScrollFadeBox>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
