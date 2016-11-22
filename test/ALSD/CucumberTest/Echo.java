package ALSD.CucumberTest;

public class Echo {
	private final String echo;
	
	public Echo(String echo) {
		this.echo = echo;
	}
	
	public String askEcho() {
		return "Hello " + echo + "!";
	}

}
