import { NextPageWithLayout } from '@pages/_app';
import { getMainLayout } from '@layout/main.layout';
import { useRouter } from 'next/router';

const NotFoundPage: NextPageWithLayout = () => {
    const router = useRouter();
    return (
        <div className="utility-component">
            <div className="utility-form-block w-form">
                <div className="margin-bottom margin-small">
                    <h1 className="heading-large">Page not found</h1>
                </div>
                <div className="text-size-medium">The page you are looking for doesn&#x27;t exist or has been moved</div>
                <div className="margin-top margin-small">
                    <a onClick={() => router.push('/')} className="button w-button">
                        Back to home
                    </a>
                </div>
            </div>
            <img src="images/Abstract-Tray-1.svg" loading="lazy" alt="" className="account-graphic" />
            <img src="images/Abstract-Tray.svg" loading="lazy" alt="" className="account-graphic-2" />
        </div>
    );
};
export default NotFoundPage;
NotFoundPage.getLayout = getMainLayout;
