module.exports = function (path) {
    return {
        devServer: {
            contentBase: path,
            port: 9000,
            compress: true
        }
    }
};