module.exports = {
    // source
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
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
