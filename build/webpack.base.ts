import { RuleSetRule } from 'webpack';

export const rules: Array<RuleSetRule> = [
  {
    test: /\.(js|ts|tsx)$/,
    use: 'babel-loader'
  },
  {
    test: /\.(js|ts|tsx)$/,
    use: [ 'source-map-loader' ],
    enforce: 'pre'
  }
]
