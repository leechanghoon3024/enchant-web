/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'uploads-ssl.webflow.com',
            'pickbazarlaravel.s3.ap-southeast-1.amazonaws.com',
            'lh3.googleusercontent.com',
            'localhost',
            '127.0.0.1'
        ]
    }
};

module.exports = nextConfig;
