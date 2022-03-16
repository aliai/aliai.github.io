const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  cleanDistDir: true,
  webpack5: true,
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://alti.wedding/",
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
};
