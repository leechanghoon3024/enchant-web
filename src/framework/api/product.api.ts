import { TestProductData } from '../../mock/data/product.data';

export const fetchProducts = async (id?: string) => {
    return [...TestProductData];
};
export const fetchProduct = async (id?: string) => {
    if (!id) {
        return undefined;
    }
    return TestProductData.find((v) => v.id === id);
};
