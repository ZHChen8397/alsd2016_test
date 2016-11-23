package ALSD.CucumberTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = { "pretty", "html:target/cucumber" },
		monochrome = true,
		features = "classpath:resources/certificate.feature"
		)

public class CucumberRunner {

}
