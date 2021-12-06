import { registerPlugin } from '@capacitor/core';
const CapacitorPluginTest = registerPlugin('CapacitorPluginTest', {
    web: () => import('./web').then(m => new m.CapacitorPluginTestWeb()),
});
export * from './definitions';
export { CapacitorPluginTest };
//# sourceMappingURL=index.js.map