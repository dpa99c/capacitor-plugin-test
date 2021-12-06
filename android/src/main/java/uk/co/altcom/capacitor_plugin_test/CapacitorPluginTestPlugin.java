package uk.co.altcom.capacitor_plugin_test;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorPluginTest")
public class CapacitorPluginTestPlugin extends Plugin {

    private CapacitorPluginTest implementation = new CapacitorPluginTest();

    private String prefix = "[Android platform]: ";

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");
        value = prefix.concat(value);

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
