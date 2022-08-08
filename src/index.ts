import { registerPlugin } from '@capacitor/core';

import type { callkitPlugin } from './definitions';

const callkit = registerPlugin<callkitPlugin>('callkit', {
  web: () => import('./web').then(m => new m.callkitWeb()),
});

export * from './definitions';
export { callkit };
