Feature:  To register in E-learning portal

Scenario Outline: Successful Registration by providing mandatory fields like firstname, lastname, e-mail, 
Username, pass, Confirm password.
Validating Confirmation message
verify the email provided
Compose a mail and sends it.

Given User navigate to "http://elearningm1.upskills.in/"
When  User click on SignUp
Then  User entered "<firstname>" firstname
And   User entered "<lastname>" lastname
And   User entered "<username>" username
And   User entered "<email>" email
And   User entered "<password>" password
And   User confirms "<password1>" Conf password
And   User clicks on Register button
Then  User validates the name
      """
      Dear <firstname> <lastname>,

Your personal settings have been registered.
      """
Then  User clicks on HomePage
And   Verify "<email>" email from profile section
And   Compose email and send to "naveen"
And   Verify the message "The message has been sent to naveen naveen (naveen)"

Examples:

| firstname | lastname  |username        |       email   |password    |password1   |
| Ritabrata | Ghosh     |BrunoFernand2930|bf19@manutd.com|Marcus@9678 |Marcus@9678 |

