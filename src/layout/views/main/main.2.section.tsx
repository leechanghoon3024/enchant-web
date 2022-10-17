import { ScrollFadeBox } from '@components/motion/scroll.fade.box';
import { useRouter } from 'next/router';
import { AboutPlainUrl } from '@framework/lib/page.url';

export const Main2Section = () => {
    const router = useRouter();
    return (
        <ScrollFadeBox duration={0.2} className="section-about-us">
            <div className="page-padding">
                <div className="container-large">
                    <div data-w-id="bf7f259f-7d0f-42e1-3922-5317bca06eaa" className="home-about-us-component">
                        <div className="container-small">
                            <div className="padding-vertical padding-xlarge">
                                <div className="text-align-center">
                                    <ScrollFadeBox duration={0.3} className="margin-bottom margin-xsmall">
                                        <div className="tagline">About us</div>
                                    </ScrollFadeBox>
                                    <ScrollFadeBox duration={0.5} className="margin-bottom margin-small">
                                        <h2 className="heading">No-code Education Platform</h2>
                                    </ScrollFadeBox>
                                    <ScrollFadeBox duration={0.6}>
                                        <p className="text-size-medium text-color-neutral-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                                            diam libero vitae erat.
                                        </p>
                                    </ScrollFadeBox>

                                    <ScrollFadeBox duration={0.7} className="margin-top margin-small">
                                        <div className="button-row is-center">
                                            <div className="button-wrapper">
                                                <a onClick={() => router.push(AboutPlainUrl)} className="button-tertiary w-button">
                                                    About us
                                                </a>
                                            </div>
                                        </div>
                                    </ScrollFadeBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-about-us-background"></div>
        </ScrollFadeBox>
    );
};
