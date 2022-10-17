export const LetterComponent = () => {
    return (
        <section className="section-newsletter">
            <div className="page-padding">
                <div className="container-large">
                    <div data-w-id="bc36a2e0-f565-f2ae-2492-703e5838aa90" className="home-about-us-component">
                        <div className="container-small">
                            <div className="padding-vertical padding-xxlarge">
                                <div className="text-align-center flex-vertical-center">
                                    <div className="margin-bottom margin-small">
                                        <h2>Subscribe to our newsletter</h2>
                                    </div>
                                    <div className="max-width-large">
                                        <p className="text-color-neutral-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse varius enim in eros
                                            elementum tristique.
                                        </p>
                                    </div>
                                    <div className="margin-top margin-small">
                                        <div className="button-row is-center">
                                            <div className="newsletter-form-block w-form">
                                                <form
                                                    id="email-form"
                                                    name="email-form"
                                                    data-name="Email Form"
                                                    method="get"
                                                    className="newsletter-form"
                                                >
                                                    <div className="signup-form-wrapper">
                                                        <input
                                                            type="email"
                                                            className="form-input is-last w-input"
                                                            maxLength={256}
                                                            name="Email"
                                                            data-name="Email"
                                                            placeholder="Enter your email"
                                                            id="Email-3"
                                                            required
                                                        />
                                                        <input
                                                            type="submit"
                                                            value="Sign Up"
                                                            data-wait="Please wait..."
                                                            className="button-tertiary w-button"
                                                        />
                                                    </div>
                                                    <div className="text-size-tiny text-color-neutral-700">
                                                        By clicking Sign Up you&#x27;re confirming that you agree with our{' '}
                                                        <a href="#" className="text-color-neutral-700">
                                                            Terms and Conditions
                                                        </a>
                                                        .
                                                    </div>
                                                </form>
                                                <div className="success-message w-form-done">
                                                    <div>Thank you! Your submission has been received!</div>
                                                </div>
                                                <div className="error-message w-form-fail">
                                                    <div>Oops! Something went wrong while submitting the form.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter-background"></div>
        </section>
    );
};
