import {
  shareAll,
  withModuleFederationPlugin,
} from '@angular-architects/module-federation/webpack';

export default withModuleFederationPlugin({
  name: 'host',
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
