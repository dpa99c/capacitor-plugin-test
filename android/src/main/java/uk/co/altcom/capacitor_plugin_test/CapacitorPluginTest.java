package uk.co.altcom.capacitor_plugin_test;

import android.util.Log;

public class CapacitorPluginTest {

    private String prefix = "[Android platform]: ";

    public String echo(String value) {
        String result = prefix.concat(value);
        Log.i("Echo", result);
        return result;
    }
}
