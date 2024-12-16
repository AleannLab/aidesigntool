import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
  // async redirects() {
  //     return [
  //         {
  //             source: '/',
  //             destination: '/home',
  //             permanent: false, // Використовуйте true, якщо це постійний редирект
  //         },
  //     ];
  // },
};

export default nextConfig;
