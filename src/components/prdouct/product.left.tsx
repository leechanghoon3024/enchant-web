import React, { ReactElement } from 'react';
import { CardInformationType, TestDataAccordion } from '../../mock/data/product.data';
import { useRouter } from 'next/router';
import { CoursesPlainUrl } from '@framework/lib/page.url';
import { ProductBreadcrumb } from '@components/prdouct/product.breadcrumb';
import { useDrawer } from '@store/drawer/use.drawer';
import { FullScreenModal } from '@components/modals/fullscreen.modal';
import { IframeWrapper, VideoWrapper } from '@styles/styled/wrapper.styled';
import { ProductColumn } from '@components/prdouct/product.column';
import { AccordionList } from '@components/accordion/accordion.list';

interface IProductLayoutProps {
    children?: ReactElement | ReactElement[];
    product: CardInformationType;
}
export const ProductLeftLayout = ({ children, product }: IProductLayoutProps) => {
    const router = useRouter();
    const videoModule = useDrawer(product.id);
    return (
        <>
            <div
                id="w-node-f50180d7-2c35-5156-e2c2-478426efa5c9-dc841712"
                data-w-id="f50180d7-2c35-5156-e2c2-478426efa5c9"
                className="product-column-left"
            >
                <div className="margin-bottom margin-large">
                    <div className="max-width-xlarge">
                        <ProductBreadcrumb category={product.categoryName ?? []} />
                        <div className="product-title-wrapper">
                            <h1 className="heading-large text-color-white">{product.title}</h1>
                            <div>{product.content}</div>
                        </div>
                    </div>
                </div>
                <div className="margin-bottom margin-large">
                    <a onClick={() => videoModule.onOpen()} className="product-lightbox-link w-inline-block w-lightbox">
                        <div className="video-wrapper">
                            <img src={product.thumbnailImage} loading="lazy" alt="" className="video" />
                            <div className="video-button">play_circle_filled</div>
                        </div>
                    </a>
                </div>
                <div className="margin-bottom margin-large">
                    <div className="product-learn-summary">
                        <div className="text-size-medium text-weight-semibold">What will you learn</div>
                        <ProductColumn column={product.learn ?? []} />
                    </div>
                </div>
                <div className="margin-bottom margin-large">
                    <article className="product-rich-text w-richtext">
                        <h4>About the course</h4>
                        <p>
                            Et qui et quae et maxime assumenda. Suscipit voluptatum in fugiat. A sapiente eveniet doloremque asperiores
                            numquam voluptatem. Beatae illo commodi. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <h4>Course content</h4>
                        <p>
                            Et qui et quae et maxime assumenda. Suscipit voluptatum in fugiat. A sapiente eveniet doloremque asperiores
                            numquam voluptatem. Beatae illo commodi. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <ol role="list">
                            <li>Suspendisse feugiat lorem</li>
                            <li>Donec quis semper</li>
                            <li>Aenean suscipit dolor</li>
                            <li>Duis vitae ex at dui</li>
                        </ol>
                        <h4>More information</h4>
                        <p>
                            Et qui et quae et maxime assumenda. Suscipit voluptatum in fugiat. A sapiente eveniet doloremque asperiores
                            numquam voluptatem. Beatae illo commodi. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </article>
                </div>
                <div className="margin-bottom margin-medium">
                    <div className="heading-small text-color-white">Frequently asked questions</div>
                </div>
                {/*<div className="product-faq-component">*/}
                {/*    <div className="product-faq-accordion">*/}
                {/*        <div data-w-id="20521e02-51dd-a907-9fd1-51e495e52920" className="product-faq-question">*/}
                {/*            <div className="text-size-medium text-weight-bold">*/}
                {/*                Is online education as effective as face-to-face instruction?*/}
                {/*            </div>*/}
                {/*            <div className="icon-xsmall">keyboard_arrow_down</div>*/}
                {/*        </div>*/}
                {/*        <div style={{ width: '100%', height: '0px' }} className="product-faq-answer">*/}
                {/*            <div className="margin-bottom margin-small">*/}
                {/*                <div className="max-width-xlarge">*/}
                {/*                    <p>*/}
                {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum*/}
                {/*                        tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero*/}
                {/*                        vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus*/}
                {/*                        tristique posuere.*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="product-faq-accordion">*/}
                {/*        <div data-w-id="91a59ac9-2d26-fbfd-4f66-b5e3362c0611" className="product-faq-question">*/}
                {/*            <div className="text-size-medium text-weight-bold">How do I know if online education is right for me?</div>*/}
                {/*            <div className="icon-xsmall">keyboard_arrow_down</div>*/}
                {/*        </div>*/}
                {/*        <div style={{ width: '100%', height: '0px' }} className="product-faq-answer">*/}
                {/*            <div className="margin-bottom margin-small">*/}
                {/*                <div className="max-width-xlarge">*/}
                {/*                    <p>*/}
                {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum*/}
                {/*                        tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero*/}
                {/*                        vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus*/}
                {/*                        tristique posuere.*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="product-faq-accordion">*/}
                {/*        <div data-w-id="ff8f3347-6ab8-0936-167f-a2264e0ad6ce" className="product-faq-question">*/}
                {/*            <div className="text-size-medium text-weight-bold">How do I know if an online degree program is credible?</div>*/}
                {/*            <div className="icon-xsmall">keyboard_arrow_down</div>*/}
                {/*        </div>*/}
                {/*        <div style={{ width: '100%', height: '0px' }} className="product-faq-answer">*/}
                {/*            <div className="margin-bottom margin-small">*/}
                {/*                <div className="max-width-xlarge">*/}
                {/*                    <p>*/}
                {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum*/}
                {/*                        tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero*/}
                {/*                        vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus*/}
                {/*                        tristique posuere.*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="product-faq-accordion">*/}
                {/*        <div data-w-id="368df157-3f8c-5648-f8a2-700d5d71d07d" className="product-faq-question">*/}
                {/*            <div className="text-size-medium text-weight-bold">What technical skills do online students need?</div>*/}
                {/*            <div className="icon-xsmall">keyboard_arrow_down</div>*/}
                {/*        </div>*/}
                {/*        <div style={{ width: '100%', height: '0px' }} className="product-faq-answer">*/}
                {/*            <div className="margin-bottom margin-small">*/}
                {/*                <div className="max-width-xlarge">*/}
                {/*                    <p>*/}
                {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum*/}
                {/*                        tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero*/}
                {/*                        vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus*/}
                {/*                        tristique posuere.*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="product-faq-accordion is-last">*/}
                {/*        <div data-w-id="67b3661f-b169-43a5-3e3c-bf8e6d7b6035" className="product-faq-question">*/}
                {/*            <div className="text-size-medium text-weight-bold">*/}
                {/*                Do online schools offer the same student support as traditional colleges?*/}
                {/*            </div>*/}
                {/*            <div className="icon-xsmall">keyboard_arrow_down</div>*/}
                {/*        </div>*/}
                {/*        <div style={{ width: '100%', height: '0px' }} className="product-faq-answer">*/}
                {/*            <div className="margin-bottom margin-small">*/}
                {/*                <div className="max-width-xlarge">*/}
                {/*                    <p>*/}
                {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum*/}
                {/*                        tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero*/}
                {/*                        vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus*/}
                {/*                        tristique posuere.*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <AccordionList item={TestDataAccordion} />
            </div>
            <FullScreenModal useBlurBackdrop={true} open={videoModule.open} onClose={videoModule.onClose}>
                <VideoWrapper>
                    <IframeWrapper
                        width="100%"
                        height="100%"
                        src={product.thumbnailUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </VideoWrapper>
            </FullScreenModal>
        </>
    );
};
