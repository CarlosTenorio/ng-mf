import {
  withModuleFederationPlugin,
  shareAll,
} from '@angular-architects/module-federation/webpack';

export default withModuleFederationPlugin({
  name: 'host',
  // remotes: {
  //   'same-versions': 'http://localhost:4201/remoteEntry.js',
  // },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
