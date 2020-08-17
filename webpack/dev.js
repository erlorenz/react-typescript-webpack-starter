const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const createStyledComponentsTransformer = require("typescript-plugin-styled-components")
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader", // This is only for the React Fast Refresh
            options: { plugins: ["react-refresh/babel"] },
          },
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
              transpileOnly: true, // VSCode typechecking is good enough
              experimentalWatchApi: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ReactRefreshWebpackPlugin(),
    new Dotenv(),
  ],
};
