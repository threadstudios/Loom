const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('./webpack.dev.config.js');

config.plugins.push(new UglifyJsPlugin());
config.mode = "production";

config.entry = `${__dirname}/../src/panel/fe.js`;
config.output.path = `${__dirname}/../src/panel/assets`;

module.exports = config;
