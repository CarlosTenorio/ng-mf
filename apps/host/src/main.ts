import { loadManifest } from '@angular-architects/module-federation';

loadManifest(`./assets/module-federation/mf.config.json`)
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));

// // NX solution
// fetch('/assets/module-federation/mf-nx.config.json')
//   .then((res) => res.json())
//   .then((definitions) => setRemoteDefinitions(definitions))
// .then(() => import('./bootstrap').catch((err) => console.error(err)));
