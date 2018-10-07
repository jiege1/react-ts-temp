const IS_DEV = process.env.NODE_ENV !== 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rootSrc = __dirname + '/src';

module.exports = (config) => {

  return {
    ...config,
    entry: {
      index: rootSrc + '/index.tsx',
    },
    resolve: {
      ...config.resolve,
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      alias: {
        components: rootSrc + '/components',
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
          }, {
            loader: 'ts-loader'
          }]
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              }
            ],
          }),
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'typings-for-css-modules-loader',
                options: {
                  modules: true,
                  namedExport: true,
                  localIdentName: '[local]_[hash:base64:6]',
                  minimize: true,
                }
              },
              {
                loader: 'less-loader',
              }
            ],
            fallback: 'style-loader'
          })
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            // CSS图片目录
            name: IS_DEV ? '[path][name].[ext]' : 'assets/[name].[ext]',
          }
        },
        {
          test: /\.mp3$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          query: {
            // mp4目录
            name: IS_DEV ? '[path][name].[ext]' : 'assets/audio/[hash].[ext]',
          }
        },
        {
          test: /\.mp4$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          query: {
            // mp4目录
            name: IS_DEV ? '[path][name].[ext]' : 'assets/video/[hash].[ext]',
          }
        },
        {
          test: /\.ttf$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          query: {
            // mp4目录
            name: IS_DEV ? '[path][name].[ext]' : 'assets/font/[hash].[ext]',
          }
        },
      ]
    },
  };

  // return config;
};