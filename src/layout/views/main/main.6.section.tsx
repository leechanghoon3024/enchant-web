import { ScrollFadeBox } from '@components/motion/scroll.fade.box';
import { TestBlogData } from '../../../mock/data/blog.data';
import { BlogListCard } from '@components/cards/blog.list.card';
import { getUuid } from '@framework/utils/get.uuid';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { BlogPlainUrl } from '@framework/lib/page.url';

export const Main6Section = () => {
    const [data, setData] = useState([...TestBlogData.filter((v) => v.class === 1)]);
    const router = useRouter();
    return (
        <section className="section-blog">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xhuge">
                        <div className="blog-component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="blog-heading-wrapper">
                                    <div className="blog-heading">
                                        <div className="max-width-large">
                                            <div className="margin-bottom margin-xsmall">
                                                <ScrollFadeBox duration={0.2} className="tagline secondary">
                                                    Blog
                                                </ScrollFadeBox>
                                            </div>
                                            <ScrollFadeBox duration={0.2}>
                                                <h2 data-w-id="62338b25-af3a-1e84-6619-725a11ab2e37" className="text-color-white">
                                                    Our latest posts
                                                </h2>
                                            </ScrollFadeBox>
                                        </div>
                                    </div>
                                    <div className="blog-button-row">
                                        <a
                                            data-w-id="62338b25-af3a-1e84-6619-725a11ab2e3a"
                                            onClick={() => router.push(BlogPlainUrl)}
                                            className="button-secondary w-button"
                                        >
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <ScrollFadeBox duration={0.3} className="w-dyn-list">
                                <div role="list" className="blog-list w-dyn-items">
                                    {data.map((v) => (
                                        <BlogListCard item={v} key={getUuid()} />
                                    ))}
                                </div>
                            </ScrollFadeBox>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
