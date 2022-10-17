import { TestProductData } from '../mock/data/product.data';

export type CartInformationType = typeof TestProductData[number] & {
    qty: number;
};
