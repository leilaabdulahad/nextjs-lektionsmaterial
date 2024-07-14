/** @type {import('next').NextConfig} */
const nextConfig = {
    pdfs: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'brilliant-rabbit-489.convex.cloud',
        },
      ],
    },
  };
  
  export default nextConfig;