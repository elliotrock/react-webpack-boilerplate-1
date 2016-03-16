module.exports = {
    // source
    entry: './index.jsx',
    output: {
        path: __dirname,
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
            }
        ]
    }
}
