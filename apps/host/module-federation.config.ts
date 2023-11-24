import { shareAll } from '@angular-architects/module-federation/webpack';

export const config = {
  name: 'host',
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
};
