import { useRouter } from 'next/router';
import { LoginUrl } from '@framework/lib/page.url';

export const SignPage = () => {
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
                                        <h1 className="heading-large text-color-white">Create an account</h1>
                                    </div>
                                    <div className="text-size-medium">Create an account and start using Template</div>
                                </div>
                            </div>
                            <div className="w-form" style={{ marginBottom: 60 }}>
                                <form id="wf-form-Login" name="wf-form-Login" data-name="Login" method="get">
                                    <div className="form-content-wrapper">
                                        <div className="margin-bottom margin-small">
                                            <div className="margin-bottom margin-xxsmall">
                                                <label htmlFor="name-3" className="form-label">
                                                    Full name
                                                </label>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-input is-last w-input"
                                                maxLength={256}
                                                name="Name"
                                                data-name="Name"
                                                placeholder="Name"
                                                id="Name"
                                            />
                                        </div>
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
                                                name="Sign-up-email"
                                                data-name="Sign up email"
                                                placeholder="Email"
                                                id="Sign-up-email"
                                            />
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <div className="margin-bottom margin-xxsmall">
                                                <label htmlFor="name" className="form-label">
                                                    Password
                                                </label>
                                            </div>
                                            <input
                                                type="password"
                                                className="form-input is-last w-input"
                                                maxLength={256}
                                                name="Create-Password"
                                                data-name="Create Password"
                                                placeholder="Password"
                                                id="Create-Password"
                                            />
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <label id="Contact-6-Checkbox" className="w-checkbox form-checkbox margin-0">
                                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox-icon" />
                                                <input
                                                    style={{
                                                        opacity: 0,
                                                        position: 'absolute',
                                                        zIndex: -1
                                                    }}
                                                    type="checkbox"
                                                    name="Contact-6-Checkbox"
                                                    id="Contact 6 Checkbox"
                                                    data-name="Contact 6 Checkbox"
                                                />
                                                <label htmlFor="Contact-6-Checkbox" className="form-checkbox-label w-form-label">
                                                    I have read and agree to the{' '}
                                                    <a href="#" className="text-style-link">
                                                        Terms &amp; Conditions
                                                    </a>
                                                    .
                                                </label>
                                            </label>
                                        </div>
                                        <input
                                            type="submit"
                                            value="Create account"
                                            data-wait="Please wait..."
                                            className="button w-button"
                                        />
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
                                        <div className="text-size-regular">
                                            Have an account?{' '}
                                            <a onClick={() => router.push(LoginUrl)} className="text-style-link">
                                                Login
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
                data-w-id="cd57a85f-a92e-86bc-2596-de48119f24a8"
                alt=""
                className="account-graphic"
            />
            <img
                src="../images/Abstract-Tray.svg"
                loading="lazy"
                data-w-id="cd57a85f-a92e-86bc-2596-de48119f24a7"
                alt=""
                className="account-graphic-2"
            />
        </section>
    );
};
