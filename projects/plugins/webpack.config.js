const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'plugins'
  },
  optimization: {
    // fix a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'plugins',
      library: { type: 'var', name: 'plugins' },
      filename: 'remoteEntry.js',
      exposes: {
        './Plugin1': './projects/plugins/src/app/plugin1/plugin1.component.ts',
        './Plugin2': './projects/plugins/src/app/plugin2/plugin2.component.ts'
      },
      shared: {
        '@angular/core': {
          singleton: true,
        },
        '@angular/common': {
          singleton: true,
        },
        '@angular/forms': {
          singleton: true,
        },
        '@angular/router': {
          singleton: true,
        },
        rxjs: {},
        shared: {
          singleton: true,
          requiredVersion: '0.0.1',
          import: 'dist/shared'
        }
      }
    })
  ]
};
