import { getMainLayout } from '@layout/main.layout';
import Home from '../index';
import { LoginPage } from '@layout/views/auth/login.page';
import { NextPageWithLayout } from '@pages/_app';
import CustomSeo from '@framework/lib/seo/custome.seo';

const Login: NextPageWithLayout = () => {
    return (
        <>
            <CustomSeo nofollow={true} noindex={true} url={''} title={'Login'} />
            <LoginPage />
        </>
    );
};
export default Login;
Login.getLayout = getMainLayout;
