const webpack = require('webpack');

module.exports = function override(config) {
  // Get the fallback object from the original config or create a new one
  const fallback = config.resolve.fallback || {};

  // Merge the new fallback modules into the existing ones
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
    zlib: require.resolve('browserify-zlib'),
    net: require.resolve('net'),
    tls: require.resolve('tls'),
    path: require.resolve('path-browserify'),
    'process/browser': require.resolve('process/browser'),
    fs: false, // disable node.js fs module
  });

  // Update the fallback modules in the config
  config.resolve.fallback = fallback;

  // Add the webpack plugin to provide global variables in the config
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};
