package definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

import java.sql.SQLOutput;

public class JavaStepDefs {
    @Given("^I write a java step$")
    public void iWriteAJavaStep() {
        String firstName="Roland";
        String lastName="Olimpo";
        String favoriteColor ="black";

        System.out.println(firstName + lastName + favoriteColor);
    }

    @And("^I write something stupid$")
    public void iWriteSomethingStupid() {
    }

    @And("^I write something \"([^\"]*)\"$")
    public void iWriteSomething(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println(arg0);

    }

    @And("^I do actions with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iDoActionsWithAnd(String str1, String str2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println();
        System.out.println(str1.toLowerCase()+ str2.toLowerCase());
        System.out.println(str1.toUpperCase()+ str2.toUpperCase());
        System.out.println(str1.length() + str2.length());
        System.out.println(str1.equals(str2));
        System.out.println(str1.equalsIgnoreCase(str2));
        System.out.println(str2.contains("ora"));


    }

    @And("^I compare \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iCompareAnd(String str1, String str2) throws Throwable {
        if (str1.equals(str2)) {
            System.out.println(str1 + " equals to " + str2);
        }
        else {
            System.out.println(str1 + " not equals to " + str2);
        }
    }

    @And("^I print url for \"([^\"]*)\" page$")
    public void iPrintUrlForPage(String arg0) throws Throwable {
        if (arg0.equalsIgnoreCase("google")) {
            System.out.println("https://www.google.com");
        }
        else if (arg0.equalsIgnoreCase("sample")) {
            System.out.println("https://skryabin.com/webdriver/html/sample.html");
        }
        else {
            System.out.println("Sample or Google not typed");
        }
    }
}
