import {
  shareAll,
  withModuleFederationPlugin,
} from '@angular-architects/module-federation/webpack';

export default withModuleFederationPlugin({
  name: 'other-version',
  exposes: {
    './Routes': 'apps/other-version/src/app/remote-entry/entry.routes.ts',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
