package ALSD.CucumberTest;

import static org.junit.Assert.assertEquals;

import org.json.JSONObject;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class CertificateStep {
	
	JSONObject sampleJsonObject ;
	JSONObject inputJsonObject ;
	
	
	@Given("^I prepare data for generate certificates$") 
	public void Prepare()  {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		
		try {
			String dataString = "{'data':{'courseName':'ALSD','courseDate':'2016-01-01','certificareDate': '2016-01-01', 'hours':40,"
					+ "'students':[{'studentName':'student1','cateficateID':'#1'}]}}" ;
			
			sampleJsonObject = new JSONObject(dataString);
			inputJsonObject = new JSONObject(dataString);
			assertEquals(sampleJsonObject.toString(), inputJsonObject.toString());
			//System.out.println(json);
	
		} catch(Exception e){
		    System.err.println("Error: " + e.getMessage());
		}
		
	}

	@When("^I send the background of the certificate to backend$") 
	public void SendBackGround() {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		
	}

	@When("^I send student and course information to backend$") 
	public void SendInfo() {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}

	@Then("^I receive certificates$")
	public void Receive()  {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}
}
