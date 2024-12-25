//@ts-ignore
import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as path from "node:path";
// @ts-ignore
import CopyWebpackPlugin from 'copy-webpack-plugin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const assets = ['assets'];

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  new CopyWebpackPlugin(
      {
        patterns: assets.map((asset) => ({
          from: path.resolve(__dirname, 'src', asset),
          to: path.resolve(__dirname, '.webpack/renderer', asset)
        }))
      }
  )
];
