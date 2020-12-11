$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Selenium.feature");
formatter.feature({
  "name": "To register in E-learning portal",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Registration by providing mandatory fields like firstname, lastname, e-mail,",
  "description": "Username, pass, Confirm password.\nValidating Confirmation message\nverify the email provided\nCompose a mail and sends it.",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigate to \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on SignUp",
  "keyword": "When "
});
formatter.step({
  "name": "User entered \"\u003cfirstname\u003e\" firstname",
  "keyword": "Then "
});
formatter.step({
  "name": "User entered \"\u003clastname\u003e\" lastname",
  "keyword": "And "
});
formatter.step({
  "name": "User entered \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "name": "User entered \"\u003cemail\u003e\" email",
  "keyword": "And "
});
formatter.step({
  "name": "User entered \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "name": "User confirms \"\u003cpassword1\u003e\" Conf password",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "name": "User validates the name",
  "keyword": "Then ",
  "doc_string": {
    "value": "Dear \u003cfirstname\u003e \u003clastname\u003e,\n\nYour personal settings have been registered."
  }
});
formatter.step({
  "name": "User clicks on HomePage",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify \"\u003cemail\u003e\" email from profile section",
  "keyword": "And "
});
formatter.step({
  "name": "Compose email and send to \"naveen\"",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the message \"The message has been sent to naveen naveen (naveen)\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "email",
        "password",
        "password1"
      ]
    },
    {
      "cells": [
        "Ritabrata",
        "Ghosh",
        "BrunoFernand2930",
        "bf19@manutd.com",
        "Marcus@9678",
        "Marcus@9678"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Registration by providing mandatory fields like firstname, lastname, e-mail,",
  "description": "Username, pass, Confirm password.\nValidating Confirmation message\nverify the email provided\nCompose a mail and sends it.",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumElearning.user_navigate_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on SignUp",
  "keyword": "When "
});
formatter.match({
  "location": "seleniumElearning.user_click_on_SignUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entered \"Ritabrata\" firstname",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumElearning.user_entered_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entered \"Ghosh\" lastname",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumElearning.user_entered_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entered \"BrunoFernand2930\" username",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumElearning.user_entered_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entered \"bf19@manutd.com\" email",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumElearning.user_entered_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entered \"Marcus@9678\" password",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumElearning.user_entered_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User confirms \"Marcus@9678\" Conf password",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumElearning.user_confirms_Conf_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumElearning.user_clicks_on_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates the name",
  "keyword": "Then ",
  "doc_string": {
    "value": "Dear Ritabrata Ghosh,\n\nYour personal settings have been registered."
  }
});
formatter.match({
  "location": "seleniumElearning.user_validates_the_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumElearning.user_clicks_on_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify \"bf19@manutd.com\" email from profile section",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumElearning.verify_email_from_profile_section(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Compose email and send to \"naveen\"",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumElearning.compose_email_and_send_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the message \"The message has been sent to naveen naveen (naveen)\"",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumElearning.verify_the_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});