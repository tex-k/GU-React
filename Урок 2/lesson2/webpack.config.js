module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    entry: './Home.js',
    output: {
        filename: 'build.js'
    }
};