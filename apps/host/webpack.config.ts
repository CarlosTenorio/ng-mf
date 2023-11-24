import { withModuleFederationPlugin } from '@angular-architects/module-federation/webpack';
import { config } from './module-federation.config';

export default withModuleFederationPlugin(config);
