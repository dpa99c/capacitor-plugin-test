import { WebPlugin } from '@capacitor/core';
import type { CapacitorPluginTestPlugin } from './definitions';
export declare class CapacitorPluginTestWeb extends WebPlugin implements CapacitorPluginTestPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
