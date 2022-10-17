import { ScrollFadeBox } from '@components/motion/scroll.fade.box';

export const AboutSection = () => {
    return (
        <section className="section-about-numbers">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-bottom padding-xxlarge">
                        <div className="padding-top padding-xhuge">
                            <ScrollFadeBox duration={0.3} className="margin-bottom margin-xxlarge">
                                <div className="w-layout-grid about-numbers-component">
                                    <div className="about-numbers-content-left">
                                        <h3 data-w-id="a6478b99-dea7-e921-9f1a-63524bc3ecdc">
                                            Learnico is a multidisciplinary education platform
                                        </h3>
                                    </div>
                                    <div className="about-numbers-content-right">
                                        <div className="margin-bottom margin-small">
                                            <p data-w-id="a6478b99-dea7-e921-9f1a-63524bc3ece0" className="text-size-medium">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                                                commodo diam libero vitae erat.
                                            </p>
                                        </div>
                                        <div className="w-layout-grid about-numbers-item-list">
                                            <div data-w-id="a6478b99-dea7-e921-9f1a-63524bc3ece3" className="about-numbers-text-wrapper">
                                                <div className="margin-bottom margin-xxsmall">
                                                    <div className="heading-xlarge text-color-primary-600">2017</div>
                                                </div>
                                                <div>Founded</div>
                                            </div>
                                            <div data-w-id="a6478b99-dea7-e921-9f1a-63524bc3ece9" className="about-numbers-text-wrapper">
                                                <div className="margin-bottom margin-xxsmall">
                                                    <div className="heading-xlarge text-color-primary-600">40+</div>
                                                </div>
                                                <div>Courses created</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollFadeBox>
                            <ScrollFadeBox
                                duration={0.5}
                                data-w-id="a6478b99-dea7-e921-9f1a-63524bc3ecef"
                                className="about-numbers-image-wrapper"
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/630f08ddd8cd850d3a841700/630f08ddd8cd85caba841760_austin-distel-KWsKzLGmmzQ-unsplash.jpg"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 92vw"
                                    alt=""
                                    className="about-numbers-image"
                                />
                            </ScrollFadeBox>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
