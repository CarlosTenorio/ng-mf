import { loadManifest } from '@angular-architects/module-federation';

loadManifest(`./assets/module-federation/mf.config.json`)
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
