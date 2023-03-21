module.exports = {
  globDirectory: "./",
  globPatterns: ["**/*.{html,css,js,json,png,jpg,svg}"],
  swDest: "./sw.js",
  runtimeCaching: [
    {
      urlPattern: "/api/",
      handler: "StaleWhileRevalidate",
    },
  ],
};
