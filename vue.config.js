const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
      },
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: "../board/src/main/resources/static",
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
};
