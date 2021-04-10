const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  css: {
    extract: false
  },
  publicPath: "./",
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: []
    }
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", "png"],
      alias: {
        "@": resolve("examples"),
        packages: resolve("packages"),
        img: resolve("packages/assets/images"),
        styles: resolve("packages/styles"),
        components: resolve("packages/components")
      }
    },
    output: {
      libraryExport: "default"
    },
    performance: {
      hints: "warning",
      // 入口起点的最大体积 整数类型（以字节为单位）, 主要是assets里面的图片文件，后续尽量还是放到服务器上去取
      maxEntrypointSize: 50000000,
      // 生产文件的最大体积
      maxAssetSize: 30000000,
      // 只给出JS的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js");
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .tap(options => {
        Object.assign(options, { limit: 40960 });
      });
  },
  outputDir: "lib",
  productionSourceMap: true
};
