import {
  shareAll,
  withModuleFederationPlugin,
} from '@angular-architects/module-federation/webpack';

export default withModuleFederationPlugin({
  name: 'same-version',
  exposes: {
    './AdminModule': 'apps/same-version/src/app/modules/admin/admin.module.ts',
    './Routes': 'apps/same-version/src/app/remote-entry/entry.routes.ts',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
