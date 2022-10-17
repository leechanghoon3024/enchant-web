import { useCart } from '@store/cart/use.cart';
import React from 'react';
import { CartItem } from '@components/cart/cart.item';
import { getUuid } from '@framework/utils/get.uuid';

export const CartList = () => {
    const { cartList } = useCart();
    if (cartList.length === 0) {
        return (
            <div className="w-commerce-commercecartemptystate">
                <div>No items found.</div>
            </div>
        );
    }
    return (
        <div className={'w-commerce-commercecartlist cart-list'}>
            {cartList.map((v) => (
                <CartItem item={v} key={getUuid()} />
            ))}
        </div>
    );
};
