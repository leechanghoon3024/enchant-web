import { ScrollFadeBox } from '@components/motion/scroll.fade.box';

export const Main7Section = () => {
    return (
        <section className="section-cta">
            <div className="page-padding">
                <div className="padding-top padding-xhuge">
                    <div className="padding-bottom padding-xxlarge">
                        <div className="container-small">
                            <div className="text-align-center">
                                <ScrollFadeBox duration={0.2} className="margin-bottom margin-small">
                                    <h2 data-w-id="9d64336f-5a08-5104-618a-3eda889722b2" className="text-color-white">
                                        Start learning today
                                    </h2>
                                </ScrollFadeBox>
                                <ScrollFadeBox duration={0.2}>
                                    <p data-w-id="9d64336f-5a08-5104-618a-3eda889722b4" className="text-size-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                        tristique.
                                    </p>
                                </ScrollFadeBox>

                                <ScrollFadeBox duration={0.3} className="margin-top margin-small">
                                    <div data-w-id="9d64336f-5a08-5104-618a-3eda889722b7" className="button-row is-center">
                                        <div className="button-wrapper">
                                            <a href="courses.html" className="button w-button">
                                                Get started
                                            </a>
                                        </div>
                                        <div className="button-wrapper">
                                            <a href="contact.html" className="button-secondary w-button">
                                                Contact us
                                            </a>
                                        </div>
                                    </div>
                                </ScrollFadeBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
