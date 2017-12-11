var path = require('path');

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        // hot: true,
        // https: true,
        port: 3000
    },
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['env', 'react']
                }
            }
        ]
    }
};
