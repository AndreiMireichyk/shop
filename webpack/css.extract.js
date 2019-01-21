const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
                },

                {
                    test: /\.css/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({filename: 'css/[name].css'})
        ]
    }
};