const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/bootstrap.ts', // Archivo de entrada para Angular
  devServer: {
    port: 4200,
    static: {
      directory: path.join(__dirname, 'src', 'public'),
    },
    historyApiFallback: true,
  },
  output: {
    uniqueName: 'host',
    publicPath: 'http://localhost:4200/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'], // Asegúrate de incluir extensiones TypeScript
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'raw-loader', // Procesa archivos HTML como cadenas de texto
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'], // Convierte CSS en cadenas de texto
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Opcional: Soporte para imágenes
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        aboutUs: 'aboutUs@http://localhost:4201/remoteEntry.js',
        homePage: 'homePage@http://localhost:4202/remoteEntry.js',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: false, requiredVersion: false, eager: true },
        '@angular/common': { singleton: true, strictVersion: false, requiredVersion: false, eager: true },
        '@angular/router': { singleton: true, strictVersion: false, requiredVersion: false, eager: true },
        '@angular/platform-browser': { singleton: true, strictVersion: false, requiredVersion: false, eager: true },
        '@angular/animations': { singleton: true, strictVersion: false, requiredVersion: false, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/public/index.html', // Ruta a tu index.html
      inject: 'body', // Inyecta los scripts en el cuerpo
    }),
  ],
};