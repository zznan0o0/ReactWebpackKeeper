const path = require('path');
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GenerateAssetPlugin = require('generate-asset-webpack-plugin'); 
const fs = require('fs');

const createServerConfig = function(compilation){
  let config = fs.readFileSync('src/WebConfig.js','utf-8');
  return config;
}

module.exports = {
  resolve: {
    alias: {
      Libs: path.join(__dirname, 'src/Libs'),
      Pages: path.join(__dirname, 'src/Pages'),
      Components: path.join(__dirname, 'src/Components'),
      Routes: path.join(__dirname, 'src/Routes'),
      Actions: path.join(__dirname, 'src/Redux/Actions'),
      Reducers: path.join(__dirname, 'src/Redux/Reducers'),
      Redux: path.join(__dirname, 'src/Redux'),
      public: path.join(__dirname, 'public'),
      src: path.join(__dirname, 'src'),
    }
  },

  /*入口*/
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/indexDev.jsx')
    ],
    vendor: ['react', 'react-keeper', 'redux', 'react-dom', 'react-redux']
  },

  devtool: 'inline-source-map',
  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'build/js/[name].[hash].js',
    chunkFilename: 'build/js/[name].[chunkhash].js',
  },
  //loader 让 webpack 能够去处理那些非 JavaScript 文件
  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        include: path.join(__dirname, 'src'),
        use: ['babel-loader?cacheDirectory=true'],
      },

      {
        test: /\.css$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "public/css"),
        ],
        use: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'postcss-loader']
      },

      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "public/css"),
        ],
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },

      {
        test: /\.(png|jpg|gif|jpeg|bmp)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'build/images/[hash:8].[name].[ext]'
          }
        }]
      },

      {
        test: /\.(woff|woff2|svg|ttf|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'build/icon/[hash:8].[name].[ext]'
          }
        }]
      },
    ]
  },
  //插件
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),

    new webpack.optimize.SplitChunksPlugin({
      name: 'vendor'
    }),

    new GenerateAssetPlugin({
      filename: 'WebConfig.js',
      fn: (compilation, cb) => {
          cb(null, createServerConfig(compilation));
      },
      extraFiles: []
    }),

  ],

  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true
  }
};