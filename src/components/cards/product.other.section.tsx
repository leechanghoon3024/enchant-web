import { useState } from 'react';
import { CardInformationType, TestProductData } from '../../mock/data/product.data';
import { CoursesItem } from '@components/cards/courses.item';
import { getUuid } from '@framework/utils/get.uuid';
import { CoursesSecondaryItem } from '@components/cards/courses.secondary.item';

interface IProductOtherSection {
    product: CardInformationType;
}
export const ProductOtherSection = ({ product }: IProductOtherSection) => {
    const [list, setList] = useState([...TestProductData.filter((v) => v.class === product.class)]);
    return (
        <section className="section-other-courses">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-bottom padding-xxlarge">
                        <div className="margin-bottom margin-xlarge">
                            <div className="blog-heading-wrapper">
                                <div className="blog-heading">
                                    <div className="max-width-large">
                                        <div className="margin-bottom margin-xsmall">
                                            <div data-w-id="a3a748cc-f2ee-6d03-b2a9-205f5987f615" className="tagline secondary">
                                                Courses
                                            </div>
                                        </div>
                                        <h2 data-w-id="a3a748cc-f2ee-6d03-b2a9-205f5987f617" className="text-color-white">
                                            Other courses
                                        </h2>
                                    </div>
                                </div>
                                <div className="blog-button-row">
                                    <a
                                        data-w-id="a3a748cc-f2ee-6d03-b2a9-205f5987f61a"
                                        href="courses.html"
                                        className="button-secondary w-button"
                                    >
                                        Explore courses
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-w-id="cd5a0519-4c7d-a1f4-4251-80cb20538080" className="w-dyn-list">
                            <div role="list" className="home-courses-row w-dyn-items">
                                {list.map((v) => (
                                    <CoursesSecondaryItem item={v} key={getUuid()} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
