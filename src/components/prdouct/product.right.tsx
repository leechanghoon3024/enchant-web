import { ReactElement } from 'react';
import { CardInformationType } from '../../mock/data/product.data';
import { ProductSideReview } from '@components/prdouct/product.side.review';
import { UpperFirstString } from '@framework/utils/util.string/upper.first';
import { useCart } from '@store/cart/use.cart';

interface IProductLayoutProps {
    children?: ReactElement | ReactElement[];
    product: CardInformationType;
}

export const ProductRightLayout = ({ children, product }: IProductLayoutProps) => {
    const { addCart } = useCart(true);
    return (
        <div
            id="w-node-_047eff48-f9dd-6d24-b784-0e13331f1c91-dc841712"
            data-w-id="047eff48-f9dd-6d24-b784-0e13331f1c91"
            className="product-column-right"
        >
            <div className="product-card-component">
                <div className="margin-bottom margin-large">
                    <div className="max-width-xlarge">
                        <div className="product-card">
                            <div className="heading-small">Get the course</div>
                            <div className="product-card-price">
                                <div className="heading-medium"> ${product.amount} USD</div>
                                <ProductSideReview product={product} />
                            </div>
                            <div>
                                <form data-node-type="commerce-add-to-cart-form" className="w-commerce-commerceaddtocartform margin-0">
                                    <input
                                        onClick={() => addCart(product)}
                                        type="button"
                                        data-node-type="commerce-add-to-cart-button"
                                        data-loading-text="Adding to cart..."
                                        value="Add to Cart"
                                        aria-busy="false"
                                        aria-haspopup="dialog"
                                        className="w-commerce-commerceaddtocartbutton button max-width-full"
                                    />
                                    <a
                                        data-node-type="commerce-buy-now-button"
                                        data-default-text="Buy now"
                                        data-subscription-text="Subscribe now"
                                        aria-busy="false"
                                        aria-haspopup="false"
                                        style={{ display: 'none' }}
                                        className="w-commerce-commercebuynowbutton"
                                        href="checkout.html"
                                    >
                                        Buy now
                                    </a>
                                </form>
                                <div tabIndex={0} style={{ display: 'none' }} className="w-commerce-commerceaddtocartoutofstock">
                                    <div>This product is out of stock.</div>
                                </div>
                                <div
                                    aria-live="assertive"
                                    data-node-type="commerce-add-to-cart-error"
                                    style={{ display: 'none' }}
                                    className="w-commerce-commerceaddtocarterror"
                                >
                                    <div
                                        data-node-type="commerce-add-to-cart-error"
                                        data-w-add-to-cart-quantity-error="Product is not available in this quantity."
                                        data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                                        data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
                                        data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
                                        data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                                        data-w-add-to-cart-select-all-options-error="Please select an option in each set."
                                    >
                                        Product is not available in this quantity.
                                    </div>
                                </div>
                            </div>
                            <div className="product-card-divider"></div>
                            <div className="product-info">
                                <div className="product-info-item">
                                    <div className="product-icon-wrapper">
                                        <div className="product-icon">leaderboard</div>
                                    </div>
                                    <div className="product-info-wrapper">
                                        <div>Level:</div>
                                        <div>{UpperFirstString(product.level)}</div>
                                    </div>
                                </div>
                                <div className="product-info-item">
                                    <div className="product-icon-wrapper">
                                        <div className="product-icon">timer</div>
                                    </div>
                                    <div className="product-info-wrapper">
                                        <div>Duration:</div>
                                        <div>{product.allDuration}</div>
                                    </div>
                                </div>
                                <div className="product-info-item">
                                    <div className="product-icon-wrapper">
                                        <div className="product-icon">videocam</div>
                                    </div>
                                    <div className="product-info-wrapper">
                                        <div>Videos:</div>
                                        <div>{product.videoAmount}</div>
                                    </div>
                                </div>
                                <div className="product-info-item">
                                    <div className="product-icon-wrapper">
                                        <div className="product-icon">local_police</div>
                                    </div>
                                    <div className="product-info-wrapper">
                                        <div>{product.type}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
