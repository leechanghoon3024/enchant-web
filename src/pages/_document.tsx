import { extractCritical } from '@emotion/server';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        const styles = extractCritical(initialProps.html);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style about={'nocode'} data-emotion-css={styles.ids.join(' ')} dangerouslySetInnerHTML={{ __html: styles.css }} />
                </>
            )
        };
    }
    render(): JSX.Element {
        return (
            <Html>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
