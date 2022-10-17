import { useCart } from '@store/cart/use.cart';
import { useMemo } from 'react';
import { FixedNumber } from '@framework/utils/util.number/fixed.number';

export const OrderForm = () => {
    const { cartList } = useCart();
    const subTotal = useMemo(() => {
        return cartList.reduce((prev, current) => {
            const amount = Number(current?.amount) ?? 0;

            return prev + amount * current.qty;
        }, 0);
    }, [cartList]);
    return (
        <>
            <section className="section-utility-header">
                <div className="page-padding">
                    <div className="padding-vertical padding-huge">
                        <div className="utility-header-content">
                            <div className="container-large">
                                <div className="max-width-large">
                                    <div className="margin-bottom margin-xxsmall">
                                        <h1 data-w-id="a66ef93b-e1f0-cf81-0873-c9905f1c59fa" className="text-color-white">
                                            Order confirmation
                                        </h1>
                                    </div>
                                    <p data-w-id="a66ef93b-e1f0-cf81-0873-c9905f1c59fc" className="text-size-medium">
                                        Please review your checkout details below. If everything is correct, place your order and you will
                                        receive more information via email.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="images/Graphic.svg"
                    loading="lazy"
                    data-w-id="a66ef93b-e1f0-cf81-0873-c9905f1c59fe"
                    alt=""
                    className="utility-graphic"
                />
            </section>
            <div
                data-node-type="commerce-order-confirmation-wrapper"
                data-wf-order-query=""
                data-wf-page-link-href-prefix=""
                className="w-commerce-commerceorderconfirmationcontainer section-checkout-form"
            >
                <div className="padding-bottom padding-xhuge">
                    <div className="container-large">
                        <div className="w-commerce-commercelayoutcontainer checkout-form-wrapper w-container">
                            <div data-w-id="625de1924068d20dad4e688500000000000c" className="w-commerce-commercelayoutmain checkout-form">
                                <div className="w-commerce-commercecheckoutcustomerinfosummarywrapper checkout-card">
                                    <div className="w-commerce-commercecheckoutsummaryblockheader checkout-header">
                                        <h4 className="checkout-card-heading">Customer Information</h4>
                                    </div>
                                    <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                        <div className="w-commerce-commercecheckoutrow">
                                            <div className="w-commerce-commercecheckoutcolumn">
                                                <div className="w-commerce-commercecheckoutsummaryitem">
                                                    <label className="w-commerce-commercecheckoutsummarylabel form-label">Email</label>
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div className="w-commerce-commercecheckoutcolumn">
                                                <div className="w-commerce-commercecheckoutsummaryitem">
                                                    <label className="w-commerce-commercecheckoutsummarylabel form-label">
                                                        Shipping Address
                                                    </label>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                                        <div className="w-commerce-commercecheckoutsummarytextspacingondiv"></div>
                                                        <div className="w-commerce-commercecheckoutsummarytextspacingondiv"></div>
                                                        <div className="w-commerce-commercecheckoutsummarytextspacingondiv"></div>
                                                    </div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="w-commerce-commercecheckoutshippingsummarywrapper checkout-card">
                                    <div className="w-commerce-commercecheckoutsummaryblockheader checkout-header">
                                        <h4 className="checkout-card-heading">Shipping Method</h4>
                                    </div>
                                    <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                        <div className="w-commerce-commercecheckoutrow">
                                            <div className="w-commerce-commercecheckoutcolumn">
                                                <div className="w-commerce-commercecheckoutsummaryitem">
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="w-commerce-commercecheckoutpaymentsummarywrapper checkout-card">
                                    <div className="w-commerce-commercecheckoutsummaryblockheader checkout-header">
                                        <h4 className="checkout-card-heading">Payment Info</h4>
                                    </div>
                                    <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                        <div className="w-commerce-commercecheckoutrow">
                                            <div className="w-commerce-commercecheckoutcolumn">
                                                <div className="w-commerce-commercecheckoutsummaryitem">
                                                    <label className="w-commerce-commercecheckoutsummarylabel form-label">
                                                        Payment Info
                                                    </label>
                                                    <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                                        <div className="w-commerce-commercecheckoutsummarytextspacingondiv"></div>
                                                        <div className="w-commerce-commercecheckoutsummarytextspacingondiv"></div>
                                                    </div>
                                                    <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                                        <div></div>
                                                        <div> /</div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-commerce-commercecheckoutcolumn">
                                                <div className="w-commerce-commercecheckoutsummaryitem">
                                                    <label className="w-commerce-commercecheckoutsummarylabel form-label">
                                                        Billing Address
                                                    </label>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                                        <div className="w-commerce-commercecheckoutsummarytextspacingondiv"></div>
                                                        <div className="w-commerce-commercecheckoutsummarytextspacingondiv"></div>
                                                        <div className="w-commerce-commercecheckoutsummarytextspacingondiv"></div>
                                                    </div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="w-commerce-commercecheckoutorderitemswrapper checkout-card">
                                    <div className="w-commerce-commercecheckoutsummaryblockheader checkout-header">
                                        <h4 className="checkout-card-heading">Items in Order</h4>
                                    </div>
                                    <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                        <script type="text/x-wf-template" id="wf-template-625de1924068d20dad4e6885000000000051"></script>
                                        <div
                                            role="list"
                                            className="w-commerce-commercecheckoutorderitemslist"
                                            data-wf-collection="database.commerceOrder.userItems"
                                            data-wf-template-id="wf-template-625de1924068d20dad4e6885000000000051"
                                        ></div>
                                    </fieldset>
                                </div>
                            </div>
                            <div
                                data-w-id="625de1924068d20dad4e6885000000000061"
                                className="w-commerce-commercelayoutsidebar checkout-summary"
                            >
                                <div className="w-commerce-commercecheckoutordersummarywrapper checkout-card">
                                    <div className="w-commerce-commercecheckoutsummaryblockheader checkout-header">
                                        <h4 className="checkout-card-heading">Order Summary</h4>
                                    </div>
                                    <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                        <div className="w-commerce-commercecheckoutsummarylineitem">
                                            <div>Subtotal</div>
                                            <div className="text-weight-semibold">$ {FixedNumber(subTotal)}</div>
                                        </div>
                                        <script type="text/x-wf-template" id="wf-template-625de1924068d20dad4e688500000000006b">
                                            %3Cdiv%20class%3D%22w-commerce-commercecheckoutordersummaryextraitemslistitem%22%3E%3Cdiv%3E%3C%2Fdiv%3E%3Cdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E
                                        </script>
                                        <div
                                            className="w-commerce-commercecheckoutordersummaryextraitemslist"
                                            data-wf-collection="database.commerceOrder.extraItems"
                                            data-wf-template-id="wf-template-625de1924068d20dad4e688500000000006b"
                                        >
                                            <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="w-commerce-commercecheckoutsummarylineitem">
                                            <div>Total</div>
                                            <div className="w-commerce-commercecheckoutsummarytotal text-weight-semibold">
                                                $ {FixedNumber(subTotal)}
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
