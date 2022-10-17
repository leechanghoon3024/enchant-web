import { getMainLayout } from '@layout/main.layout';
import { useRouter } from 'next/router';
import { SignupUrl } from '@framework/lib/page.url';

export const LoginPage = () => {
    const router = useRouter();
    return (
        <section className="account-component" style={{ height: '100vh', fontFamily: 'Dmsans, sans-serif' }}>
            <div className="page-padding">
                <div className="container-large">
                    <div className="flex-vertical-center">
                        <div data-w-id="79c8aa7d-ceb2-0066-1841-f46dd301043e" className="max-width-medium">
                            <div className="text-center">
                                <div className="margin-bottom margin-medium">
                                    <div className="margin-bottom margin-small">
                                        <h1 className="heading-large text-color-white">Login</h1>
                                    </div>
                                    <div className="text-size-medium">Please fill your email and password to login</div>
                                </div>
                            </div>
                            <div className="w-form">
                                <form id="wf-form-Login" name="wf-form-Login" data-name="Login" method="get">
                                    <div className="form-content-wrapper">
                                        <div className="margin-bottom margin-small">
                                            <div className="margin-bottom margin-xxsmall">
                                                <label htmlFor="name-3" className="form-label">
                                                    Email address
                                                </label>
                                            </div>
                                            <input
                                                type="email"
                                                className="form-input is-last w-input"
                                                maxLength={256}
                                                name="Login-Email"
                                                data-name="Login Email"
                                                placeholder="Email"
                                                id="Login-Email"
                                            />
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <div className="margin-bottom margin-xxsmall">
                                                <label htmlFor="name-3" className="form-label">
                                                    Password
                                                </label>
                                            </div>
                                            <input
                                                type="password"
                                                className="form-input is-last w-input"
                                                maxLength={256}
                                                name="Login-Password"
                                                data-name="Login Password"
                                                placeholder="Password"
                                                id="Login-Password"
                                            />
                                        </div>
                                        <input type="submit" value="Log in" data-wait="Please wait..." className="button w-button" />
                                    </div>
                                </form>
                                <div className="success-message w-form-done">
                                    <div>
                                        <strong>Thank you!</strong> Your submission has been received!
                                    </div>
                                </div>
                                <div className="error-message w-form-fail">
                                    <div>
                                        <strong>Oops!</strong> Something went wrong while submitting the form.
                                    </div>
                                </div>
                                <div className="margin-top margin-medium">
                                    <div className="text-center">
                                        <div className="margin-bottom margin-xxsmall">
                                            <div className="text-size-regular">
                                                Don’t have an account?{' '}
                                                <a onClick={() => router.push(SignupUrl)} className="text-style-link">
                                                    Register
                                                </a>
                                            </div>
                                        </div>
                                        <div className="text-size-regular">
                                            <a href="../account-pages/forgot-password.html" className="text-style-link">
                                                Forgot password
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="../images/Abstract-Tray-1.svg"
                loading="lazy"
                data-w-id="c539cd4b-cb0d-cfb3-6c5d-0bac50972495"
                alt=""
                className="account-graphic"
            />
            <img
                src="../images/Abstract-Tray.svg"
                loading="lazy"
                data-w-id="a44ab839-d152-89f1-e6d3-a34cc359eb79"
                alt=""
                className="account-graphic-2"
            />
        </section>
    );
};
