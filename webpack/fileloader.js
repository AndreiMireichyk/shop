module.exports = function (env) {


    return {
        module: {
            rules: [
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: env === 'production' ? '[name].[ext]' : '[hash].[ext]',
                                outputPath: env === 'production' ? 'images/' : '',
                                publicPath: env === 'production' ? './images/' : ''
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: env === 'production' ? '[name].[ext]' : '[hash].[ext]',
                                outputPath: env === 'production' ? 'fonts/' : '',
                                publicPath: env === 'production' ? '../fonts/' : ''
                            }
                        }
                    ]
                }
            ]
        }
    }
};
