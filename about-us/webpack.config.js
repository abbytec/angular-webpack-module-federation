
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: {},
  output: {
    uniqueName: "aboutUs",
    publicPath: "http://localhost:4201/",
  },
  devServer: {
    port: 4201,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "aboutUs",
      filename: "remoteEntry.js",
      exposes: {
        "./AboutUsModule": "./src/app/about-us.module.ts",
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        '@angular/platform-browser': { singleton: true, strictVersion: true },
        '@angular/platform-browser-dynamic': { singleton: true, strictVersion: true },
        '@angular/animations': { singleton: true, strictVersion: true },
      },
    }),
  ],
};
