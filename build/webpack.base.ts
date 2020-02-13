import { RuleSetRule } from 'webpack'

export const rules: Array<RuleSetRule> = [
  {
    test: /\.(js|ts|tsx)$/,
    use: 'babel-loader'
  },
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
  }
]
