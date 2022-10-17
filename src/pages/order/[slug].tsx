import { NextPageWithLayout } from '@pages/_app';
import { getMainLayout } from '@layout/main.layout';
import { BlogDataInformationType } from '../../mock/data/blog.data';
import { CheckoutForm } from '@layout/views/checkout/checkout.form';
import { OrderForm } from '@layout/views/order/order.form';
import CustomSeo from '@framework/lib/seo/custome.seo';
import { ProductPageUrl } from '@framework/lib/page.url';
export { getServerSideProps } from '@framework/ssr/order.ssr';
interface IProductPage {
    checkout: BlogDataInformationType;
}

const OrderPage: NextPageWithLayout<IProductPage> = ({ checkout }) => {
    return (
        <div>
            <CustomSeo nofollow={true} noindex={true} url={''} title={'Order'} />
            <OrderForm />
        </div>
    );
};
export default OrderPage;
OrderPage.getLayout = getMainLayout;
