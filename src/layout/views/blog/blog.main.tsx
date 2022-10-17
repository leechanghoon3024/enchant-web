import { SectionHeader } from '@components/section/section.header';
import { BlogItemCardBig } from '@components/cards/blog.item.card.big';
import { useState } from 'react';
import { TestBlogData } from '../../../mock/data/blog.data';
import { BlogItemCardRight } from '@components/cards/blog.item.card.right';
import { getUuid } from '@framework/utils/get.uuid';
import { BlogListCard } from '@components/cards/blog.list.card';
import { LetterComponent } from '@components/letter/letter.component';
import { ScrollFadeBox } from '@components/motion/scroll.fade.box';

export const BlogMain = () => {
    const [mainData, setMainData] = useState([...TestBlogData.filter((v) => v.class === 2)]);
    const [subData, setSubData] = useState([...TestBlogData.filter((v) => v.class === 1)]);
    return (
        <>
            <SectionHeader
                category={'Blog'}
                title={'Learn more about design industry'}
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
            <header id="blog-header-5" className="section-blog-blog">
                <ScrollFadeBox duration={0.3} className="page-padding">
                    <div className="container-large">
                        <div className="padding-bottom padding-xhuge">
                            <div className="padding-top padding-xxlarge">
                                <div className="blog-blog-component">
                                    <div className="margin-bottom margin-large">
                                        <h2 data-w-id="dea20af1-9b00-bec6-2257-288803f8e82b" className="heading-large">
                                            Featured blog
                                        </h2>
                                    </div>
                                    <div className="blog-featured-blog">
                                        <div data-w-id="dea20af1-9b00-bec6-2257-288803f8e82e" className="blog-main-post">
                                            <div className="blog-main-list-wrapper w-dyn-list">
                                                <div role="list" className="blog-main-list w-dyn-items">
                                                    {mainData[0] && <BlogItemCardBig item={mainData[0]} />}
                                                </div>
                                            </div>
                                        </div>
                                        <div data-w-id="dea20af1-9b00-bec6-2257-288803f8e845" className="blog-featured-posts">
                                            <div
                                                id="w-node-e93726a9-3037-32f0-c716-292d3ac8dc78-69841706"
                                                className="blog-featured-list-wrapper w-dyn-list"
                                            >
                                                <div role="list" className="blog-featured-list w-dyn-items">
                                                    {[...mainData.slice(1, 3), ...([subData[0]] ?? [])].map((v) => (
                                                        <BlogItemCardRight item={v} key={getUuid()} />
                                                    ))}
                                                </div>
                                                {/*<div className="error-message w-dyn-empty">*/}
                                                {/*    <div>No items found.</div>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-large">
                                        <h2 data-w-id="510c2e72-4cdf-e42a-c7ca-a36f7e03bb87" className="heading-small">
                                            Latest posts
                                        </h2>
                                    </div>
                                    <div
                                        data-w-id="7a4c1c32-a270-2617-77bd-a4e6d48bf993"
                                        className="blog-latest-blog-list-wrapper w-dyn-list"
                                    >
                                        <div role="list" className="blog-latest-blog-list w-dyn-items">
                                            {subData.map((v) => (
                                                <BlogListCard item={v} key={getUuid()} />
                                            ))}
                                        </div>
                                        {/*<div className="error-message w-dyn-empty">*/}
                                        {/*    <div>No items found.</div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollFadeBox>
            </header>
            <LetterComponent />
        </>
    );
};
