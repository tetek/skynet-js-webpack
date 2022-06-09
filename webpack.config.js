// Generated using webpack-cli https://github.com/webpack/webpack-cli

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  entry: "./src/index.js",
  devServer: {
    open: true,
    host: "localhost",
  },
  optimization: {
    chunkIds: "total-size",
    concatenateModules: true,
    innerGraph: true,
    mangleExports: "size",
    mangleWasmImports: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  output: {
    library: "Skynet",
    filename: "skynet.js",
  },
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
