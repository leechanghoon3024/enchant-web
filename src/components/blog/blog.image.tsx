import { ScrollFadeBox } from '@components/motion/scroll.fade.box';
import { BlogDataInformationType } from '../../mock/data/blog.data';
interface IBlogImage {
    item: BlogDataInformationType;
}

export const BlogImage = ({ item }: IBlogImage) => {
    return (
        <section className="section-blogpost-image">
            <div className="page-padding">
                <div className="blogpost-imaga-background"></div>

                <ScrollFadeBox duration={0.4} className="container-large">
                    <div data-w-id="f01b12cf-b68a-6cac-cd1d-8aae297be372" className="blogpost-image-wrapper">
                        <img src={item.thumbnailImage} loading="lazy" alt="" className="blogpost-image" />
                    </div>
                </ScrollFadeBox>
            </div>
        </section>
    );
};
