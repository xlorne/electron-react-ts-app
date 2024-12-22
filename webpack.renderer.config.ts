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
    },
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
