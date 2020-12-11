package steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import steps.Registration;
import steps.MailComp;

public class seleniumElearning {
	
	public static WebDriver driver;
	
	Registration reg;
	MailComp mcomp;
	
	
	
	@Before
	 public void setUp() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\RitabrataGhosh\\eclipse-workspace\\SeleniumCucumber\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(70, TimeUnit.SECONDS);
		
		reg = new Registration(driver);
		mcomp = new MailComp(driver);
	}
	
	@After
	public void tearDown(Scenario scenario) {
		//Screenshot on failure
		if(scenario.isFailed()) {
			
			byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotBytes,"image/png");
		}
		
		if(driver!=null)
		{driver.quit();}
	}
	
	
	@Given("User navigate to {string}")
	public void user_navigate_to(String url) {
		driver.get(url);
	}

	@When("User click on SignUp")
	public void user_click_on_SignUp() {
		reg.clickSignup();
	   
	}

	@Then("User entered {string} firstname")
	public void user_entered_firstname(String firstname) {
	    reg.firstname(firstname);
	}

	@And("User entered {string} lastname")
	public void user_entered_lastname(String lastname) {
	    reg.lastname(lastname);
	}
	
	@And("User entered {string} email")
	public void user_entered_email(String email) {
	    reg.email(email);
	}
	
	@And("User entered {string} username")
	public void user_entered_username(String username) {
		reg.username(username);
	}


	@And("User entered {string} password")
	public void user_entered_password(String password) {
		 reg.password(password);
	}

	@And("User confirms {string} Conf password")
	public void user_confirms_Conf_password(String password1) {
		 reg.confpassword(password1);
	}

	@And("User clicks on Register button")
	public void user_clicks_on_Register_button() {
	    reg.regbutton();
	}

	@Then("User validates the name")
	public void user_validates_the_name(String docString) {
	    String actualMessage = reg.nameveri();
	    Assert.assertEquals(docString, actualMessage);
	    System.out.println("Message Verified");
	}
	
	
	@Then("User clicks on HomePage")
	public void user_clicks_on_HomePage() {
	    mcomp.HomePage();
	}

	@And("Verify {string} email from profile section")
	public void verify_email_from_profile_section(String email) {
	    mcomp.profile();
	    String actualEmail = mcomp.mailveri();
	    Assert.assertEquals(email, actualEmail);
	    System.out.println("Email verified");
	}

	@And("Compose email and send to {string}")
	public void compose_email_and_send_to(String SenderEmail) throws InterruptedException {
	    mcomp.Compose();
	    mcomp.recipient(SenderEmail);
	    Thread.sleep(3000);
	    mcomp.enter();
	    mcomp.messagetitile();
	    mcomp.mailbody();
	    mcomp.sendClick();
	}

	@And("Verify the message {string}")
	public void verify_the_message(String conmessage) {
		String confirmessage = mcomp.messagveri();
		Assert.assertEquals(conmessage, confirmessage);
	    System.out.println("Message Confirmed");
	}






}
