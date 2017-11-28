module.exports = {
    entry: './src/index.js',
    output:{
        path: __dirname + "/public",
        filename: "index_bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {compact: false}
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                query: {compact: false}
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/,
                query: {compact: false}
            },
        ]
    }
};