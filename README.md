<h1>Purpose</h1>
Using JS, I created a random password generator. The purpose of this random password generator is to offer greater security through the elements of randomness while also setting boundaries by asking the user how long they would like their password to be and if they would like lower and upper case letters. Each prompt will then be validated through the user's response, and the generated password will match the user's criteria.

<h1>User Story</h1>
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

<h1>Acceptance Criteria</h1>
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
