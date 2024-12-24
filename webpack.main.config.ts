import type {Configuration} from 'webpack';

import {rules} from './webpack.rules';
import {plugins} from './webpack.plugins';
import path from "path";
//@ts-ignore
import relocateLoader from '@vercel/webpack-asset-relocator-loader';

export const mainConfig: Configuration = {
    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: './src/index.ts',
    // Put your normal webpack config below here
    module: {
        rules,
    },
    plugins: [
        ...plugins,
        {
            apply(compiler: any) {
                compiler.hooks.compilation.tap('webpack-asset-relocator-loader', (compilation: any) => {
                    relocateLoader.initAssetCache(compilation, 'native_modules');
                });
            }
        }
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};
