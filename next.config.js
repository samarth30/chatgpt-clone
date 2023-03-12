/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "links.papareact.com",
      "lh3.googleusercontent.com",
      "ui-avatars.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
