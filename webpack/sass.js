module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            }]
        }
    }
};