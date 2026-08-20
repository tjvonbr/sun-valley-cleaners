/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/locations/scottsdale-az',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/move-cleaning',
        destination: '/services/move-in-cleaning',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
