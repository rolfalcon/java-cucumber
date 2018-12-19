$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/homeworkDay5.feature");
formatter.feature({
  "name": "Smoke steps",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@predefined"
    }
  ]
});
formatter.scenario({
  "name": "Predefined steps for Google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to \"google\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "homeworkDay5.iGoToPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to \"yahoo\" page",
  "keyword": "And "
});
formatter.match({
  "location": "homeworkDay5.iGoToPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I print page details",
  "keyword": "And "
});
formatter.match({
  "location": "homeworkDay5.iPrintPageDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go back and forward, then refresh the page",
  "keyword": "And "
});
formatter.match({
  "location": "homeworkDay5.iGoBackAndForwardThenRefreshThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I change the resolution to \"phone\"",
  "keyword": "And "
});
formatter.match({
  "location": "homeworkDay5.iChangeTheResolutionTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 3 sec",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForSec(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I change the resolution to \"desktop\"",
  "keyword": "And "
});
formatter.match({
  "location": "homeworkDay5.iChangeTheResolutionTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 3 sec",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForSec(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for Google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://google.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@name\u003d\u0027q\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@name\u003d\u0027q\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//*[@name\u003d\u0027btnK\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//*[@id\u003d\u0027ires\u0027]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027ires\u0027]\" should contain text \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for Yahoo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://www.yahoo.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Yahoo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@id\u003d\u0027uh-search-box\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@id\u003d\u0027uh-search-box\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//button[@id\u003d\u0027uh-search-button\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//div[@id\u003d\u0027web\u0027]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//div[@id\u003d\u0027web\u0027]\" should contain text \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Submit required fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submitted the required fields",
  "keyword": "And "
});
formatter.match({
  "location": "homeworkDay5.iSubmittedTheRequiredFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the page",
  "keyword": "And "
});
formatter.match({
  "location": "homeworkDay5.iSubmitThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/java.feature");
formatter.feature({
  "name": "Java Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@java"
    }
  ]
});
formatter.scenario({
  "name": "Initial Java scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@java"
    },
    {
      "name": "@java1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I write a java step",
  "keyword": "Given "
});
formatter.match({
  "location": "JavaStepDefs.iWriteAJavaStep()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I print url for \"site\" page",
  "keyword": "And "
});
formatter.match({
  "location": "JavaStepDefs.iPrintUrlForPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I print url for \"google\" page",
  "keyword": "And "
});
formatter.match({
  "location": "JavaStepDefs.iPrintUrlForPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I print url for \"sample\" page",
  "keyword": "And "
});
formatter.match({
  "location": "JavaStepDefs.iPrintUrlForPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/lab.feature");
formatter.feature({
  "name": "lab",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sample"
    }
  ]
});
formatter.scenario({
  "name": "Validate desktop UI behavior",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I resize window to 1200 and 800",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iResizeWindowToAnd(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027location\u0027]\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027currentDate\u0027]\" should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027currentTime\u0027]\" should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I resize window to 600 and 800",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iResizeWindowToAnd(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027location\u0027]\" should not be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldNotBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027currentDate\u0027]\" should not be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldNotBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027currentTime\u0027]\" should not be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldNotBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I resize window to 400 and 600",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iResizeWindowToAnd(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"a\" into element with xpath \"//input[@name\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//input[@name\u003d\u0027email\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027username-error\u0027]\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027username-error\u0027]\" should contain text \"2 characters\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"batman@gotham.com\" into element with xpath \"//input[@name\u003d\u0027email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//input[@name\u003d\u0027password\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027email-error\u0027]\" should not be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldNotBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"i.c\" into element with xpath \"//input[@name\u003d\u0027email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//input[@name\u003d\u0027password\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027email-error\u0027]\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBeDisplayed(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat definitions.PredefinedStepDefs.elementWithXpathShouldBeDisplayed(PredefinedStepDefs.java:63)\n\tat ✽.element with xpath \"//*[@id\u003d\u0027email-error\u0027]\" should be displayed(src/test/resources/features/lab.feature:34)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear element with xpath \"//*[@id\u003d\u0027password\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iClearElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027confirmPassword\u0027]\" should be disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBeDisabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"pass123\" into element with xpath \"//*[@id\u003d\u0027password\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"pas123\" into element with xpath \"//*[@id\u003d\u0027confirmPassword\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[contains(text(), \u0027Passwords do not match\u0027)]\" should not be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldNotBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Name dialog",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027name\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@aria-describedby\u003d\u0027nameDialog\u0027]\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Rolando\" into element with xpath \"//*[@id\u003d\u0027firstName\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Falcon\" into element with xpath \"//*[@id\u003d\u0027middleName\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Olimpo\" into element with xpath \"//*[@id\u003d\u0027lastName\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//button/span[text()\u003d\u0027Save\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027name\u0027]\" should have attribute \"value\" as \"Rolando Falcon Olimpo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveAttributeAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Required privacy",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[contains(@class, \u0027agreedToPrivacyPolicy\u0027)][//*[contains(@class, \u0027required\u0027)]]\" should be present",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[contains(@class, \u0027agreedToPrivacyPolicy\u0027)]//input\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Optional items to enter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample7"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027dateOfBirth\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027ui-datepicker-div\u0027]//*[@class\u003d\u0027ui-datepicker-month\u0027]//*[contains(text(), \u0027Dec\u0027)]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027ui-datepicker-div\u0027]//*[@class\u003d\u0027ui-datepicker-year\u0027]//*[contains(text(), \u00271989\u0027)]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027ui-datepicker-div\u0027]//*[@class\u003d\u0027ui-datepicker-calendar\u0027]//*[contains(text(), \u002730\u0027)]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027thirdPartyButton\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I accept alert",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iAcceptAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Submit required fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample8"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"ab\" into element with xpath \"//input[@name\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"batman@gotham.com\" into element with xpath \"//input[@name\u003d\u0027email\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"pass123\" into element with xpath \"//*[@id\u003d\u0027password\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"pass123\" into element with xpath \"//*[@id\u003d\u0027confirmPassword\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027name\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Rolando\" into element with xpath \"//*[@id\u003d\u0027firstName\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Falcon\" into element with xpath \"//*[@id\u003d\u0027middleName\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Olimpo\" into element with xpath \"//*[@id\u003d\u0027lastName\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//button/span[text()\u003d\u0027Save\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[contains(@class, \u0027agreedToPrivacyPolicy\u0027)]//input\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027formSubmit\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@name\u003d\u0027firstName\u0027]\" should have text as \"Rolando\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveTextAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@name\u003d\u0027middleName\u0027]\" should have text as \"Falcon\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveTextAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@name\u003d\u0027lastName\u0027]\" should have text as \"Olimpo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveTextAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@name\u003d\u0027name\u0027]\" should have text as \"Rolando Falcon Olimpo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveTextAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@name\u003d\u0027username\u0027]\" should have text as \"ab\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveTextAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@name\u003d\u0027email\u0027]\" should have text as \"batman@gotham.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveTextAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[contains(text(), \u0027pass123\u0027)]\" should not be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldNotBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@name\u003d\u0027password\u0027]\" should have text as \"[entered]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveTextAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@name\u003d\u0027agreedToPrivacyPolicy\u0027]\" should have text as \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveTextAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "datepicker",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample9"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027dateOfBirth\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027ui-datepicker-div\u0027]\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"(//*[@id\u003d\u0027ui-datepicker-div\u0027]//*[@class\u003d\u0027ui-datepicker-month\u0027]/option)[12]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@class\u003d\u0027ui-datepicker-year\u0027]/*[@value\u003d\u00271989\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@class\u003d\u0027ui-datepicker-calendar\u0027]//*[text()\u003d\u002730\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@id\u003d\u0027dateOfBirth\u0027]\" should have attribute \"value\" as \"12/30/1989\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldHaveAttributeAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "iframes",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sample"
    },
    {
      "name": "@sample10"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://skryabin.com/webdriver/html/sample.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I switch to iframe with xpath \"//iframe[@name\u003d\u0027additionalInfo\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iSwitchToIframeWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"John Doe\" into element with xpath \"//*[@id\u003d\u0027contactPersonName\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"21321322\" into element with xpath \"//*[@id\u003d\u0027contactPersonPhone\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I switch to default content",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iSwitchToDefaultContent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/predefined.feature");
formatter.feature({
  "name": "Smoke steps",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@predefined"
    }
  ]
});
formatter.scenario({
  "name": "Predefined steps for Google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://google.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@name\u003d\u0027q\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@name\u003d\u0027q\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@name\u003d\u0027btnK\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.14.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Rolandos-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:18fd:a9a9:de0c:15b5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u00271.8.0_192\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600229 (3fae4d0cda5334..., userDataDir: /var/folders/pn/xwlm4g2533q...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:55713}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: e2db4820757ace1e19292008cba11223\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat definitions.PredefinedStepDefs.iClickOnElementWithXpath(PredefinedStepDefs.java:98)\n\tat ✽.I click on element with xpath \"//*[@name\u003d\u0027btnK\u0027]\"(src/test/resources/features/predefined.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "I wait for element with xpath \"(//a[@href]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027ires\u0027]\" should contain text \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for yahoo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://www.yahoo.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Yahoo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@name\u003d\u0027p\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@name\u003d\u0027p\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//*[@id\u003d\u0027uh-search-button\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for bing",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://www.bing.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Bing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@name\u003d\u0027q\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//*[@id\u003d\u0027sb_form_q\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@id\u003d\u0027sb_form_go\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for duckduckgo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://duckduckgo.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"DuckDuckGo — Privacy, simplified.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@name\u003d\u0027q\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@name\u003d\u0027q\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//*[@id\u003d\u0027search_button_homepage\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for swisscows",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://swisscows.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Swisscows - secure search engine\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@name\u003d\u0027query\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@name\u003d\u0027query\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//*[contains(@class,\u0027submit\u0027)]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for searchencrypt",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined7"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://www.searchencrypt.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Search Encrypt - The Privacy Based Search Engine\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"(//*[@name\u003d\u0027q\u0027])[1]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"(//*[@name\u003d\u0027q\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//*[@id\u003d\u0027btn-secure-search\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});