import React from 'react';
import styled from '@emotion/styled';
import { ContainerLarge } from '@styles/styled/box.styled';
import { ButtonDefault } from '@styles/styled/button.styled';
import { IconTiny, IconXSmall } from '@styles/styled/icon.styled';
import { CSSTransition } from 'react-transition-group';
import { useDrawer } from '@store/drawer/use.drawer';

const SearchModalContainer = styled.div`
    position: absolute;
    display: block;
    height: 100%;
    flex-direction: row;
    align-items: center;
    background-color: #5e5e5e;
    bottom: auto;
    overflow: hidden;
    width: 100vw;
    right: 0%;
    top: 4.5rem;
`;

const SearchWrapper = styled.div`
    display: flex;
    height: 100%;
`;

const SearchForm = styled.form`
   position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
`;

const SearchInput = styled.input`
    position: relative;
    max-width: 30rem;
    min-height: 3rem;
    margin-bottom: 0px;
    padding: 0.875rem 1rem 0.875rem 0rem;
    border: 1px none #000;
    background-color: transparent;
    color: #fff;
    font-family: GmarketSans, sans-serif;
`;

const SearchIconWrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-left: 1rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
`;

const SearchButton = styled(ButtonDefault)`
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
`;

const Input = styled.input`
    font-family: GmarketSans, sans-serif;
`;
const Box = styled.div`
    font-family: GmarketSans, sans-serif;
`;

export const SearchModal = () => {
    const searchDrawer = useDrawer('search', true);
    return (
        <CSSTransition classNames={'category-modal'} in={searchDrawer.open} timeout={800} unmountOnExit>
            <SearchModalContainer>
                <div className="page-padding search-bar">
                    <div className="container-large">
                        <SearchForm action="/search" className="search-desktop w-form">
                            <SearchInput
                                type="search"
                                className="search-input w-input"
                                maxLength={256}
                                name="query"
                                placeholder="Search course..."
                                id="search"
                            />
                            <Box className="search-icon-wrapper">
                                <Input type="submit" value="Search" className="button is-search w-button" />
                                <Box
                                    data-w-id="7d8015ab-e28e-ea35-3e43-2f629418e46e"
                                    className="search-close-button"
                                    onClick={() => searchDrawer.onClose()}
                                >
                                    <IconXSmall>close</IconXSmall>
                                </Box>
                            </Box>
                        </SearchForm>
                    </div>
                </div>
            </SearchModalContainer>
        </CSSTransition>
    );
};
