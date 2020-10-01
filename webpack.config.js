const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  devtool: "eval-source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    host: "localhost",
    port: 8080,
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
};
