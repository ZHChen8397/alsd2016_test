package ALSD.CucumberTest;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONObject;

public class HttpConnection {
	
	public JSONObject Get(String url) throws Exception {

		URL obj = new URL(url);
		HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
		
		/*Set request type*/
		connection.setRequestMethod("GET");
		//Add request header
		connection.setRequestProperty("User-Agent", "Mozilla/5.0");

		int responseCode = connection.getResponseCode();
		System.out.println("\nSending 'GET' request to URL : " + url);
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();
		
		JSONObject jsonObj = null ;
		if(response != null){
			jsonObj = new JSONObject(response);
		}
		
		return jsonObj ;

	}
	
	public JSONObject Post(String url, JSONObject jsonObj) throws Exception {

		/*Not finish yet*/
		
		return jsonObj ;

	}
	
	
}
