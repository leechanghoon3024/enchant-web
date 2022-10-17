import { BlogDataInformationType } from '../../mock/data/blog.data';
import { BlogPageUrl } from '@framework/lib/page.url';
import { useRouter } from 'next/router';

interface IBlogItemCardBig {
    item: BlogDataInformationType;
}
export const BlogItemCardRight = ({ item }: IBlogItemCardBig) => {
    const router = useRouter();
    return (
        <div role="listitem" className="blog-featured-item w-dyn-item">
            <a onClick={() => router.push(BlogPageUrl(item.id))} className="blog-featured-image-link w-inline-block">
                <div className="blog-featured-image-wrapper">
                    <img src={item.thumbnailImage} loading="lazy" alt="" className="blog-blog-image" />
                </div>
            </a>
            <div className="blog-featured-item-content">
                <div>
                    <a onClick={() => router.push(BlogPageUrl(item.id))} className="blog-meta-wrapper w-inline-block">
                        <div className="tagline blog">{item.categoryName[0] ?? ''}</div>
                    </a>
                    <a onClick={() => router.push(BlogPageUrl(item.id))} className="blog-featured-title-link w-inline-block">
                        <h3 className="heading-small heading-link-hover">{item.title}</h3>
                    </a>
                    <div></div>
                </div>
                <div className="blog-featured-button-wrapper">
                    <a onClick={() => router.push(BlogPageUrl(item.id))} className="button-link w-inline-block">
                        <div>Read more</div>
                        <div className="icon-xsmall">chevron_right</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
