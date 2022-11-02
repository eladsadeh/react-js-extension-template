const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const tailwindcss = require('tailwindcss')
// const autoprefixer = require('autoprefixer')

const titles = {
    popup: "Extension Popup",
    options: "Extension Options",
    newTab: "New Tab"
}

module.exports = {
    entry: {
        popup: path.resolve('src/popup/index.tsx'),
        options: path.resolve('src/options/options.tsx'),
        background: path.resolve('src/background/background.ts'),
        contentScript: path.resolve('src/contentScript/index.tsx'),
        newTab: path.resolve('src/tabs/index.tsx')
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    // "css-modules-typescript-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            },
                        },
                    }
                ],
            },
            {
                type: 'assets/resource',
                test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
            },
        ]
    },
    "plugins": [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve('src/static'),
                to: path.resolve('dist')
            },
            {
                from: path.resolve('src/assets/style.css'),
                to: path.resolve('dist')
            }]
        }),
        ...getHtmlPlugins([
            'popup',
            'options',
            'newTab'
        ])
    ],
    resolve: {
        extensions: ['.tsx', '.js', '.ts']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks(chunk) {
                return chunk.name !== 'contentScript';
            }
        }
    }
}

function getHtmlPlugins(chunks){
    return chunks.map(chunk => new HtmlPlugin({
        title: titles[chunk],
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}