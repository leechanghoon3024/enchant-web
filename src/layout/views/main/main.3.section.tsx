import { ScrollFadeBox } from '@components/motion/scroll.fade.box';
import { CoursesItem } from '@components/cards/courses.item';
import { useState } from 'react';
import { TestProductData } from '../../../mock/data/product.data';
import { getUuid } from '@framework/utils/get.uuid';

export const Main3Section = () => {
    const [productList, setProductList] = useState([...TestProductData.filter((v) => v.class === 1)]);
    return (
        <ScrollFadeBox disabled={true} duration={0.2} className="section-courses">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-bottom padding-xhuge">
                        <div className="home-courses-component">
                            <div className="margin-bottom margin-xlarge">
                                <div className="container-small">
                                    <div className="text-align-center">
                                        <div className="margin-bottom margin-xsmall">
                                            <ScrollFadeBox duration={0.3} className="tagline secondary">
                                                Trending
                                            </ScrollFadeBox>
                                        </div>
                                        <ScrollFadeBox duration={0.4} className="margin-bottom margin-small">
                                            <h2 data-w-id="f8eb08d4-b7f2-ea1f-cc6c-ecf49a53d0ba">The most popular courses</h2>
                                        </ScrollFadeBox>
                                        <ScrollFadeBox duration={0.5}>
                                            <p data-w-id="1afeb4c8-8d90-6b39-cc63-108905e9f432" className="text-size-medium">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                                elementum tristique. Duis cursus, mi quis viverra ornare.
                                            </p>
                                        </ScrollFadeBox>
                                    </div>
                                </div>
                            </div>
                            <ScrollFadeBox duration={0.6} data-w-id="e4c9d682-bb2f-5987-2675-bbed7c461b6e" className="w-dyn-list">
                                <div role="list" className="home-courses-row w-dyn-items">
                                    {productList.map((v) => (
                                        <CoursesItem item={v} key={getUuid()} />
                                    ))}
                                </div>
                            </ScrollFadeBox>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollFadeBox>
    );
};
