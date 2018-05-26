const paths = require('./paths');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
});

module.exports = {
    entry: [
        `${paths.app}/client.js`
    ],
    mode: 'development',
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }]
                })
            }
        ],
    },
    plugins: [
        extractSass
    ],
    output: {
        path: `${paths.app}/assets`,
        filename: 'index.js'
    }
};