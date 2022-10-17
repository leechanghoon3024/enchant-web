import { StarContent } from '@components/review/star.content';
import { ReactElement } from 'react';
import { CardInformationType } from '../../mock/data/product.data';
import { useCart } from '@store/cart/use.cart';
interface IProductSideReviewProps {
    product: CardInformationType;
}
export const ProductSideReview = ({ product }: IProductSideReviewProps) => {
    return (
        <div className="product-reviews-row">
            <div className="home-header-avatars-wrapper">
                <div className="product-avatar-wrapper is-first">
                    <img
                        src="https://uploads-ssl.webflow.com/630f08ddd8cd850d3a841700/630f08ddd8cd85964c84177c_Zahir%20Mays.jpg"
                        loading="lazy"
                        sizes="29px"
                        alt=""
                        className="home-header-avatar"
                    />
                </div>
                <div className="product-avatar-wrapper z-index-4">
                    <img
                        src="https://uploads-ssl.webflow.com/630f08ddd8cd850d3a841700/630f08ddd8cd8570b1841767_Rosalee%20Melvin.jpg"
                        loading="lazy"
                        sizes="29px"
                        alt=""
                        className="home-header-avatar"
                    />
                </div>
                <div className="product-avatar-wrapper z-index-3">
                    <img
                        src="https://uploads-ssl.webflow.com/630f08ddd8cd850d3a841700/630f08ddd8cd8527ab84176b_Kelly%20Williams.jpg"
                        loading="lazy"
                        sizes="29px"
                        alt=""
                        className="home-header-avatar"
                    />
                </div>
                <div className="product-avatar-wrapper z-index-2">
                    <img
                        src="https://uploads-ssl.webflow.com/630f08ddd8cd850d3a841700/630f08ddd8cd85ed66841769_Orlando%20Diggs.jpg"
                        loading="lazy"
                        sizes="29px"
                        alt=""
                        className="home-header-avatar"
                    />
                </div>
                <div className="product-avatar-wrapper z-index-1">
                    <img
                        src="https://uploads-ssl.webflow.com/630f08ddd8cd850d3a841700/630f08ddd8cd857b78841774_Katherine%20Moss.jpg"
                        loading="lazy"
                        sizes="29px"
                        alt=""
                        className="home-header-avatar"
                    />
                </div>
            </div>
            <div className="home-header-reviews-content">
                <StarContent star={5} />
                <div className="product-reviews-number">
                    <div className="text-size-small text-weight-medium">From</div>
                    <div className="text-size-small text-weight-medium">{product.review}</div>
                    <div className="text-size-small text-weight-medium">reviews</div>
                </div>
            </div>
        </div>
    );
};
