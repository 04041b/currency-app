const path = require("path");
const crypto = require("crypto");

// Webpack 4 hashes with MD4, which OpenSSL 3 (Node.js 17+) no longer provides.
// Swap it for SHA-256 so the app builds on current Node versions.
const origCreateHash = crypto.createHash;
crypto.createHash = (algorithm, ...args) =>
  origCreateHash(algorithm === "md4" ? "sha256" : algorithm, ...args);

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pwa: {
    name: "CurrencyApp",
    themeColor: "#ffffff",
    manifestOptions: {
      background_color: "#335eea",
    },
    // workboxOptions: {
    //   swSrc: "dev/sw.js",
    // },
  },

  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "CurrencyApp",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  chainWebpack(config) {
    config.module.rules.delete("svg");
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/imgs"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/imgs"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
