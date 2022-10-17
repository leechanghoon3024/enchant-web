import { CardInformationType } from '../../mock/data/product.data';

export { getStaticPaths, getStaticProps } from '@framework/ssr/proudct.ssr';
import { NextPageWithLayout } from '@pages/_app';
import Login from '@pages/account/login';
import { getMainLayout } from '@layout/main.layout';
import { ProductLayout } from '@components/prdouct/product.layout';
import { ProductLeftLayout } from '@components/prdouct/product.left';
import { ProductRightLayout } from '@components/prdouct/product.right';
import { ProductOtherSection } from '@components/cards/product.other.section';
import CustomSeo from '@framework/lib/seo/custome.seo';
import { ProductPageUrl, TeacherPageUrl } from '@framework/lib/page.url';
interface IProductPage {
    product: CardInformationType;
}
const ProductPage: NextPageWithLayout<IProductPage> = ({ product }) => {
    return (
        <>
            <CustomSeo url={ProductPageUrl(product.id)} title={product.title} />
            <ProductLayout>
                <ProductLeftLayout product={product} />
                <ProductRightLayout product={product} />
            </ProductLayout>
            <ProductOtherSection product={product} />
        </>
    );
};
export default ProductPage;
ProductPage.getLayout = getMainLayout;
