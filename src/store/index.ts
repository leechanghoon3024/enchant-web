import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from '@store/drawer/drawer.store';
import cartReducer from '@store/cart/cart.store';

export const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        cart: cartReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
