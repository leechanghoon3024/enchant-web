import { CoursesPlainUrl } from '@framework/lib/page.url';
import React from 'react';
import { useRouter } from 'next/router';
import { getUuid } from '@framework/utils/get.uuid';
interface IProductColumn {
    column: string[];
}
export const ProductColumn = ({ column }: IProductColumn) => {
    const router = useRouter();
    return (
        <div className="product-learn-component">
            <div className="product-learn-column">
                {column.slice(0, 4).map((v) => (
                    <div className="product-learn-item" key={getUuid()}>
                        <div className="product-icon-wrapper">
                            <div className="product-icon">check</div>
                        </div>
                        <div>{v}</div>
                    </div>
                ))}
            </div>
            <div className="product-learn-column">
                {column.slice(4, 8).map((v) => (
                    <div className="product-learn-item" key={getUuid()}>
                        <div className="product-icon-wrapper">
                            <div className="product-icon">check</div>
                        </div>
                        <div>{v}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
