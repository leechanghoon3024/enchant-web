import { getMainLayout } from '@layout/main.layout';
import { NextPageWithLayout } from '@pages/_app';
import { SignPage } from '@layout/views/auth/sign.page';
import CustomSeo from '@framework/lib/seo/custome.seo';

const Signup: NextPageWithLayout = () => {
    return (
        <>
            <CustomSeo nofollow={true} noindex={true} url={''} title={'SignUp'} />
            <SignPage />
        </>
    );
};
export default Signup;
Signup.getLayout = getMainLayout;
