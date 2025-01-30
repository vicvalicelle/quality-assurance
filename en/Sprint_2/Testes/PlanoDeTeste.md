# Test Plan

## Seller Registration on the ServeRest Marketplace

1. **Test Plan Summary** :

    The test plan will be about registering sellers to make sales on the ServeRest Marketplace. Where it should be possible to register, update, list and delete sellers, analyze tests, automation and the traceability matrix.

2. **Test Plan Strategy** :

    - Criteria Analysis and Test Case Creation: A list of test cases that cover all acceptance criteria, including mandatory fields, email and password validation, handling of non-existent users, and scenarios beyond Swagger.

    - Preparing the Test Environment: Configure Postman, the test database and use Swagger.

    - Test Execution: Run each test case in Postman, verify API responses, and document results.

    - Results Analysis and Reporting: Analyze test results and suggest improvements.

3. **Macro Scenarios** :

    - Scenario 1: User Registration (Seller)

        - CT01: User registration successful
        - CT02: User registration failed

    - Scenario 2: User Update

        - CT03: Update existing user successfully
        - CT04: Update of non-existent user (creating new user)
        - CT05: User update failed

    - Scenario 3: User Search

        - CT06: List of users
        - CT07: User search by ID

    - Scenario 4: User Deletion

        - CT08: Successful deletion of existing user
        - CT09: Deletion of non-existent user
        - CT010: Deleting existing user with cart

4. **Candidate Tests for Automation** : Considering cost-benefit, efficiency and test coverage, automating these tests will bring significant advantages over manual testing:

    - Repetitive testing: Cases like CT02 and CT05 that involve testing multiple combinations of invalid data. Automation allows you to run these tests quickly and accurately, ensuring that all validations are tested.
    - Testing with large volumes of data: The CT06 can involve a large volume of data, making manual verification laborious and time-consuming.

5. **Tools** :

    - Postman: To send requests to the API, according to the defined test cases.
    - Swagger: Swagger documentation as a basis for testing.

6. **Important Scenarios and Value Generated** :

    - CT01: User registration successful:
        - Importance: It is the main flow responsible for allowing new sellers to register, if it fails it will not fulfill its basic purpose.
        - Value: Essential for the growth of the platform and the success of the business.
    - CT02: User registration failed:
        - Importance: Avoids inconsistent data in the database, security problems and application failures.
        - Value: Quality of registered data and API security.
    - CT03: Update existing user successfully:
        - Importance: Essential to keeping information correct and relevant.
        - Value: Improves user experience and platform reliability.
    - CT04: Update of non-existent user:
        - Importance: This scenario checks whether the same call with the same data produces the same result.
        - Value: Ensure consistency and avoid creating duplicate users.
    - CT07: User search by ID:
        - Importance: This scenario is essential to access user-specific information.
        - Value: Essential for the functioning of other features.
    - CT08: Successful deletion of existing user:
        - Importance: Deleting users is important to remove outdated or irrelevant data.
        - Value: Ensure the protection of user data and the integrity of the platform.
