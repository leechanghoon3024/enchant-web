import { TestProductData } from '../../mock/data/product.data';
import { TestBlogData } from '../../mock/data/blog.data';

export const fetchBlogs = async (id?: string) => {
    return [...TestBlogData];
};
export const fetchBlog = async (id?: string) => {
    if (!id) {
        return undefined;
    }
    return TestBlogData.find((v) => v.id === id);
};
