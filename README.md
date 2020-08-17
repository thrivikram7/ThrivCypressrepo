Step 1: Create a folder for project and in terminal "npm init"-- will create package.json
Step 2: To install Cypress to project use "npm install --save-dev cypress"
Step 3:  Run this command in terminal "node_modules/.bin/cypress open" this will create the project folders in your project
NOTE: Browsers supported Electon, Chrome, Firefox
Step 4: All the tests will be written under this path "cypress/integration/examples"
Step 5: To run the tests we can open the "Test Runner" and run the test in different browser
        "node_modules/.bin/cypress open"

NOTE: By default Cypress supports Mocha framework so we use Mocha syntax
Step 6: Click on the Test in the "Test Runner" in the preferred browser

#To run Cypress tests from Terminal or command prompt
Step 1: Go to terminal and run the below command
        "node_modules/.bin/cypress run"
this will run the tests in headless mode and default browser is Electron

Step 2: To run the tests in headed mode or viewing on browser run the below command
        "node_modules/.bin/cypress run --headed"
Step 3: To run specific test use the below command
        "node_modules/.bin/cypress run --spec "path to your test""

Step 4: To run the tests on a specific browser use the below command
        "node_modules/.bin/cypress run --spec "path to your test" --browser chrome"

Step 5: To update settings like increase wait time we can update settings in "cypress.json" 
    Example : {defaultCommandTimeout:5000}

#Finding Elements on the webpage
visit() -- get() or navigate() in Selenium
url()--
get() -- findElement() in Selenium
title()-- title() of page in Selenium

tsconfig.json-- added to get the intelliscence to get Cypress commands