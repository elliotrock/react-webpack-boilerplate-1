module.exports = {
    // source
    entry: './index.jsx',
    output: {
        path: 'dist',
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
