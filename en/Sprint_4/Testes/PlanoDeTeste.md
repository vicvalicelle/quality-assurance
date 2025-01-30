## ServeRest Test Plan:

### Summary:

The ServeRest application test plan covers the validation of the login, product management, seller registration and cart management functionality of the ServeRest Marketplace API, ensuring that it is possible to register and authenticate seller profiles, have access to product and cart management operations.

### Strategy:

- Criteria Analysis and Test Case Creation: A list of test cases that cover all acceptance criteria and scenarios beyond Swagger.
- Preparing the Test Environment: Configure Postman, the test database and use Swagger.
- Test Execution: Run each test case in Postman, verify API responses, and document results in Jira.
- Results Analysis and Reporting: Analyze test results and suggest improvements

### API Analysis by Routes (/users, /login, /products, /carts):

**User Routes:**

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

**Login Routes:**

- Scenario: User Authentication
    - CT01: Login with valid email and password
    - CT02: Login with valid email and blank password
    - CT03: Login with valid email and incorrect password
    - CT04: Login with blank email and valid password
    - CT05: Login with blank email and password
    - CT06: Login with invalid email format and valid password
    - CT07: Login with valid email and password with less than 5 characters
    - CT08: Login with valid email and password with more than 10 characters
    - CT09: Login with email of unregistered user

**Product Routes:**

- Scenario 1: Register Product
    - CT01: Create product successfully (authenticated)
    - CT02: Create product with duplicate name (authenticated)
    - CT03: Create product without authentication
    - CT04: Create product with invalid data (authenticated)
    - CT05: Create a product without being an administrator
- Scenario 2: Update Product
    - CT06: Update existing product successfully (authenticated)
    - CT07: Update non-existent product (authenticated)
    - CT08: Update product with duplicate name (authenticated)
    - CT09: Update product without authentication
    - CT10: Update product with invalid data (authenticated)
    - CT11: Update product without being an administrator
- Scenario 3: List Products
    - CT12: List all products
    - CT13: List products with valid ID
    - CT14: List products with invalid ID
- Scenario 4: Delete Product
    - CT15: Delete existing product successfully (authenticated)
    - CT16: Delete non-existent product (authenticated)
    - CT17: Delete product from cart (authenticated)
    - CT18: Delete product without authentication
    - CT19: Delete product without being an administrator

**Cart Routes:**

- Scenario 1: Cart Registration
    - CT01: Cart registration with authenticated user
    - CT02: Cart registration with unauthenticated user
    - CT03: Registering a second cart with the same user
    - CT04: Non-existent product registration
    - CT05: Product registration in quantity out of stock
    - CT06: Duplicate product registration
    - CT07: Product registration with incomplete data (no product ID)
- Scenario 2: Cart Listing
    - CT08: Cart Listing
    - CT09: User listing with empty cart
    - CT10: Cart listing by id
- Scenario 3: Cart Deletion
    - CT11: Cart deletion when successfully canceling purchase
    - CT12: Cart deletion without valid token (cancel purchase)
    - CT13: Deleting a non-existent cart (cancel purchase)
    - CT14: Cart deletion after successful purchase completion
    - CT15: Deleting a non-existent cart (checkout)
    - CT16: Cart deletion without valid token (checkout)

**Candidate Tests for Automation:**

Considering cost-benefit, efficiency and test coverage, automating these tests will bring significant advantages over manual testing:

- Core Flow Testing: Must be tested frequently to ensure that these core functionalities are working correctly with each new API version. Such as CT01 (Login), CT01 (Products), CT01 (Users), CT01 (Carts), among others.
- Repetitive testing: Cases that involve testing several combinations of invalid data. Automation allows you to run these tests quickly and accurately, ensuring that all validations are tested and that business rules are applied correctly. Such as CT02 and CT05 (Users) that involve testing several combinations of invalid data.
- Tests with large volumes of data: Those that may involve a large volume of data, making manual verification laborious and time-consuming. Such as CT06 (Users), CT08 (Carts) and CT12 (Products).

**Tools:**

- Postman: For manual exploratory testing and creating test collections.
- Swagger: To generate documentation as a basis for initial test cases.
- Xmind: For creating mind maps for analysis
- Jira: For organizing test planning.

## [Mind Map](ServerRest.xmind) and [Jira](https://victoriavalicelle.atlassian.net/jira/software/projects/SCRUM/boards/1)

![alt text](image.png)
