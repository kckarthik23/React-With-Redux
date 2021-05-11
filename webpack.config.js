const { dirname } = require("path");
const path = require("path");

module.exports = {
  entry: "./public/src/renderNotesApp.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
      
        test: /\.js$/,  
        loader: "babel-loader",   
        exclude: /node_modules/,
      },
      {
        loader:["style-loader","css-loader","sass-loader"],
        test:/\.s?css$/
      }
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: { contentBase: path.join(__dirname, "public") },
};
