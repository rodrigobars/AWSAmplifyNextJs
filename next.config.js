/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/certidoes/:path*',
                destination: 'https://certidoes-apf.apps.tcu.gov.br/api/rest/publico/certidoes/:path*',
            },
            {
                source: '/pncp/:path*',
                destination: 'https://pncp.gov.br/api/pncp/:path*',
            },
        ];
    }
};

module.exports = nextConfig;