const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  
  
};
const svgConfig = [
    'babel-plugin-named-asset-import',
    {
      loaderMap: {
        svg: {
          ReactComponent: require.resolve('@svgr/webpack') + '?-svgo,+titleProp,+ref![path]',
        },
      },
    },
  ]