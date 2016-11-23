package ALSD.CucumberTest;

import static org.junit.Assert.assertEquals;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EchoStepdefs {

	Echo e = null;
	String s = null;

	
	@Given("^name \"([^\"]*)\" for echo method$")
	public void Method(String arg1) throws Exception{
		
		e = new Echo(arg1);
		System.out.println("Testing 1 - Send Http GET request");
		e.sendGet();
		
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
