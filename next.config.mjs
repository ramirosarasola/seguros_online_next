/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sa-east-1.graphassets.com',
        port: '',
        pathname: '/**', // Allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;