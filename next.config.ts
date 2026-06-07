import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/zh_hk",
        destination: "/zh-HK",
        permanent: true
      },
      {
        source: "/zh_hk/:path*",
        destination: "/zh-HK/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
