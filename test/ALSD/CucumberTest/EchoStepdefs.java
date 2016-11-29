package ALSD.CucumberTest;

import static org.junit.Assert.assertEquals;

//import java.io.BufferedReader;
//import java.io.IOException;
//import java.io.InputStreamReader;
//import java.io.UnsupportedEncodingException;
//import java.net.HttpURLConnection;
//import java.net.URL;
//
//import org.json.JSONException;
//import org.json.JSONObject;
//import org.skyscreamer.jsonassert.JSONAssert;
//import org.skyscreamer.jsonassert.JSONCompareMode;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EchoStepdefs {

	Echo e = new Echo();
	String s;

	
	@Given("^api url \"([^\"]*)\"$")
	public void readURL(String method) {
		e.giveMethodURL(method);
	}

	@When("^I ask url$")
	public void askAPI() {
	    s = e.askAPI();
	}

	@Then("^I receive \"([^\"]*)\"$")
	public void Receive(String arg1) {
		assertEquals(arg1, s);
	}
	
//	final Logger logger = LoggerFactory.getLogger(EchoStepdefs.class);
//	private String imdb_url = "https://alsd2016/cfapps.io";
//	private JSONObject json_response;
//	
//	@Given("^I query movie by \"(.*)?\"$")
//	public void I_query_movie_by_title(String key) throws UnsupportedEncodingException {
//		logger.info(imdb_url + key);
//	}
//
//	@When("^I make the rest call$")
//	public void I_make_the_rest_call() throws IOException, JSONException {
//		json_response = JsonReader.readJsonFromUrl(imdb_url);
//		logger.info("Response = " + json_response.toString());
//	}
//
//	@Then("^response should contain:$")
//	public void response_should_contain_JSON(String expected_json_str) throws JSONException {
//		logger.info("Comparing reponse with" + expected_json_str);
//		JSONObject expected_json = new JSONObject(expected_json_str);
//		JSONAssert.assertEquals(expected_json, json_response, JSONCompareMode.LENIENT);
//	}
//	
//	@Then("^response should contain \"(.+)\"")
//	public void response_should_contain(String expecgted_json_str) throws JSONException {
//		response_should_contain_JSON(expecgted_json_str);
//	}
	
}
