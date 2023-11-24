import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'same-version',
    loadChildren: () =>
      import('same-version/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'other-version',
    loadChildren: () =>
      import('other-version/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
