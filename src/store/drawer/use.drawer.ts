import React, { useCallback, useMemo } from 'react';
import { drawerClose, drawerList, DrawerList, drawerOpen } from '@store/drawer/drawer.store';
import { useAppDispatch, useAppSelector } from '@store/store.hooks/hooks';

export const useDrawer = (container: DrawerList, unique = false) => {
    const { drawerList } = useAppSelector((state) => state.drawer);
    const dispatch = useAppDispatch();
    const open = useMemo(() => {
        const find = drawerList.find((v) => v === container);
        return !!find;
    }, [drawerList]);
    const onClose = useCallback(() => {
        dispatch(drawerClose(container));
    }, [dispatch]);
    const onOpen = useCallback(() => {
        open ? dispatch(drawerClose(container)) : dispatch(drawerOpen({ drawer: container, unique }));
    }, [dispatch, open]);
    return { open, onOpen, onClose, drawerList };
};
