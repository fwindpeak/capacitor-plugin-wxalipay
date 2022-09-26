import { WebPlugin } from '@capacitor/core';

import type { WxalipayPlugin, WxParams, AlipayParams } from './definitions';

export class WxalipayWeb extends WebPlugin implements WxalipayPlugin {
  constructor() {
    super({
      name: 'Pay',
      platforms: ['web'],
    });
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async wxPayRequest(options: WxParams): Promise<any> {
    console.log('wxPayRequest from web');
    return options;
  }

  async aliPayRequest(options: AlipayParams): Promise<any> {
    return options;
  }
}
