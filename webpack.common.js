const path = require('path');
const env = require('./env').mode;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js', //动态加载
    path: path.resolve(__dirname, 'dist'),
    // publicPath:'/assets'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 告诉服务器从哪里提供内容
    host: '0.0.0.0', // 默认是 localhost
    port: 8000, // 端口号, 默认是8080
    open: true, // 是否自动打开浏览器
    hot: true, // 启用 webpack 的模块热替换特性
    hotOnly: true // 当编译失败之后不进行热更新
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: '试试',
      filename: "admin.html",
      template: "src/index.html",
    })
  ],
  module: {
    rules: [{
        test: /\.css$/,
        // use: [ "style-loader", "css-loader"]
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.txt$/,
        use: ["raw-loader"]
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_moudules|bower_components)/,
        use: [{
          loader: "babel-loader",
          options: {
            present: ["@babel/present-env"]
          },
          query: {
            optional: "runtime",
            cacheDirectory: true
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: 'fonts/'
          }
        }],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/,
        use: [{
          // loader: "file-loader",
          loader: 'url-loader',
          options: {
            limit: 15000,
            name(file) {
              if (env === 'development') {
                return '[path][name].[ext]'
              } else {
                return '[hash].[ext]'
              }
            },
            outputPath: 'images/'
          }
        }]
      }
    ]
  }

}