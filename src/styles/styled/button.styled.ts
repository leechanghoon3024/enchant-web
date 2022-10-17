import styled from '@emotion/styled';

export const ButtonDefault = styled.input`
    position: relative;
    z-index: 1;
    padding: 0.75rem 1.5rem;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-color: #ed8e00;
    border-radius: 8px;
    background-color: #ed8e00;
    -webkit-transition: background-color 300ms ease, -webkit-transform 300ms ease;
    transition: background-color 300ms ease, -webkit-transform 300ms ease;
    transition: transform 300ms ease, background-color 300ms ease;
    transition: transform 300ms ease, background-color 300ms ease, -webkit-transform 300ms ease;
    color: #fff;
    font-weight: 500;
    text-align: center;
`;
