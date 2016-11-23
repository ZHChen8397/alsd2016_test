package ALSD.CucumberTest;

import static org.junit.Assert.assertEquals;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Base64;

import javax.imageio.ImageIO;

import org.json.JSONObject;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class CertificateStep {
	
	JSONObject sampleJsonObject ;
	JSONObject inputJsonObject ;
	
	String sampleBase64BackgroundImage = null;
	String inputBase64BackgroundImage = null;
	
	String [] inputCertificates = {"base64Image1", "base64Image2"} ;
	String [] sampleCertificates = {"base64Image1", "base64Image2"};
	
	@Given("^I prepare data for generate certificates$") 
	public void Prepare()  {
	    
		/*Prepare background picture*/
		try {
			BufferedImage  backgroundImage = ImageIO.read(new File("./image/backgroundImage.png")); 
	        ByteArrayOutputStream bos = new ByteArrayOutputStream();
	        
	        /*Encode image to base64 string*/
	        try {
	            ImageIO.write(backgroundImage, "png", bos);
	            byte[] imageBytes = bos.toByteArray();
	            
	            String base64String = Base64.getEncoder().encodeToString(imageBytes);
	            sampleBase64BackgroundImage = base64String ;
	            inputBase64BackgroundImage = base64String ;
	            
	            bos.close();
	            
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	        
		} 
		catch (IOException e) 
		{
		    e.printStackTrace();
		}
		
		/*Prepare students info*/
		try {
			String dataString = "{'data':{'courseName':'ALSD','courseDate':'2016-01-01','certificareDate': '2016-01-01', 'hours':40,"
					+ "'students':[{'studentName':'student1','cateficateID':'#1'}]}}" ;
			
			sampleJsonObject = new JSONObject(dataString);
			inputJsonObject = new JSONObject(dataString);
			
	
		} catch(Exception e){
		    System.err.println("Error: " + e.getMessage());
		}
		
		/*check data*/
		assertEquals(sampleJsonObject.toString(), inputJsonObject.toString());
		assertEquals(sampleBase64BackgroundImage, inputBase64BackgroundImage);
		
	}


	@When("^I send the background of the certificate to backend$") 
	public void SendBackGround() throws Exception {
		
//		String url = "140.138.xxx.xxx/upload/backgoundImage" ;
//		/*Send background picture by API*/
//		JSONObject response = null;
//		try{
//			HttpConnection connection = new HttpConnection() ;
//			response = connection.Get(url);
//		} catch (IOException e) {
//            e.printStackTrace();
//        }
//		
//	    assertEquals("Success", response.getString("status"));
		
	}

	@When("^I send student and course information to backend$") 
	public void SendInfo() {
		
//		String url = "140.138.xxx.xxx/getCertificates" ;
//		/*Send background picture by API*/
//		JSONObject response = null;
//		try{
//			HttpConnection connection = new HttpConnection() ;
//			response = connection.Post(url, inputJsonObject);
//		} catch (IOException e) {
//            e.printStackTrace();
//        }
//		
//		inputCertificates = response.getString("certificates");
//	    assertEquals("Success", response.getString("status"));
	}

	@Then("^I receive certificates$")
	public void Receive()  {
	    
		/*check certificates*/
		for(int i = 0 ; i < sampleCertificates.length ; i++){
			assertEquals(sampleCertificates[i], inputCertificates[i]);
		}
	}
	
}
