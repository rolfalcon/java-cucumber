@predefined
Feature: Smoke steps

  @predefined1
  Scenario: Predefined steps for Google
    Given I open url "https://google.com"
    Then I should see page title as "Google"
    Then element with xpath "//input[@name='q']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@name='q']"
    Then I click on element with xpath "//*[@name='btnK']"
    Then I wait for element with xpath "(//a[@href]" to be present
    Then element with xpath "//*[@id='ires']" should contain text "Cucumber"

  @predefined2
  Scenario: Predefined steps for yahoo
    Given I open url "https://www.yahoo.com"
    Then I should see page title as "Yahoo"
    Then element with xpath "//input[@name='p']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@name='p']"
    Then I click on element using JavaScript with xpath "//*[@id='uh-search-button']"
#    Then I wait for element with xpath "//*[@id='ires']" to be present
#    Then element with xpath "//*[@id='ires']" should contain text "Cucumber"

  @predefined3
  Scenario: Predefined steps for bing
    Given I open url "https://www.bing.com"
    Then I should see page title as "Bing"
    Then element with xpath "//input[@name='q']" should be present
    When I type "Behavior Driven Development" into element with xpath "//*[@id='sb_form_q']"
    Then I click on element with xpath "//*[@id='sb_form_go']"

#    * @predefined4 scenario for http://gibiru.com
#  Scenario: Predefined steps for gibiru
#    Given I open url "https://www.gibiru.com"
#    Then I should see page title as "gibiru"
#    Then element with xpath "//input[@name='p']" should be present
#    When I type "Behavior Driven Development" into element with xpath "//input[@name='p']"
#    Then I click on element using JavaScript with xpath "//*[@id='uh-search-button']"
#    Then I wait for element with xpath "//*[@id='ires']" to be present
#    Then element with xpath "//*[@id='ires']" should contain text "Cucumber"


#    * @predefined5 scenario for https://duckduckgo.com
  @predefined5
  Scenario: Predefined steps for duckduckgo
    Given I open url "https://duckduckgo.com"
    Then I should see page title as "DuckDuckGo — Privacy, simplified."
    Then element with xpath "//input[@name='q']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@name='q']"
    Then I click on element using JavaScript with xpath "//*[@id='search_button_homepage']"
#    Then I wait for element with xpath "//*[@id='ires']" to be present
#    Then element with xpath "//*[@id='ires']" should contain text "Cucumber"

#    * @predefined6 scenario for https://swisscows.com
  @predefined6
  Scenario: Predefined steps for swisscows
    Given I open url "https://swisscows.com"
    Then I should see page title as "Swisscows - secure search engine"
    Then element with xpath "//input[@name='query']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@name='query']"
    Then I click on element using JavaScript with xpath "//*[contains(@class,'submit')]"
#    Then I wait for element with xpath "//*[@id='ires']" to be present
#    Then element with xpath "//*[@id='ires']" should contain text "Cucumber"

#    * @predefined7 scenario for https://www.searchencrypt.com
  @predefined7
  Scenario: Predefined steps for searchencrypt
    Given I open url "https://www.searchencrypt.com"
    Then I should see page title as "Search Encrypt - The Privacy Based Search Engine"
    Then element with xpath "(//*[@name='q'])[1]" should be present
    When I type "Behavior Driven Development" into element with xpath "(//*[@name='q'])[1]"
    Then I click on element using JavaScript with xpath "//*[@id='btn-secure-search']"
#    Then I wait for element with xpath "//*[@id='ires']" to be present
#    Then element with xpath "//*[@id='ires']" should contain text "Cucumber"
