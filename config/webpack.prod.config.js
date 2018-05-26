const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('./webpack.dev.config.js');

config.plugins.push(new UglifyJsPlugin());
config.mode = "production";

module.exports = config;
