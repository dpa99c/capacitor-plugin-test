'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorPluginTest = core.registerPlugin('CapacitorPluginTest', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorPluginTestWeb()),
});

const prefix = "[Web platform]: ";
class CapacitorPluginTestWeb extends core.WebPlugin {
    async echo(options) {
        const msg = prefix + options.value;
        console.log('ECHO', msg);
        return { value: `${msg}` };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorPluginTestWeb: CapacitorPluginTestWeb
});

exports.CapacitorPluginTest = CapacitorPluginTest;
//# sourceMappingURL=plugin.cjs.js.map
