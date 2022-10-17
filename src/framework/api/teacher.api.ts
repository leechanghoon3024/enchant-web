import { TestBlogData } from '../../mock/data/blog.data';

export const fetchTeacher = async (id?: string) => {
    if (!id) {
        return undefined;
    }
    return TestBlogData.find((v) => v.user.id === id)?.user;
};
