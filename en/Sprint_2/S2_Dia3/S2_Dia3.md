# Day 3: MasterClass

- Validations and best practices in API testing
- Types of errors

## Validations to perform APIs

They are crucial to ensure the security, reliability and proper functioning of the application.

**Essential Validations:**

1. **Status Code Validation:**
    - Checks whether the API returns the correct status code for each request.
2. **Response Body Validation:**
    - Validates the data types of each field.
    - Checks if required fields are present and if values are within expected limits.
3. **Header Validation:**
    - Checks the response headers.
    - Validates authentication headers.
4. **Business Rules Validation:**
    - Implement specific validations of the application's business rules.

## Best practices for testing APIs

**1. Understand the Project:**

- API Purpose.
- Target Audience.
- Workflows and possible scenarios.
- Dependencies with other applications.

**2. Documentation:**

- Clear and Up to Date.
- Documentation Tools.

**3. Validation.**

**4. Security:**

- Authentication and Authorization.
- Input Validation.
- Protection against Attacks.
- Security Testing.

## How to perform functional testing on Rest APIs

Functional tests focus on verifying that the API meets the functional requirements and that the endpoints return the correct responses to the requests.

1. **Identify Test Scenarios:**
    - Map out the main API workflows.
    - Define the different use cases, such as an unauthenticated user trying to access a restricted resource, etc.
    - Consider the limits and extreme values of the input parameters.
2. **Create the Test Cases:**
    - For each test scenario, create a test case that describes:
        - The request to be sent.
        - The expected answer.
        - The answers to be checked.
3. **Choose Test Tool.**

<figure>   <img src="https://www.business2community.com/wp-content/uploads/2020/10/eb3e27e7-api-testing-2.png" width="50%"> </figure>

1. **Implement the Tests.**
2. **Run the Tests:**
    - Run tests regularly.
    - Analyze the test results and correct any errors found.

## Error Types (Back-End)

Classifying backend errors is crucial for directing remediation efforts and prioritizing testing.

**1. Severity: Critical, Priority: Urgent, Risk: High:** Completely prevents the application from functioning, making it unusable. Requires immediate correction before any other activity.

**2. Severity: High, Priority: High, Risk: High:**

Affects important functionality, generates incorrect results, or compromises usability. Should be fixed with high priority, either before release or in an urgent update.

**3. Severity: Medium, Priority: High, Risk: Medium:**

They generate unexpected results in specific functionalities or affect performance. They should be fixed, but can be postponed in exceptional cases.

**4. Severity: Low, Priority: Medium, Risk: Low:**

Issues that affect only a small part. They may be fixed in future releases or together with others.

**5. Severity: Low, Priority: Low, Risk: Low:**

Usually cosmetic or minor inconsistencies that do not affect functionality or usability. They may be fixed in future versions if time and resources are available.

**Errors Caused by Documentation:**

Documentation is essential to the software development and testing process, and errors in this area can generate significant problems. For example: incomplete, outdated, ambiguous, incorrect and even poorly organized documentation.

**Impact:**

- Increased Test Time.
- Delayed Delivery.
- Increased Cost.
- Decrease in Quality.

**Mass Data Errors in QA:**

**Impact:**

- Performance Issues.
- Application Failures.
- Security Vulnerabilities.
- Difficulty in Reproducing Errors.

### ARTICULATING KNOWLEDGE:

Based on the types presented in the lesson (and going further), how could you and your team act preventively on each of them?

Through detailed and up-to-date documentation, realistic test environments, automating tests to ensure they are executed consistently across different environments, and continuous monitoring of the test and production environment to quickly identify and correct any problems. This ensures the effectiveness of the tests and the quality of the final software.
