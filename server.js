const express = require('express');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');

const app = express();

const config = require('./webpack.config');

const compile = webpack(config);
// 把 webpack 处理后的文件传递给一个服务器
app.use(webpackMiddleWare(compile, {
  publicPath: config.output.publicPath
}));


app.listen('3000', () => {
  console.log(`3000 port`);
})