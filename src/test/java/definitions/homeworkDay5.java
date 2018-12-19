package definitions;

import cucumber.api.java.en.And;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.util.Date;
import java.util.Iterator;

import static org.assertj.core.api.Assertions.*;
import static support.TestContext.getDriver;


public class homeworkDay5 {
    @And("^I go back and forward, then refresh the page$")
    public void iGoBackAndForwardThenRefreshThePage() {
        getDriver().navigate().back();
        getDriver().navigate().forward();
        getDriver().navigate().refresh();
    }

    @And("^I print page details$")
    public void iPrintPageDetails() {
        System.out.println(getDriver().getTitle());
    }

    @And("^I go to \"([^\"]*)\" page$")
    public void iGoToPage(String arg0) throws Throwable {
        String url = "https://www." + arg0 + ".com";
        getDriver().get(url);


    }

    @And("^I change the resolution to \"([^\"]*)\"$")
    public void iChangeTheResolutionTo(String resolution) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        switch (resolution) {
            case "phone":
                getDriver().manage().window().setSize(new Dimension(400, 768));
                break;
            case "desktop":
            default:
                getDriver().manage().window().setSize(new Dimension(1024, 768));
                break;
        }

    }

    @And("^I submitted the required fields$")
    public void iSubmittedTheRequiredFields() {
        getDriver().findElement(By.name("username")).sendKeys("Superman");
        getDriver().findElement(By.name("email")).sendKeys("rolfalcon@gmail.com");
        getDriver().findElement(By.id("password")).sendKeys("Pass123");
        getDriver().findElement(By.id("confirmPassword")).sendKeys("Pass123");
        getDriver().findElement(By.id("name")).click();
        getDriver().findElement(By.id("firstName")).sendKeys("Rolando");
        getDriver().findElement(By.id("middleName")).sendKeys("Falcon");
        getDriver().findElement(By.id("lastName")).sendKeys("Olimpo");
        getDriver().findElement(By.xpath("//button/span[text()='Save']")).click();
        getDriver().findElement(By.xpath("//*[contains(@class, 'agreedToPrivacyPolicy')]//input")).click();


    }

    @And("^I submit the page$")
    public void iSubmitThePage() {
        getDriver().findElement(By.id("formSubmit")).click();
    }
}
