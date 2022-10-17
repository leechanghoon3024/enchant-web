import { BlogDataInformationType } from '../../mock/data/blog.data';
import { useRouter } from 'next/router';
import { BlogPageUrl } from '@framework/lib/page.url';

interface IBlogItemCardBig {
    item: BlogDataInformationType;
}
export const BlogItemCardBig = ({ item }: IBlogItemCardBig) => {
    const router = useRouter();
    return (
        <div role="listitem" className="blog-blog-item w-dyn-item">
            <a onClick={() => router.push(BlogPageUrl(item.id))} className="blog-image-link w-inline-block">
                <div className="blog-blog-image-wrapper">
                    <img src={item.thumbnailImage} loading="lazy" alt="" className="blog-blog-image" />
                </div>
            </a>
            <a onClick={() => router.push(BlogPageUrl(item.id))} className="blog-meta-wrapper w-inline-block">
                <div className="tagline blog">{item.categoryName[0] ?? ''}</div>
            </a>
            <a onClick={() => router.push(BlogPageUrl(item.id))} className="blog-title-link w-inline-block">
                <h3 className="heading-medium heading-link-hover">{item.title}</h3>
            </a>
            <div></div>
            <div className="blog-blog-button-wrapper">
                <a onClick={() => router.push(BlogPageUrl(item.id))} className="button-link w-inline-block">
                    <div>Read more</div>
                    <div className="icon-xsmall">chevron_right</div>
                </a>
            </div>
        </div>
    );
};
