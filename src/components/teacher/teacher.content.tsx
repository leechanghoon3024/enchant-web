import { TestBlogData, UserDataInformationType } from '../../mock/data/blog.data';
import { useState } from 'react';
import { BlogListCard } from '@components/cards/blog.list.card';
import { getUuid } from '@framework/utils/get.uuid';
import { ScrollFadeBox } from '@components/motion/scroll.fade.box';

interface ITeacherPage {
    teacher: UserDataInformationType;
}

export const TeacherContent = ({ teacher }: ITeacherPage) => {
    const [data, setData] = useState([...TestBlogData.filter((v) => v.class === 1)]);
    return (
        <section className="section-teacher-single">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-bottom padding-xxlarge">
                        <div className="blog-component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="blog-heading-wrapper">
                                    <div className="blog-heading">
                                        <div className="max-width-large">
                                            <div className="margin-bottom margin-xsmall">
                                                <ScrollFadeBox
                                                    duration={0.2}
                                                    data-w-id="9df176e7-7649-a240-bd5d-0a5e391ebb4c"
                                                    className="tagline secondary"
                                                >
                                                    Courses
                                                </ScrollFadeBox>
                                            </div>
                                            <h2 data-w-id="9df176e7-7649-a240-bd5d-0a5e391ebb4e" className="text-color-white">
                                                Author&#x27;s courses
                                            </h2>
                                        </div>
                                    </div>
                                    <ScrollFadeBox
                                        duration={0.3}
                                        data-w-id="9df176e7-7649-a240-bd5d-0a5e391ebb50"
                                        className="blog-button-row"
                                    >
                                        <a href="courses.html" className="button-secondary w-button">
                                            Explore courses
                                        </a>
                                    </ScrollFadeBox>
                                </div>
                            </div>
                            <ScrollFadeBox duration={0.5} data-w-id="864e8434-e01b-aa67-5fd6-b64b15f23d80" className="w-dyn-list">
                                <div role="list" className="home-courses-row w-dyn-items">
                                    {data.map((v) => (
                                        <BlogListCard item={v} key={getUuid()} />
                                    ))}
                                </div>
                                {/*<div className="w-dyn-empty">*/}
                                {/*    <div>No items found.</div>*/}
                                {/*</div>*/}
                            </ScrollFadeBox>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
