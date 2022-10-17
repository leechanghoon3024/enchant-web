import React, { useCallback, useMemo } from 'react';
import { cartAdd, cartQtyChange, cartSlice, cartRemove, cartAllRemove } from '@store/cart/cart.store';
import { useAppDispatch, useAppSelector } from '@store/store.hooks/hooks';
import { CartInformationType } from '@type/cart.types';
import { CardInformationType } from '../../mock/data/product.data';
import { useDrawer } from '@store/drawer/use.drawer';
type OmitCartItem = CardInformationType | CartInformationType;
export const useCart = (cartOpen = false) => {
    const cartModal = useDrawer('cart', true);
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const addCart = useCallback(
        (item: OmitCartItem) => {
            dispatch(cartAdd({ cart: item }));
            cartOpen && cartModal.onOpen();
        },
        [dispatch]
    );
    const updateCartQty = useCallback(
        (item: OmitCartItem, qty: number) => {
            dispatch(cartQtyChange({ cart: item, qty }));
        },
        [dispatch]
    );
    const removeCart = useCallback(
        (item: OmitCartItem) => {
            dispatch(cartRemove({ cart: item }));
        },
        [dispatch]
    );
    const allRemoveCart = useCallback(
        (item: OmitCartItem) => {
            dispatch(cartAllRemove());
        },
        [dispatch]
    );
    return { cartList: cart, addCart, updateCartQty, removeCart, allRemoveCart };
};
