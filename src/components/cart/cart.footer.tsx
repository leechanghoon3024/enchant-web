import React, { useMemo } from 'react';
import { useCart } from '@store/cart/use.cart';
import { FixedNumber } from '@framework/utils/util.number/fixed.number';
import { useRouter } from 'next/router';
import { CheckoutPageUrl } from '@framework/lib/page.url';
import { getUuid } from '@framework/utils/get.uuid';
import { useDrawer } from '@store/drawer/use.drawer';

export const CartFooter = () => {
    const { cartList } = useCart();
    const cartModal = useDrawer('cart');
    const subTotal = useMemo(() => {
        return cartList.reduce((prev, current) => {
            const amount = Number(current?.amount) ?? 0;

            return prev + amount * current.qty;
        }, 0);
    }, [cartList]);
    const router = useRouter();
    const handleMoveCheckoutPage = () => {
        if (subTotal <= 0) {
            return;
        }
        router.push(CheckoutPageUrl(getUuid()));
        cartModal.onClose();
    };
    return (
        <>
            {subTotal > 0 && (
                <div className="w-commerce-commercecartfooter cart-footer">
                    <div className="w-commerce-commercecartlineitem cart-line-item">
                        <div className="text-size-medium">Subtotal</div>
                        <div className="w-commerce-commercecartordervalue text-size-medium text-weight-semibold">
                            $ {FixedNumber(subTotal)}
                        </div>
                    </div>
                    <div>
                        <div data-node-type="commerce-cart-quick-checkout-actions">
                            {/*<div className="margin-bottom margin-xxsmall">*/}
                            {/*    <a*/}
                            {/*        role="button"*/}
                            {/*        aria-label="Apple Pay"*/}
                            {/*        aria-haspopup="dialog"*/}
                            {/*        data-node-type="commerce-cart-apple-pay-button"*/}
                            {/*        // style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat"*/}
                            {/*        className="w-commerce-commercecartapplepaybutton apple-pay"*/}
                            {/*    >*/}
                            {/*        <div></div>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                            {/*<a*/}
                            {/*    role="button"*/}
                            {/*    aria-haspopup="dialog"*/}
                            {/*    data-node-type="commerce-cart-quick-checkout-button"*/}
                            {/*    className="w-commerce-commercecartquickcheckoutbutton"*/}
                            {/*>*/}
                            {/*    <svg*/}
                            {/*        className="w-commerce-commercequickcheckoutgoogleicon"*/}
                            {/*        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*        xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                            {/*        width="16"*/}
                            {/*        height="16"*/}
                            {/*        viewBox="0 0 16 16"*/}
                            {/*    >*/}
                            {/*        <defs>*/}
                            {/*            <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649" />*/}
                            {/*            <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443" />*/}
                            {/*        </defs>*/}
                            {/*        <g fill="none" fillRule="evenodd">*/}
                            {/*            <path*/}
                            {/*                fill="#4285F4"*/}
                            {/*                d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"*/}
                            {/*            />*/}
                            {/*            <path*/}
                            {/*                fill="#34A853"*/}
                            {/*                d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"*/}
                            {/*            />*/}
                            {/*            <g transform="translate(0 4)">*/}
                            {/*                <mask id="google-mark-b" fill="#fff">*/}
                            {/*                    <use xlinkHref="#google-mark-a" />*/}
                            {/*                </mask>*/}
                            {/*                <path*/}
                            {/*                    fill="#FBBC04"*/}
                            {/*                    d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"*/}
                            {/*                    mask="url(#google-mark-b)"*/}
                            {/*                />*/}
                            {/*            </g>*/}
                            {/*            <mask id="google-mark-d" fill="#fff">*/}
                            {/*                <use xlinkHref="#google-mark-c" />*/}
                            {/*            </mask>*/}
                            {/*            <path*/}
                            {/*                fill="#EA4335"*/}
                            {/*                d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"*/}
                            {/*                mask="url(#google-mark-d)"*/}
                            {/*            />*/}
                            {/*        </g>*/}
                            {/*    </svg>*/}
                            {/*    <svg*/}
                            {/*        className="w-commerce-commercequickcheckoutmicrosofticon"*/}
                            {/*        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*        width="16"*/}
                            {/*        height="16"*/}
                            {/*        viewBox="0 0 16 16"*/}
                            {/*    >*/}
                            {/*        <g fill="none" fillRule="evenodd">*/}
                            {/*            <polygon fill="#F05022" points="7 7 1 7 1 1 7 1" />*/}
                            {/*            <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" />*/}
                            {/*            <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" />*/}
                            {/*            <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" />*/}
                            {/*        </g>*/}
                            {/*    </svg>*/}
                            {/*    <div>Pay with browser.</div>*/}
                            {/*</a>*/}
                        </div>
                        <a
                            onClick={() => handleMoveCheckoutPage()}
                            data-node-type="cart-checkout-button"
                            className="w-commerce-commercecartcheckoutbutton button"
                            data-loading-text="Hang Tight..."
                        >
                            Continue to Checkout
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};
