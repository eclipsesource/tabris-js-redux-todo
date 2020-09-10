import {Module, app} from 'tabris';
import {StoreEnhancer} from 'redux';

const hostname = /\/\/(.+):/.exec(app.getResourceLocation('/')) && RegExp.$1;

// Module 'remote-redux-devtools' needs to be configured before import.
// When sideloading (in debug mode) the module needs to be processed
// by browserify first, so we point the module system to the "generated"
// directory. In production mode we don't have have the module available
// at all, so it is replaced with a dummy.

if (app.debugBuild && hostname) {
  // eslint-disable-next-line no-console
  console.info('Mapping remote-redux-devtools');
  Module.addPath('remote-redux-devtools', ['./generated/remote-redux-devtools']);
} else {
  const enhancer: StoreEnhancer = next => next;
  Module.define('/node_modules/remote-redux-devtools', {default: () => enhancer});
}

import * as remoteReduxDevtools from 'remote-redux-devtools';

export const reduxDevTools = remoteReduxDevtools.default({
  name: 'Tabris Todo',
  realtime: true,
  port: 8000,
  hostname
});
