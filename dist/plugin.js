var capacitorCapacitorPluginTest = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
