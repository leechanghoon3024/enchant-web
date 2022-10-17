import { CoursesPlainUrl } from '@framework/lib/page.url';
import React from 'react';
import { useRouter } from 'next/router';
import { getUuid } from '@framework/utils/get.uuid';
interface IProductBreadcrumb {
    category: string[];
}
export const ProductBreadcrumb = ({ category }: IProductBreadcrumb) => {
    const router = useRouter();
    return (
        <div className="product-breadcrumb">
            <a onClick={() => router.push(CoursesPlainUrl)} className="breadcrumb-link w-inline-block">
                <div>All</div>
            </a>
            {category.map((v) => (
                <React.Fragment key={getUuid()}>
                    <div className="breadcrumb-divider w-embed">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <a href="#" className="breadcrumb-link w-inline-block">
                        <div className="text-weight-semibold">{v}</div>
                    </a>
                </React.Fragment>
            ))}
        </div>
    );
};
