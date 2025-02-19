**How to run the tests?**
- Download the repository or "git clone git@github.com:areesha-altaf/cypressAPI.git"
- Open the project in an IDE and install Cypress
- Execute "npm run execute" to run the tests
- The above command is a combination of several scripts that clean the old report, execute the tests headlessly, and generate a new report
- The test results and API responses can be viewed on the console
--------------------------
**Framework structure**
- Tests can be found under cypress/e2e/APITests
- Static data, like series names, can be found under cypress/fixtures
- Reports are populated under cypress/reports/mochawesome.html
- API method definitions can be found under cypress/support/commands.js
- Query parameters, headers, or other details like payloads, can be found under cypress/support/APIConfig.js
- Endpoints can be found under cypress/support/endpoints.js
- Commands to run the tests and generate/clean reports can be found under cypress/package.json
--------------------------
**Additional enhancements for future**
- Capture request and response details in reports for debugging
- Consider a different tool that is API specific, for more efficient testing
- Integrate a different reporter, like Allure Reports, for better test visualization
- Add retry mechanisms for flaky API tests
- Implement test parameterization to run the same test with multiple datasets
- Set up CI/CD integration using GitHub Actions, Jenkins, or GitLab CI
- Implement parallel test execution for faster test runs
- Implement more assertions by checking response schema validation using JSON Schema
