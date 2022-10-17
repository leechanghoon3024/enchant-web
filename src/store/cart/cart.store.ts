import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@store/index';
import { CartInformationType } from '@type/cart.types';
import { DrawerList } from '@store/drawer/drawer.store';
import { CardInformationType } from '../../mock/data/product.data';
interface ICartState {
    cart: CartInformationType[];
}

// Define the initial state using that type
const initialState: ICartState = {
    cart: []
};

interface ICartStatePayload {
    cart: CardInformationType | CartInformationType;
    qty?: number;
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        cartAdd: (state, action: PayloadAction<ICartStatePayload>) => {
            const {
                payload: { cart }
            } = action;
            //
            const copy = [...state.cart];
            const find = copy.find((v) => v.id === cart.id);
            if (find) {
                const readyItem = copy.map((v) => {
                    if (v.id === find.id) {
                        return { ...v, qty: v.qty + 1 };
                    }
                    return { ...v };
                });
                state.cart = [...readyItem];
            } else {
                const addItem = { ...cart, qty: 1 };
                state.cart = [...copy, addItem];
            }
        },
        cartQtyChange: (state, action: PayloadAction<ICartStatePayload>) => {
            const {
                payload: { cart, qty }
            } = action;
            //
            const copy = [...state.cart];
            const find = copy.find((v) => v.id === cart.id);
            if (find) {
                const readyItem = copy.map((v) => {
                    if (v.id === find.id) {
                        return { ...v, qty: qty ?? 0 };
                    }
                    return { ...v };
                });
                const filterArray = readyItem.filter((v) => v.qty > 0);
                state.cart = [...filterArray];
            }
        },
        cartRemove: (state, action: PayloadAction<ICartStatePayload>) => {
            const {
                payload: { cart, qty }
            } = action;
            //
            const copy = [...state.cart];
            const find = copy.find((v) => v.id === cart.id);
            if (find) {
                const filterArray = copy.filter((v) => v.id !== cart.id);
                state.cart = [...filterArray];
            }
        },
        cartAllRemove: (state) => {
            state.cart = [...[]];
        }
    }
});
export const { cartAdd, cartQtyChange, cartRemove, cartAllRemove } = cartSlice.actions;
export const cartList = (state: RootState) => state.cart;

export default cartSlice.reducer;
