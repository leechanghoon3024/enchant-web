import { ScrollFadeBox } from '@components/motion/scroll.fade.box';

export const MainAboutPage = () => {
    return (
        <section className="section-about-courses">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-bottom padding-xxxhuge">
                        <div className="margin-bottom margin-xxlarge">
                            <ScrollFadeBox
                                duration={0.2}
                                data-w-id="45945bfd-1247-cfa7-05a7-90d36e6aec88"
                                className="home-about-courses-component"
                            >
                                <div className="home-about-courses-content">
                                    <div className="margin-bottom margin-xsmall">
                                        <div className="tagline">Join us</div>
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <h2>Join more than 17,000+ students all over the world</h2>
                                    </div>
                                    <p className="text-size-medium text-color-neutral-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                        tristique. Duis cursus, mi quis viverra ornare.
                                    </p>
                                    <div className="margin-top margin-small">
                                        <div className="button-row">
                                            <div className="button-wrapper">
                                                <a href="courses.html" className="button-tertiary w-button">
                                                    Get started
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-about-courses-image-wrapper">
                                    <img
                                        src="https://uploads-ssl.webflow.com/630f08ddd8cd850d3a841700/630f08ddd8cd855b4a84176a_windows-GDl2tmIxixU-unsplash.jpg"
                                        loading="lazy"
                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 46vw"
                                        alt=""
                                        className="home-about-courses-image"
                                    />
                                </div>
                            </ScrollFadeBox>
                        </div>
                        <ScrollFadeBox duration={0.4} className="home-about-courses-row">
                            <div data-w-id="2b054d7b-6ee2-a78c-f81c-0c74da460834" className="home-about-courses-item">
                                <div className="margin-bottom margin-medium">
                                    <div className="icon-wrapper">
                                        <div className="icon-small">people_alt</div>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <h3 className="heading-small text-weight-semibold">Browse our courses</h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                    tristique duis cursus mi quis viverra.
                                </p>
                            </div>
                            <div data-w-id="3f3f253b-6288-729d-88ac-2c1356081023" className="home-about-courses-item">
                                <div className="margin-bottom margin-medium">
                                    <div className="icon-wrapper">
                                        <div className="icon-small">shield</div>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <h3 className="heading-small">Purchase quickly and securely</h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                    tristique duis cursus mi quis viverra.
                                </p>
                            </div>
                            <div data-w-id="a6793971-15a2-6aa6-6834-1d7323450ef8" className="home-about-courses-item">
                                <div className="margin-bottom margin-medium">
                                    <div className="icon-wrapper">
                                        <div className="icon-small">school</div>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <h3 className="heading-small">Start learning right away</h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                    tristique duis cursus mi quis viverra.
                                </p>
                            </div>
                        </ScrollFadeBox>
                    </div>
                </div>
            </div>
        </section>
    );
};
