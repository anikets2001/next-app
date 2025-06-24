/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  async redirects() {
    return [
      {
        source: "/users",
        destination: "/login",
        permanent: false, // 308 redirect
      },
      {
        source: "/users/:userId",
        destination: "/",
        permanent: false, // 308 redirect
      },
    ];
  },
};

export default nextConfig;
