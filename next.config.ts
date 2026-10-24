import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/services/card-machines",
        destination: "/services/merchant-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
