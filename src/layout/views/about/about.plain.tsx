import { ScrollFadeBox } from '@components/motion/scroll.fade.box';

export const AboutPlain = () => {
    return (
        <section className="section-about-team-values">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xhuge">
                        <div className="about-team-values-component">
                            <div className="margin-bottom margin-xxlarge">
                                <ScrollFadeBox duration={0.2} className="container-small">
                                    <div className="text-align-center">
                                        <div className="margin-bottom margin-xsmall">
                                            <div data-w-id="f48c9c42-3127-9018-be08-7bf287e79dcc" className="tagline secondary">
                                                About us
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <h2 data-w-id="f48c9c42-3127-9018-be08-7bf287e79dcf">People comes first</h2>
                                        </div>
                                        <p data-w-id="f48c9c42-3127-9018-be08-7bf287e79dd1" className="text-size-medium">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                            elementum tristique. Duis cursus, mi quis viverra ornare.
                                        </p>
                                    </div>
                                </ScrollFadeBox>
                            </div>
                            <ScrollFadeBox
                                duration={0.3}
                                data-w-id="f48c9c42-3127-9018-be08-7bf287e79dd3"
                                className="about-team-values-row"
                            >
                                <div className="about-team-values-item">
                                    <div className="margin-bottom margin-small">
                                        <div className="icon-wrapper secondary">
                                            <div className="icon-small">favorite</div>
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-medium">Culture</h3>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                        tristique duis cursus mi quis viverra.
                                    </p>
                                </div>
                                <div className="about-team-values-item">
                                    <div className="margin-bottom margin-small">
                                        <div className="icon-wrapper secondary">
                                            <div className="icon-small">emoji_emotions</div>
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-medium">Community</h3>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                        tristique duis cursus mi quis viverra.
                                    </p>
                                </div>
                                <div className="about-team-values-item">
                                    <div className="margin-bottom margin-small">
                                        <div className="icon-wrapper secondary">
                                            <div className="icon-small">groups</div>
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-medium">Teamwork</h3>
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
            </div>
        </section>
    );
};
