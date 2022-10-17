import { ReactElement } from 'react';

interface IBlogLayoutProps {
    children: ReactElement | ReactElement[];
}
export const BlogLayout = ({ children }: IBlogLayoutProps) => {
    return <div style={{ fontFamily: 'Dmsans, sans-serif' }}>{children}</div>;
};
