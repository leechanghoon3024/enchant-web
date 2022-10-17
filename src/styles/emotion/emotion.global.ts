import { css } from '@emotion/react';
import fonts from '@styles/font.module.css';

import webflow from '@styles/webflow/webflow.module.css';
import projectStyle from '@styles/webflow/projectStyle.module.css';

export const emotionGlobal = css`
    ${fonts}

    body {
        font-family: GmarketSans, sans-serif;
        color: #4b5563;
        font-size: 1rem;
        line-height: 1.5;
    }
    a {
        cursor: pointer;
    }
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type='number'] {
        -moz-appearance: textfield;
    }
`;
