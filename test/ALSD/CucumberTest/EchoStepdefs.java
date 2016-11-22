package ALSD.CucumberTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.assertEquals;

public class EchoStepdefs {

	Echo e = null;
	String s = null;
	
	@Given("^name \"([^\"]*)\" for echo method$")
	public void Method(String arg1) {
		e = new Echo(arg1);
	}

	@When("^I ask echo$")
	public void AskEcho() {
	    s = e.askEcho();
	}

	@Then("^I receive \"([^\"]*)\"$")
	public void Receive(String arg1) {
		assertEquals(arg1, s);
	}
	
}
