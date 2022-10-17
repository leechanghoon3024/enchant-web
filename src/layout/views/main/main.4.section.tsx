import { ScrollFadeBox } from '@components/motion/scroll.fade.box';
import { useRouter } from 'next/router';
import { CoursesPlainUrl } from '@framework/lib/page.url';

export const Main4Section = () => {
    const router = useRouter();
    return (
        <section className="section-home-benefits">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-bottom padding-xhuge">
                        <div className="home-benefits-component">
                            <div className="container-small">
                                <div className="margin-bottom margin-xxlarge">
                                    <div className="text-align-center">
                                        <div className="margin-bottom margin-xsmall">
                                            <ScrollFadeBox duration={0.2} className="tagline secondary">
                                                Benefits
                                            </ScrollFadeBox>
                                        </div>
                                        <ScrollFadeBox duration={0.3} className="margin-bottom margin-small">
                                            <h2 data-w-id="23969aee-1794-b4e8-f4ba-dccb00d9a632">
                                                your knowledge from best teachers in the industry
                                            </h2>
                                        </ScrollFadeBox>

                                        <ScrollFadeBox duration={0.4}>
                                            <p data-w-id="23969aee-1794-b4e8-f4ba-dccb00d9a634" className="text-size-medium">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                                elementum tristique. Duis cursus, mi quis viverra ornare.
                                            </p>
                                        </ScrollFadeBox>
                                    </div>
                                </div>
                            </div>
                            <ScrollFadeBox duration={0.5} className="w-layout-grid home-benefits-content-bottom">
                                <div data-w-id="d81a5cc6-0a38-6a4d-958e-71ba9c80ce01" className="w-layout-grid home-benefits-left">
                                    <div id="w-node-d81a5cc6-0a38-6a4d-958e-71ba9c80ce02-618416ff" className="home-benefits-item">
                                        <div className="margin-bottom margin-small">
                                            <div className="icon-wrapper">
                                                <div className="icon-small">play_lesson</div>
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-xsmall">
                                            <h3 className="heading-small">Over 430+ hours of lessons</h3>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                    <div id="w-node-_8b402015-96cd-4d66-5b44-1d52b5412140-618416ff" className="home-benefits-item">
                                        <div className="margin-bottom margin-small">
                                            <div className="icon-wrapper">
                                                <div className="icon-small">people_alt</div>
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-xsmall">
                                            <h3 className="heading-small">40+ teachers</h3>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                </div>
                                <div
                                    id="w-node-d81a5cc6-0a38-6a4d-958e-71ba9c80ce12-618416ff"
                                    data-w-id="d81a5cc6-0a38-6a4d-958e-71ba9c80ce12"
                                    className="home-benefits-image-wrapper"
                                >
                                    <img
                                        src="images/windows-DY8rR5HiLbA-unsplash.jpg"
                                        loading="lazy"
                                        srcSet="images/windows-DY8rR5HiLbA-unsplash-p-500.jpeg 500w, images/windows-DY8rR5HiLbA-unsplash.jpg 768w"
                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 35vw"
                                        alt=""
                                        className="home-benefits-image"
                                    />
                                </div>
                                <div
                                    id="w-node-_1d6fb7ec-3566-e292-c368-1f03e7a7a48b-618416ff"
                                    data-w-id="1d6fb7ec-3566-e292-c368-1f03e7a7a48b"
                                    className="w-layout-grid home-benefits-right"
                                >
                                    <div id="w-node-_1d6fb7ec-3566-e292-c368-1f03e7a7a48c-618416ff" className="home-benefits-item">
                                        <div className="margin-bottom margin-small">
                                            <div className="icon-wrapper">
                                                <div className="icon-small">emoji_emotions</div>
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-xsmall">
                                            <h3 className="heading-small">Online community</h3>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                    <div id="w-node-_1d6fb7ec-3566-e292-c368-1f03e7a7a496-618416ff" className="home-benefits-item">
                                        <div className="margin-bottom margin-small">
                                            <div className="icon-wrapper">
                                                <div className="icon-small">person</div>
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-xsmall">
                                            <h3 className="heading-small">1-on-1 coaching</h3>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                </div>
                            </ScrollFadeBox>
                            <ScrollFadeBox duration={0.5} className="margin-top margin-xlarge">
                                <div className="button-row">
                                    <div className="button-wrapper">
                                        <a
                                            data-w-id="d81a5cc6-0a38-6a4d-958e-71ba9c80ce27"
                                            onClick={() => router.push(CoursesPlainUrl)}
                                            className="button-tertiary w-button"
                                        >
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </ScrollFadeBox>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
