import { WebPlugin } from '@capacitor/core';

import type { CapacitorPluginTestPlugin } from './definitions';

const prefix = "[Web platform]: ";
export class CapacitorPluginTestWeb extends WebPlugin implements CapacitorPluginTestPlugin {

  async echo(options: { value: string }): Promise<{ value: string }> {
    const msg = prefix + options.value;
    console.log('ECHO', msg);
    return { value: `${msg}` };
  }
}
