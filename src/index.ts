import { registerPlugin } from '@capacitor/core';

import type { WxalipayPlugin } from './definitions';

const Wxalipay = registerPlugin<WxalipayPlugin>('Wxalipay', {
  web: () => import('./web').then(m => new m.WxalipayWeb()),
});

export * from './definitions';
export { Wxalipay };
