import { ScrollFadeBox } from '@components/motion/scroll.fade.box';

interface ISectionHeader {
    category: string;
    title: string;
    content: string;
}
export const SectionHeader = ({ title, content, category }: ISectionHeader) => {
    return (
        <section className="section-about-header">
            <ScrollFadeBox duration={0.2} className="page-padding">
                <div className="padding-vertical padding-xhuge">
                    <div className="container-large">
                        <div className="about-header-component">
                            <div className="container-small margin-0">
                                <div className="margin-bottom margin-xsmall">
                                    <div data-w-id="4b283ed3-f4ec-69c7-36b5-10c521763a29" className="tagline secondary">
                                        {category}
                                    </div>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <h1 data-w-id="4b283ed3-f4ec-69c7-36b5-10c521763a2c" className="heading-xlarge text-color-white">
                                        {title}
                                    </h1>
                                </div>
                                <p data-w-id="4b283ed3-f4ec-69c7-36b5-10c521763a2e" className="text-size-medium">
                                    {content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollFadeBox>
            <img
                src="images/Graphic.svg"
                loading="lazy"
                data-w-id="fbbf2938-d7b8-443a-bb92-9dea5aacdbef"
                alt=""
                className="header-graphic"
            />
        </section>
    );
};
