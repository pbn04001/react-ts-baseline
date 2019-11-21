import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import { rules } from './webpack.base';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html'
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [ '.ts', '.tsx', '.js', '.json' ]
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
              emitWarning: true,
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        exclude: /node_modules/
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      ...rules
    ]
  },
  plugins: [ htmlPlugin ]
};

export default config;
