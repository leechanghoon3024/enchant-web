import { NextPageWithLayout } from '@pages/_app';
import { getMainLayout } from '@layout/main.layout';
import { BlogDataInformationType } from '../../mock/data/blog.data';
export { getServerSideProps } from '@framework/ssr/checkout.ssr';
import { CheckoutForm } from '@layout/views/checkout/checkout.form';
import CustomSeo from '@framework/lib/seo/custome.seo';
interface IProductPage {
    checkout: BlogDataInformationType;
}
const CheckOutPage: NextPageWithLayout<IProductPage> = ({ checkout }) => {
    return (
        <>
            <CustomSeo nofollow={true} noindex={true} url={''} title={'Checkout'} />
            <CheckoutForm />
        </>
    );
};
export default CheckOutPage;
CheckOutPage.getLayout = getMainLayout;
