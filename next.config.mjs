/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/locations/scottsdale-az',
        destination: '/',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
