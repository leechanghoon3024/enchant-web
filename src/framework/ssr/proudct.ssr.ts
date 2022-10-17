import { fetchProduct, fetchProducts } from '@framework/api/product.api';
import { GetStaticPathsContext, GetStaticProps } from 'next';

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
    const products = await fetchProducts();
    const paths = products.map((product) => ({ params: { slug: product.id } }));
    return {
        paths,
        fallback: 'blocking'
    };
}
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
    const slug = params?.slug as string;
    try {
        const product = await fetchProduct(slug);
        if (!product) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                product
            },
            revalidate: 60
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};
