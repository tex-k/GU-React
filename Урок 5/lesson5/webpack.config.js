module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    entry: './Main.html',
    output: {
        filename: 'build.js'
    }
};