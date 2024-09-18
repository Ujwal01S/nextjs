/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return[
            {
                source: '/seller',
                destination: '/',
                permanent: false,
            }
        ]
    },
    output:'export'
};

export default nextConfig;
