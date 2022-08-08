import { WebPlugin } from '@capacitor/core';

import type { callkitPlugin } from './definitions';

export class callkitWeb extends WebPlugin implements callkitPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
