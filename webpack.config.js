const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  const isProduction = env === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
      filename: "[name].[contenthash].js"
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: ["babel-loader"]
        }
      ]
    },

    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    },

    devServer: {
      open: true
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      })
    ]
  };
};
