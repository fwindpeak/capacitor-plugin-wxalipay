import { WebPlugin } from '@capacitor/core';

import type { WxalipayPlugin } from './definitions';

export class WxalipayWeb extends WebPlugin implements WxalipayPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
