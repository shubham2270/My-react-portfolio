// next.config.js
const withSvgr = require("next-svgr");

module.exports = withSvgr({
  ignoreDuringBuilds: true,
  // your config for other plugins or the general next.js here...
});
