import type {Configuration} from 'webpack';

import {rules} from './webpack.rules';
import {plugins} from './webpack.plugins';
import * as path from "node:path";

// 配置静态资源处理
rules.push(
    {
        test: /\.css$/,
        use: ['css-loader']
    },
    {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name][ext]'
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
    }
};

