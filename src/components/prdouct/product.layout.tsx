import React, { ReactElement } from 'react';

interface IProductLayoutProps {
    children: ReactElement | ReactElement[];
}
export const ProductLayout = ({ children }: IProductLayoutProps) => {
    return (
        <section className="section-product" style={{ fontFamily: 'Dmsans, sans-serif' }}>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xhuge">
                        <div className="product-layout">{children}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
