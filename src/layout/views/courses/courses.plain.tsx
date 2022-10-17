import { Main3Section } from '@layout/views/main/main.3.section';
import { ScrollFadeBox } from '@components/motion/scroll.fade.box';
import { CoursesItem } from '@components/cards/courses.item';
import { CoursesSecondaryItem } from '@components/cards/courses.secondary.item';
import { getUuid } from '@framework/utils/get.uuid';
import { useState } from 'react';
import { TestProductData } from '../../../mock/data/product.data';

export const CoursesPlain = () => {
    const [productList, setProductList] = useState([...TestProductData.filter((v) => v.class === 1)]);
    const [productList2, setProductList2] = useState([...TestProductData.filter((v) => v.class === 2)]);
    return (
        <div style={{ fontFamily: 'Dmsans, sans-serif' }}>
            <section className="section-about-header">
                <div className="page-padding">
                    <div className="padding-vertical padding-xhuge">
                        <div className="container-large">
                            <div className="about-header-component">
                                <div className="container-small margin-0">
                                    <div className="margin-bottom margin-xsmall">
                                        <div data-w-id="4b283ed3-f4ec-69c7-36b5-10c521763a29" className="tagline secondary">
                                            Courses
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <h1 data-w-id="4b283ed3-f4ec-69c7-36b5-10c521763a2c" className="heading-xlarge text-color-white">
                                            Our Courses
                                        </h1>
                                    </div>
                                    <p data-w-id="4b283ed3-f4ec-69c7-36b5-10c521763a2e" className="text-size-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="images/Graphic.svg"
                    loading="lazy"
                    data-w-id="fbbf2938-d7b8-443a-bb92-9dea5aacdbef"
                    alt=""
                    className="header-graphic"
                />
            </section>
            <section className="section-courses-courses">
                <div className="page-padding">
                    <div className="padding-bottom padding-xhuge">
                        <div className="container-large">
                            <div className="courses-courses-component">
                                <div>
                                    <div className="margin-bottom margin-medium">
                                        <h3 data-w-id="4a67ca00-665e-9c21-cb64-30b83d06d6ae" className="text-color-white">
                                            Webflow Development
                                        </h3>
                                    </div>
                                    <div data-w-id="83f9f737-a9b3-b757-488c-52dd4f64ca2d" className="w-dyn-list">
                                        <div role="list" className="home-courses-row w-dyn-items">
                                            {productList.map((v) => (
                                                <CoursesSecondaryItem item={v} key={getUuid()} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="margin-bottom margin-medium">
                                        <h3 data-w-id="2fc9467c-3066-1841-a2d0-9c907980fd95" className="text-color-white">
                                            Webflow Development
                                        </h3>
                                    </div>
                                    <div data-w-id="2fc9467c-3066-1841-a2d0-9c907980fd97" className="w-dyn-list">
                                        <div role="list" className="home-courses-row w-dyn-items">
                                            {productList2.map((v) => (
                                                <CoursesSecondaryItem item={v} key={getUuid()} />
                                            ))}
                                        </div>
                                        {/*<div className="w-dyn-empty">*/}
                                        {/*    <div>No items found.</div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
