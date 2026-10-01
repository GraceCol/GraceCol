import path from "node:path";
import type { NextConfig } from "next";
import { basePath } from "./lib/site-config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  images: { unoptimized: true },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
