import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

module.exports = {
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
    STRAPI_API_KEY: process.env.STRAPI_API_KEY,
  },
};


export default nextConfig;
