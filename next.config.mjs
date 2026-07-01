/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // para imagen Docker liviana en Coolify
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
};
export default nextConfig;
