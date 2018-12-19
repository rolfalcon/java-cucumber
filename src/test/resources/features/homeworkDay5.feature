@predefined
Feature: Smoke steps

  @predefined1
  Scenario: Predefined steps for Google
    Given I go to "google" page
    And I go to "yahoo" page
    And I print page details
    And I go back and forward, then refresh the page
    And I change the resolution to "phone"
    And I wait for 3 sec
    And I change the resolution to "desktop"
    And I wait for 3 sec

  @predefined2
  Scenario: Predefined steps for Google
    Given I open url "https://google.com"
    Then I should see page title as "Google"
    Then element with xpath "//input[@name='q']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@name='q']"
    Then I click on element using JavaScript with xpath "//*[@name='btnK']"
    Then I wait for element with xpath "//*[@id='ires']" to be present
    Then element with xpath "//*[@id='ires']" should contain text "Cucumber"

  @predefined3
  Scenario: Predefined steps for Yahoo
    Given I open url "https://www.yahoo.com"
    Then I should see page title as "Yahoo"
    Then element with xpath "//input[@id='uh-search-box']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@id='uh-search-box']"
    Then I click on element using JavaScript with xpath "//button[@id='uh-search-button']"
    Then I wait for element with xpath "//div[@id='web']" to be present
    Then element with xpath "//div[@id='web']" should contain text "Cucumber"

  @predefined4
  Scenario: Submit required fields
    Given I open url "https://skryabin.com/webdriver/html/sample.html"
    And I submitted the required fields
    And I submit the page