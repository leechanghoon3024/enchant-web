import { BlogDataInformationType } from '../../mock/data/blog.data';
import { useRouter } from 'next/router';
import { BlogPageUrl } from '@framework/lib/page.url';

interface IBlogListCard {
    item: BlogDataInformationType;
}
export const BlogListCard = ({ item }: IBlogListCard) => {
    const router = useRouter();
    return (
        <div role="listitem" className="blog-item w-dyn-item">
            <a onClick={() => router.push(BlogPageUrl(item.id))} className="blog-image-wrapper w-inline-block">
                <img src={item.thumbnailImage} loading="lazy" alt="" className="blog-image" />
            </a>
            <div className="blog-item-content">
                <div className="blog-item-content-top">
                    <a onClick={() => router.push(BlogPageUrl(item.id))} className="blog-meta-wrapper w-inline-block">
                        <div className="tagline blog">{item?.categoryName[0] ?? ''}</div>
                    </a>
                    <a onClick={() => router.push(BlogPageUrl(item.id))} className="blog-title-wrapper w-inline-block">
                        <h3 className="heading-small blog-link">{item.title}</h3>
                    </a>
                    <div className="text-color-neutral-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </div>
                </div>
                <div className="blog-button-wrapper">
                    <a onClick={() => router.push(BlogPageUrl(item.id))} className="button-link w-inline-block">
                        <div>Read more</div>
                        <div className="icon-xsmall">chevron_right</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
