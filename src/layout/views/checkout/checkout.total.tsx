import { useCart } from '@store/cart/use.cart';
import { useMemo } from 'react';
import { FixedNumber } from '@framework/utils/util.number/fixed.number';

export const CheckoutTotal = () => {
    const { cartList } = useCart();
    const subTotal = useMemo(() => {
        return cartList.reduce((prev, current) => {
            const amount = Number(current?.amount) ?? 0;

            return prev + amount * current.qty;
        }, 0);
    }, [cartList]);
    return (
        <div className="w-commerce-commercecheckoutordersummarywrapper order-summary">
            <div className="checkout-card">
                <div className="w-commerce-commercecheckoutsummaryblockheader checkout-header">
                    <h3 className="checkout-card-heading">Order Summary</h3>
                </div>
                <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                    <div className="w-commerce-commercecheckoutsummarylineitem line-item">
                        <div className="form-label">Subtotal</div>
                        <div className="text-size-regular text-weight-semibold text-color-neutral-900">$ {FixedNumber(subTotal)}</div>
                    </div>
                    <script type="text/x-wf-template" id="wf-template-c8aabfa7-3cd0-ad3b-fa40-af618b382f5f">
                        %3Cdiv%20class%3D%22w-commerce-commercecheckoutordersummaryextraitemslistitem%20line-item%22%3E%3Cdiv%20class%3D%22form-label-2%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22text-size-regular%20text-weight-semibold%20text-color-neutral-900%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E
                    </script>
                    <div
                        className="w-commerce-commercecheckoutordersummaryextraitemslist"
                        data-wf-collection="database.commerceOrder.extraItems"
                        data-wf-template-id="wf-template-c8aabfa7-3cd0-ad3b-fa40-af618b382f5f"
                    >
                        <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem line-item">
                            <div className="form-label-2"></div>
                            <div className="text-size-regular text-weight-semibold text-color-neutral-900"></div>
                        </div>
                    </div>
                    <div className="w-commerce-commercecheckoutsummarylineitem line-item is-last">
                        <div className="form-label">Total</div>
                        <div className="w-commerce-commercecheckoutsummarytotal text-size-regular text-weight-semibold text-color-neutral-900">
                            $ {FixedNumber(subTotal)}
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
};
