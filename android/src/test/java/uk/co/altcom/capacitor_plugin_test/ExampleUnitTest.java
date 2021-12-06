package uk.co.altcom.capacitor_plugin_test;

import static org.junit.Assert.*;
import org.junit.Test;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {

    private String prefix = "[Android platform]: ";
    private CapacitorPluginTest implementation = new CapacitorPluginTest();

    @Test
    public void output_isPrefixed() throws Exception {
        String input = "test";
        String output = implementation.echo(input);
        assertEquals(output, prefix.concat(input));
    }
}
