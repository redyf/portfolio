import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
};

export default withContentlayer(nextConfig);
