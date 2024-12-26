
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: {},
  output: {
    uniqueName: "homePage",
    publicPath: "http://localhost:4202/",
  },
  devServer: {
    port: 4202,
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
      name: "homePage",
      filename: "remoteEntry.js",
      exposes: {
        "./HomePageModule": "./src/app/homepage.module.ts",
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
        