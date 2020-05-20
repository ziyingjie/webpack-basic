const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = env => {
    return {
        entry: './src/index.js',
        output: {
            filename: env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: '合并成同一个webpack配置'
            })
        ],
        module: {
            rules: [{
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.txt$/,
                    use: ["raw-loader"]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts/'
                        }
                    }],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            name(file) {
                                if (env === 'development') {
                                    return '[path][name].[ext]'
                                } else {
                                    return '[hash].[ext]'
                                }
                            },
                            outputPath: 'images/'
                        }
                    }]
                }
            ]
        }
    }
}