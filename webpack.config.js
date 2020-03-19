const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const isProduction = env === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js"
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
      rules: [
        {
          test: /\.tsx$/,
          use: ["babel-loader"]
        }
      ]
    },

    devServer: {},

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      })
    ]
  };
};
