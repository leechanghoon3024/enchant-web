import { CardInformationType } from '../../mock/data/product.data';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { CartInformationType } from '@type/cart.types';
import { useDebounce } from 'react-use';
import { useCart } from '@store/cart/use.cart';

interface ICartItem {
    item: CartInformationType;
}
export const CartItem = ({ item }: ICartItem) => {
    const [value, setValue] = useState(String(item.qty));
    const { updateCartQty, removeCart } = useCart();
    const updateQtyValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const updateValue = Number(e.currentTarget.value);
        if (!value || isNaN(updateValue) || updateValue < 0) {
            return;
        }
        if (updateValue === 0) {
        } else {
            updateCartQty(item, updateValue);
        }
        setValue(String(updateValue));
    }, []);
    return (
        <div className="w-commerce-commercecartitem cart-item">
            <img src={item.thumbnailImage} alt="" className="w-commerce-commercecartitemimage image" />
            <div className="w-commerce-commercecartiteminfo">
                <div className="margin-bottom margin-tiny">
                    <div
                        data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.product.f_name_%22%7D%7D%5D"
                        className="w-commerce-commercecartproductname text-size-medium text-weight-medium"
                    >
                        {item.title}
                    </div>
                </div>
                <div className="margin-bottom margin-tiny">
                    <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.price%22%7D%7D%5D">
                        $ {Number(item.amount)} USD
                    </div>
                </div>
                <ul
                    data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.f_sku_values_3dr%22%7D%7D%5D"
                    className="w-commerce-commercecartoptionlist"
                    data-wf-collection="database.commerceOrder.userItems.0.product.f_sku_properties_3dr"
                    data-wf-template-id="wf-template-bcd16cde-3794-2f46-9625-d95b8adc838e"
                />
                <a
                    onClick={() => removeCart(item)}
                    className="remove-button w-inline-block"
                    data-wf-cart-action="remove-item"
                    data-commerce-sku-id="630f08ddd8cd8532fc8417b9"
                >
                    <div>Remove</div>
                </a>
            </div>
            <input
                type="number"
                data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.id%22%7D%7D%5D"
                data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22product%3Aec-product-type%22%3A%7B%22ne%22%3A%22e348fd487d0102946c9179d2a94bb613%22%2C%22type%22%3A%22Option%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0%22%7D"
                className="w-commerce-commercecartquantity cart-quantity"
                required
                pattern="^[0-9]+$"
                inputMode="numeric"
                name="quantity"
                autoComplete="off"
                data-wf-cart-action="update-item-quantity"
                data-commerce-sku-id="630f08ddd8cd8532fc8417b9"
                value={value}
                onChange={(e) => updateQtyValue(e)}
            />
        </div>
    );
};
