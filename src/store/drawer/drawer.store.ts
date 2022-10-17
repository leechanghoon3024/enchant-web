import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@store/index';
export type DrawerList = 'cart' | 'search' | 'category' | 'mobileCategory' | 'mobileMenu' | 'youtube' | string;
interface IDrawerState {
    drawerList: DrawerList[];
}
interface IDrawerStateUnique {
    drawer: DrawerList;
    unique: boolean;
}
// Define the initial state using that type
const initialState: IDrawerState = {
    drawerList: []
};
export const drawerListSlice = createSlice({
    name: 'drawerList',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        drawerOpen: (state, action: PayloadAction<IDrawerStateUnique>) => {
            const {
                payload: { drawer, unique }
            } = action;
            const list = unique ? [drawer] : [...state.drawerList, drawer];
            state.drawerList = [...list.filter((v, i) => list.indexOf(v) === i)];
        },
        drawerClose: (state, action: PayloadAction<DrawerList>) => {
            const { payload } = action;
            const list = state.drawerList.filter((v) => v !== payload);
            state.drawerList = [...list];
        }
    }
});
export const { drawerOpen, drawerClose } = drawerListSlice.actions;
export const drawerList = (state: RootState) => state.drawer;

export default drawerListSlice.reducer;
