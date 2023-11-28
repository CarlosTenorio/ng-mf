import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Route } from '@angular/router';
// import { loadRemoteModule as loadRemoteModuleNX } from '@nx/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'same-version',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'same-version',
        exposedModule: './Routes',
      }).then((m) => m.remoteRoutes),
  },
  {
    path: 'same-version-admin-module',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'same-version-admin-module',
        exposedModule: './AdminModule',
      }).then((m) => m.AdminModule),
  },
  {
    path: 'other-version',
    component: WebComponentWrapper,
    data: {
      remoteName: 'other-version',
      exposedModule: './web-components',
      elementName: 'other-version-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
  // NX SOLUTION
  // {
  //   path: 'same-version-admin-module-nx',
  //   loadChildren: () =>
  //     loadRemoteModuleNX('same-version-admin-module', './AdminModule').then(
  //       (m) => m.AdminModule
  //     ),
  // },
];
