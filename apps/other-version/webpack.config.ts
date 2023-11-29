import {
  share,
  withModuleFederationPlugin,
} from '@angular-architects/module-federation/webpack';

export default withModuleFederationPlugin({
  name: 'other-version',
  filename: 'remoteEntry.js',
  exposes: {
    // './Module': './apps/other-version/src/app/app.module.ts',
    './web-components': './apps/other-version/src/bootstrap.ts',
  },
  shared: {},
  // shared: share({
  //   '@angular/core': {
  //     singleton: true,
  //     strictVersion: false,
  //     requiredVersion: 'auto',
  //   },
  //   '@angular/common': {
  //     singleton: true,
  //     strictVersion: false,
  //     requiredVersion: 'auto',
  //   },
  //   '@angular/common/http': {
  //     singleton: true,
  //     strictVersion: false,
  //     requiredVersion: 'auto',
  //   },
  //   '@angular/router': {
  //     singleton: true,
  //     strictVersion: false,
  //     requiredVersion: 'auto',
  //   },
  // }),
});
