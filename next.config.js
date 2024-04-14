// next.config.js
const withSvgr = require("next-svgr");

const withPWA = require("next-pwa")({
  dest: "public",
  // disable: process.env.NODE_ENV === 'development',
  register: true,
  // skipWaiting: true,
});

module.exports = withPWA(
  withSvgr({
    ignoreDuringBuilds: true,
  })
);
