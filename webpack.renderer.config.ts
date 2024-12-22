import type {Configuration} from 'webpack';

import {rules} from './webpack.rules';
import {plugins} from './webpack.plugins';

rules.push(
    {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
    }
);

rules.push(
    {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
    }
)

export const rendererConfig: Configuration = {
    module: {
        rules,
    },
    plugins,
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    },
};
