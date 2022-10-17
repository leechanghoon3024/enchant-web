import { SectionHeader } from '@components/section/section.header';
import { SelectCountry } from '@components/select/select.country';
import { CheckoutTotal } from '@layout/views/checkout/checkout.total';
import { OrderPageUrl } from '@framework/lib/page.url';
import { getUuid } from '@framework/utils/get.uuid';
import { useRouter } from 'next/router';

export const CheckoutForm = () => {
    const router = useRouter();
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
                                            Checkout
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
                data-node-type="commerce-checkout-form-container"
                data-wf-checkout-query=""
                data-wf-page-link-href-prefix=""
                className="w-commerce-commercecheckoutformcontainer section-checkout-form"
            >
                <div className="w-commerce-commercelayoutcontainer container-large w-container">
                    <div data-w-id="c8aabfa7-3cd0-ad3b-fa40-af618b382ebc" className="w-commerce-commercelayoutmain customer-info">
                        <form
                            data-node-type="commerce-checkout-customer-info-wrapper"
                            className="w-commerce-commercecheckoutcustomerinfowrapper checkout-card"
                        >
                            <div className="w-commerce-commercecheckoutblockheader checkout-header">
                                <h3 className="checkout-card-heading">Customer Info</h3>
                                <div className="checkout-required">
                                    <div className="text-size-regular">* Required</div>
                                </div>
                            </div>
                            <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                <label className="w-commerce-commercecheckoutlabel form-label">Email *</label>
                                <input
                                    type="text"
                                    className="w-commerce-commercecheckoutemailinput form-input is-last"
                                    name="email"
                                    required
                                />
                            </fieldset>
                        </form>
                        <form
                            data-node-type="commerce-checkout-shipping-address-wrapper"
                            className="w-commerce-commercecheckoutshippingaddresswrapper checkout-card"
                        >
                            <div className="w-commerce-commercecheckoutblockheader checkout-header">
                                <h3 className="checkout-card-heading">Shipping Address</h3>
                                <div className="checkout-required">
                                    <div className="text-size-regular">* Required</div>
                                </div>
                            </div>
                            <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                <div className="margin-bottom margin-medium">
                                    <label className="w-commerce-commercecheckoutlabel form-label">Full Name *</label>
                                    <input
                                        type="text"
                                        className="w-commerce-commercecheckoutshippingfullname form-input"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <label className="w-commerce-commercecheckoutlabel form-label">Street Address *</label>
                                    <div className="margin-bottom margin-small">
                                        <input
                                            type="text"
                                            className="w-commerce-commercecheckoutshippingstreetaddress form-input"
                                            name="address_line1"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-commerce-commercecheckoutshippingstreetaddressoptional form-input"
                                        name="address_line2"
                                    />
                                </div>
                                <div className="w-commerce-commercecheckoutrow margin-bottom margin-medium">
                                    <div className="w-commerce-commercecheckoutcolumn column is-left">
                                        <label className="w-commerce-commercecheckoutlabel form-label">City *</label>
                                        <input
                                            type="text"
                                            className="w-commerce-commercecheckoutshippingcity form-input"
                                            name="address_city"
                                            required
                                        />
                                    </div>
                                    <div className="w-commerce-commercecheckoutcolumn column is-centered">
                                        <label className="w-commerce-commercecheckoutlabel form-label">State/Province</label>
                                        <input
                                            type="text"
                                            className="w-commerce-commercecheckoutshippingstateprovince form-input"
                                            name="address_state"
                                        />
                                    </div>
                                    <div className="w-commerce-commercecheckoutcolumn column is-right">
                                        <label className="w-commerce-commercecheckoutlabel form-label">Zip/Postal Code *</label>
                                        <input
                                            type="text"
                                            data-node-type="commerce-checkout-shipping-zip-field"
                                            className="w-commerce-commercecheckoutshippingzippostalcode form-input"
                                            name="address_zip"
                                            required
                                        />
                                    </div>
                                </div>
                                <SelectCountry title={'Select Country'} />
                            </fieldset>
                        </form>
                        {/*<form*/}
                        {/*    data-node-type="commerce-checkout-shipping-methods-wrapper"*/}
                        {/*    className="w-commerce-commercecheckoutshippingmethodswrapper checkout-card"*/}
                        {/*>*/}
                        {/*    <div className="w-commerce-commercecheckoutblockheader checkout-header">*/}
                        {/*        <h3 className="checkout-card-heading">Shipping Method</h3>*/}
                        {/*    </div>*/}
                        {/*    <fieldset className="checkout-content">*/}
                        {/*        <script type="text/x-wf-template" id="wf-template-c8aabfa7-3cd0-ad3b-fa40-af618b382ef9">*/}
                        {/*            %3Clabel%20class%3D%22w-commerce-commercecheckoutshippingmethoditem%20shipping-method-2%22%3E%3Cinput%20type%3D%22radio%22%20required%3D%22%22%20name%3D%22shipping-method-choice%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecheckoutshippingmethoddescriptionblock%22%3E%3Cdiv%20class%3D%22w-commerce-commerceboldtextblock%20field-label%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22text-size-regular%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22text-size-regular%20text-weight-semibold%20text-color-neutral-900%22%3E%3C%2Fdiv%3E%3C%2Flabel%3E*/}
                        {/*        </script>*/}
                        {/*        <div*/}
                        {/*            data-node-type="commerce-checkout-shipping-methods-list"*/}
                        {/*            className="w-commerce-commercecheckoutshippingmethodslist shipping-method-list-2"*/}
                        {/*            data-wf-collection="database.commerceOrder.availableShippingMethods"*/}
                        {/*            data-wf-template-id="wf-template-c8aabfa7-3cd0-ad3b-fa40-af618b382ef9"*/}
                        {/*        >*/}
                        {/*            <label className="w-commerce-commercecheckoutshippingmethoditem shipping-method-2">*/}
                        {/*                <input type="radio" required name="shipping-method-choice" />*/}
                        {/*                <div className="w-commerce-commercecheckoutshippingmethoddescriptionblock">*/}
                        {/*                    <div className="w-commerce-commerceboldtextblock field-label"></div>*/}
                        {/*                    <div className="text-size-regular"></div>*/}
                        {/*                </div>*/}
                        {/*                <div className="text-size-regular text-weight-semibold text-color-neutral-900"></div>*/}
                        {/*            </label>*/}
                        {/*        </div>*/}
                        {/*        <div*/}
                        {/*            data-node-type="commerce-checkout-shipping-methods-empty-state"*/}
                        {/*            className="w-commerce-commercecheckoutshippingmethodsemptystate"*/}
                        {/*        >*/}
                        {/*            <div>No shipping methods are available for the address given.</div>*/}
                        {/*        </div>*/}
                        {/*    </fieldset>*/}
                        {/*</form>*/}
                        <div className="w-commerce-commercecheckoutpaymentinfowrapper checkout-card">
                            <div className="w-commerce-commercecheckoutblockheader checkout-header">
                                <h3 className="checkout-card-heading">Payment Info</h3>
                                <div className="checkout-required">
                                    <div className="text-size-regular">* Required</div>
                                </div>
                            </div>
                            <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                <div className="margin-bottom margin-medium">
                                    <label className="w-commerce-commercecheckoutlabel form-label">Card Number *</label>
                                    <div
                                        data-wf-stripe-element-type="cardNumber"
                                        data-wf-style-map="{}"
                                        className="w-commerce-commercecheckoutcardnumber form-input"
                                    >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="w-commerce-commercecheckoutrow margin-bottom margin-medium">
                                    <div className="w-commerce-commercecheckoutcolumn column is-left">
                                        <label className="w-commerce-commercecheckoutlabel form-label">Expiration Date *</label>
                                        <div
                                            data-wf-stripe-element-type="cardExpiry"
                                            data-wf-style-map="{}"
                                            className="w-commerce-commercecheckoutcardexpirationdate form-input"
                                        >
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="w-commerce-commercecheckoutcolumn column is-right">
                                        <label className="w-commerce-commercecheckoutlabel form-label">Security Code *</label>
                                        <div
                                            data-wf-stripe-element-type="cardCvc"
                                            data-wf-style-map="{}"
                                            className="w-commerce-commercecheckoutcardsecuritycode form-input"
                                        >
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-commerce-commercecheckoutbillingaddresstogglewrapper form-checkbox">
                                    <input
                                        type="checkbox"
                                        id="billing-address-toggle"
                                        data-node-type="commerce-checkout-billing-address-toggle-checkbox"
                                        className="w-commerce-commercecheckoutbillingaddresstogglecheckbox form-checkbox-icon"
                                        checked
                                    />
                                    <label
                                        htmlFor="billing-address-toggle"
                                        className="w-commerce-commercecheckoutbillingaddresstogglelabel form-checkbox-label no-margin-bottom"
                                    >
                                        Billing address same as shipping
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                        <form
                            data-node-type="commerce-checkout-billing-address-wrapper"
                            className="w-commerce-commercecheckoutbillingaddresswrapper checkout-card"
                        >
                            <div className="w-commerce-commercecheckoutblockheader checkout-header">
                                <h3 className="checkout-card-heading">Billing Address</h3>
                                <div className="checkout-required">
                                    <div className="text-size-regular">* Required</div>
                                </div>
                            </div>
                            <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                <div className="margin-bottom margin-medium">
                                    <label className="w-commerce-commercecheckoutlabel form-label">Full Name *</label>
                                    <input
                                        type="text"
                                        className="w-commerce-commercecheckoutbillingfullname form-input"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <label className="w-commerce-commercecheckoutlabel form-label">Street Address *</label>
                                    <div className="margin-bottom margin-small">
                                        <input
                                            type="text"
                                            className="w-commerce-commercecheckoutbillingstreetaddress form-input"
                                            name="address_line1"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-commerce-commercecheckoutbillingstreetaddressoptional form-input"
                                        name="address_line2"
                                    />
                                </div>
                                <div className="w-commerce-commercecheckoutrow margin-bottom margin-medium">
                                    <div className="w-commerce-commercecheckoutcolumn column is-left">
                                        <label className="w-commerce-commercecheckoutlabel form-label">City *</label>
                                        <input
                                            type="text"
                                            className="w-commerce-commercecheckoutbillingcity form-input"
                                            name="address_city"
                                            required
                                        />
                                    </div>
                                    <div className="w-commerce-commercecheckoutcolumn column is-centered">
                                        <label className="w-commerce-commercecheckoutlabel form-label">State/Province</label>
                                        <input
                                            type="text"
                                            className="w-commerce-commercecheckoutbillingstateprovince form-input"
                                            name="address_state"
                                        />
                                    </div>
                                    <div className="w-commerce-commercecheckoutcolumn column is-right">
                                        <label className="w-commerce-commercecheckoutlabel form-label">Zip/Postal Code *</label>
                                        <input
                                            type="text"
                                            data-node-type="commerce-checkout-billing-zip-field"
                                            className="w-commerce-commercecheckoutbillingzippostalcode form-input"
                                            name="address_zip"
                                            required
                                        />
                                    </div>
                                </div>
                                <SelectCountry title={'country'} />
                            </fieldset>
                        </form>
                        <div className="w-commerce-commercecheckoutorderitemswrapper checkout-card">
                            <div className="w-commerce-commercecheckoutsummaryblockheader checkout-header">
                                <h3 className="checkout-card-heading">Items in Order</h3>
                            </div>
                            <fieldset className="w-commerce-commercecheckoutblockcontent checkout-content">
                                <script type="text/x-wf-template" id="wf-template-c8aabfa7-3cd0-ad3b-fa40-af618b382f44"></script>
                                <div
                                    role="list"
                                    className="w-commerce-commercecheckoutorderitemslist"
                                    data-wf-collection="database.commerceOrder.userItems"
                                    data-wf-template-id="wf-template-c8aabfa7-3cd0-ad3b-fa40-af618b382f44"
                                />
                            </fieldset>
                        </div>
                    </div>
                    <div
                        data-w-id="c8aabfa7-3cd0-ad3b-fa40-af618b382f54"
                        className="w-commerce-commercelayoutsidebar order-summary-wrapper"
                    >
                        <CheckoutTotal />
                        <a
                            onClick={() => router.push(OrderPageUrl(getUuid()))}
                            data-node-type="commerce-checkout-place-order-button"
                            className="w-commerce-commercecheckoutplaceorderbutton button"
                            data-loading-text="Placing Order..."
                        >
                            Place Order
                        </a>
                        {/*<div data-node-type="commerce-checkout-error-state" className="w-commerce-commercecheckouterrorstate error-message">*/}
                        {/*    <div*/}
                        {/*        aria-live="polite"*/}
                        {/*        className="w-checkout-error-msg"*/}
                        {/*        data-w-info-error="There was an error processing your customer info. Please try again, or contact us if you continue to have problems."*/}
                        {/*        data-w-shipping-error="Sorry. We can’t ship your order to the address provided."*/}
                        {/*        data-w-billing-error="Your payment could not be completed with the payment information provided. Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order. Contact us if you continue to have problems."*/}
                        {/*        data-w-payment-error="There was an error processing your payment. Please try again, or contact us if you continue to have problems."*/}
                        {/*        data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again."*/}
                        {/*        data-w-minimum-error="The order minimum was not met. Add more items to your cart to continue."*/}
                        {/*        data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again."*/}
                        {/*        data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again."*/}
                        {/*        data-w-invalid-discount-error="This discount is invalid."*/}
                        {/*        data-w-expired-discount-error="This discount is no longer available."*/}
                        {/*        data-w-usage-reached-discount-error="This discount is no longer available."*/}
                        {/*        data-w-requirements-not-met-error="Your order does not meet the requirements for this discount."*/}
                        {/*    >*/}
                        {/*        There was an error processing your customer info. Please try again, or contact us if you continue to have*/}
                        {/*        problems.*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    );
};
