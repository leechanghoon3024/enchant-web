import React from 'react';
import styled from '@emotion/styled';
import { CloseIcon } from '../../assets/icon/close.icon';
import { useDrawer } from '@store/drawer/use.drawer';
import { CartList } from '@components/cart/cart.list';
import { useCart } from '@store/cart/use.cart';
import { CartFooter } from '@components/cart/cart.footer';

const CartContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 480px;
    min-width: 320px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: auto;
    background-color: #fff;
    box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 25%);
    padding: 3rem 2rem;
`;

const ModalCloseButton = styled.a`
    cursor: pointer;
`;
export const CartModal = () => {
    const { onOpen, open, onClose } = useDrawer('cart');
    const { cartList } = useCart();
    return (
        <CartContainer>
            <div className="w-commerce-commercecartheader cart-header">
                <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                <ModalCloseButton
                    onClick={() => onClose()}
                    data-node-type="commerce-cart-close-link"
                    className="w-commerce-commercecartcloselink w-inline-block"
                >
                    <CloseIcon />
                </ModalCloseButton>
            </div>
            <div className="w-commerce-commercecartformwrapper">
                <CartList />
                <CartFooter />
            </div>
        </CartContainer>
    );
};
