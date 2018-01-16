module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    entry: './main.js',
    output: {
        filename: 'build.js'
    }
};