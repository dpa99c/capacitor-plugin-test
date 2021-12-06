import { WebPlugin } from '@capacitor/core';
const prefix = "[Web platform]: ";
export class CapacitorPluginTestWeb extends WebPlugin {
    async echo(options) {
        const msg = prefix + options.value;
        console.log('ECHO', msg);
        return { value: `${msg}` };
    }
}
//# sourceMappingURL=web.js.map