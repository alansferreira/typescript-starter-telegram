const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  target: 'node',
  externalsPresets: { node: true },
  externals: [
    ({ request }, callback) => {
      const isPackageImport =
        typeof request === 'string' &&
        !request.startsWith('.') &&
        !path.isAbsolute(request) &&
        !request.startsWith('@/')

      if (isPackageImport) {
        return callback(null, `commonjs ${request}`)
      }

      return callback()
    },
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  optimization: {
    minimize: false,
    splitChunks: false,
    runtimeChunk: false,
  },
  plugins: [],
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
    libraryTarget: 'commonjs2'
  }
};
