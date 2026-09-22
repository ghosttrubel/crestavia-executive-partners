import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The local preview accesses the dev server through this host.
  allowedDevOrigins: ["192.168.56.1"],
};

export default nextConfig;
