import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Route } from '@angular/router';
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
  // {
  //   path: 'other-version',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'manifest',
  //       remoteName: 'other-version',
  //       exposedModule: './Module',
  //     }).then((m) => m.AppModule),
  // },
  {
    path: 'other-version',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'other-version',
      exposedModule: './web-components',
      elementName: 'other-version-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
