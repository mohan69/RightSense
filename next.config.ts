import type { NextConfig } from "next";
import path from "path";

const PULSEIQ_BOOK_DEMO = "https://pulseiq.co.in/book-demo";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/48-hour-diagnostic", destination: PULSEIQ_BOOK_DEMO, permanent: true },
      { source: "/assessment", destination: PULSEIQ_BOOK_DEMO, permanent: true },
    ];
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
