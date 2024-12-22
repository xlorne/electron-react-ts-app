import type {Configuration} from 'webpack';

import {rules} from './webpack.rules';
import {plugins} from './webpack.plugins';
import path from "path";


// 配置静态资源处理
rules.push(
    {
        test: /\.css$/,
        use: [
            {loader: 'css-loader'}
        ],
    },
    // 图片资源
    {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name][ext]'
        }
    },
    // 字体文件
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name][ext]'
        }
    },
    // 媒体文件
    {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'media/[name][ext]'
        }
    },
    // 小文件内联处理
    {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset',
        parser: {
            dataUrlCondition: {
                maxSize: 8 * 1024 // 8kb
            }
        }
    }
);

export const rendererConfig: Configuration = {
    module: {
        rules,
    },
    plugins,
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    output: {
        assetModuleFilename: 'assets/[name][ext]',
    }
};

