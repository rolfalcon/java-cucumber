@sample
  Feature: lab

    @sample1
    Scenario: Validate desktop UI behavior
      Given I open url "https://skryabin.com/webdriver/html/sample.html"
      When I resize window to 1200 and 800
      Then element with xpath "//*[@id='location']" should be displayed
      And element with xpath "//*[@id='currentDate']" should be displayed
      And element with xpath "//*[@id='currentTime']" should be displayed
      When I resize window to 600 and 800
      Then element with xpath "//*[@id='location']" should not be displayed
      And element with xpath "//*[@id='currentDate']" should not be displayed
      And element with xpath "//*[@id='currentTime']" should not be displayed
      When I resize window to 400 and 600
      
    @sample2
    Scenario: User name
      Given I open url "https://skryabin.com/webdriver/html/sample.html"
      When I type "a" into element with xpath "//input[@name='username']"
      And I click on element with xpath "//input[@name='email']"
      Then element with xpath "//*[@id='username-error']" should be displayed
      And element with xpath "//*[@id='username-error']" should contain text "2 characters"

    @sample3
    Scenario: email
      Given I open url "https://skryabin.com/webdriver/html/sample.html"
      When I type "batman@gotham.com" into element with xpath "//input[@name='email']"
      And I click on element with xpath "//input[@name='password']"
      Then element with xpath "//*[@id='email-error']" should not be present
      When I type "i.c" into element with xpath "//input[@name='email']"
      And I click on element with xpath "//input[@name='password']"
#      Then element with xpath "//*[@id='email-error']" should contain text "Please enter a valid email address."
      Then element with xpath "//*[@id='email-error']" should be displayed
      
    @sample4
    Scenario: password
      Given  I open url "https://skryabin.com/webdriver/html/sample.html"
      When I clear element with xpath "//*[@id='password']"
      Then element with xpath "//*[@id='confirmPassword']" should be disabled
      When I type "pass123" into element with xpath "//*[@id='password']"
      And I type "pas123" into element with xpath "//*[@id='confirmPassword']"
      Then element with xpath "//*[contains(text(), 'Passwords do not match')]" should not be displayed
      
    @sample5
    Scenario: Name dialog
      Given  I open url "https://skryabin.com/webdriver/html/sample.html"
      When I click on element with xpath "//*[@id='name']"
      Then element with xpath "//*[@aria-describedby='nameDialog']" should be displayed
      Then I type "Rolando" into element with xpath "//*[@id='firstName']"
      Then I type "Falcon" into element with xpath "//*[@id='middleName']"
      Then I type "Olimpo" into element with xpath "//*[@id='lastName']"
      Then I click on element with xpath "//button/span[text()='Save']"
      Then element with xpath "//*[@id='name']" should have attribute "value" as "Rolando Falcon Olimpo"

    @sample6
    Scenario: Required privacy
      Given I open url "https://skryabin.com/webdriver/html/sample.html"
      When element with xpath "//*[contains(@class, 'agreedToPrivacyPolicy')][//*[contains(@class, 'required')]]" should be present
      Then I click on element with xpath "//*[contains(@class, 'agreedToPrivacyPolicy')]//input"
      
    @sample7
    Scenario: Optional items to enter
      Given I open url "https://skryabin.com/webdriver/html/sample.html"
      When I click on element with xpath "//*[@id='dateOfBirth']"
      Then I click on element with xpath "//*[@id='ui-datepicker-div']//*[@class='ui-datepicker-month']//*[contains(text(), 'Dec')]"
      Then I click on element with xpath "//*[@id='ui-datepicker-div']//*[@class='ui-datepicker-year']//*[contains(text(), '1989')]"
      Then I click on element with xpath "//*[@id='ui-datepicker-div']//*[@class='ui-datepicker-calendar']//*[contains(text(), '30')]"
      And I click on element with xpath "//*[@id='thirdPartyButton']"
      Then I accept alert

    @sample8
    Scenario: Submit required fields
      Given I open url "https://skryabin.com/webdriver/html/sample.html"
      When I type "ab" into element with xpath "//input[@name='username']"
      And I type "batman@gotham.com" into element with xpath "//input[@name='email']"
      And I type "pass123" into element with xpath "//*[@id='password']"
      And I type "pass123" into element with xpath "//*[@id='confirmPassword']"
      And I click on element with xpath "//*[@id='name']"
      And I type "Rolando" into element with xpath "//*[@id='firstName']"
      And I type "Falcon" into element with xpath "//*[@id='middleName']"
      And I type "Olimpo" into element with xpath "//*[@id='lastName']"
      And I click on element with xpath "//button/span[text()='Save']"
      And I click on element with xpath "//*[contains(@class, 'agreedToPrivacyPolicy')]//input"
      And I click on element with xpath "//*[@id='formSubmit']"
      Then element with xpath "//*[@name='firstName']" should have text as "Rolando"
      Then element with xpath "//*[@name='middleName']" should have text as "Falcon"
      Then element with xpath "//*[@name='lastName']" should have text as "Olimpo"
      Then element with xpath "//*[@name='name']" should have text as "Rolando Falcon Olimpo"
      Then element with xpath "//*[@name='username']" should have text as "ab"
      Then element with xpath "//*[@name='email']" should have text as "batman@gotham.com"
      Then element with xpath "//*[contains(text(), 'pass123')]" should not be present
      Then element with xpath "//*[@name='password']" should have text as "[entered]"
      Then element with xpath "//*[@name='agreedToPrivacyPolicy']" should have text as "true"
      
    @sample9
    Scenario: datepicker
      Given I open url "https://skryabin.com/webdriver/html/sample.html"
      When I click on element with xpath "//*[@id='dateOfBirth']"
      Then element with xpath "//*[@id='ui-datepicker-div']" should be displayed
      #Then I click on element with xpath "//*[@id='ui-datepicker-div']//*[@class='ui-datepicker-month']//*[contains(text(), 'Dec')]"
      Then I click on element with xpath "(//*[@id='ui-datepicker-div']//*[@class='ui-datepicker-month']/option)[12]"
      Then I click on element with xpath "//*[@class='ui-datepicker-year']/*[@value='1989']"
      Then I click on element with xpath "//*[@class='ui-datepicker-calendar']//*[text()='30']"
      Then element with xpath "//input[@id='dateOfBirth']" should have attribute "value" as "12/30/1989"
  

    @sample10
    Scenario: iframes
      Given I open url "https://skryabin.com/webdriver/html/sample.html"
      When I switch to iframe with xpath "//iframe[@name='additionalInfo']"
      And I type "John Doe" into element with xpath "//*[@id='contactPersonName']"
      And I type "21321322" into element with xpath "//*[@id='contactPersonPhone']"
      And I switch to default content


      



