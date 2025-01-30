# Day 7: MasterClass

- HTTP and REST API Analysis
- Mind Map
- Complementary Activity

## HTTP and REST API Analysis

- **Critical Analysis of Documentation**

    1. **Structure and Organization**
    2. **Clarity and Objectivity**
    3. **Completeness:** Are all endpoints, methods (GET, POST, PUT, DELETE, etc.), parameters, data types, and response codes documented? Are there sample requests and responses?
    4. **Consistency**
    5. **Accuracy:** Is the information in the documentation correct and up to date?

- **Checking for Pending Issues and Errors**

    1. **Undocumented Endpoints:** Compare the documentation with the actual API implementation. Are there endpoints that are not in the documentation?
    2. **Missing Parameters:** Verify that all required parameters for each endpoint are documented, including their types, whether they are required or optional, and their default values.
    3. **Typing Errors:** Check that the data types of the parameters and responses are correct and correspond to the implementation.
    4. **Incorrect Examples:** Test the examples provided in the documentation to ensure they work as expected.
    5. **Incomplete Response Codes:** Verify that all possible response codes for each endpoint are documented, including error codes and their descriptions.

- From your analysis of the documentation, you can create a **prioritized list of backend validations** :

    1. **Parameter Validation:**
        - Check if mandatory parameters are present.
        - Validate the data types of the parameters.
        - Check if the parameter values are within acceptable ranges.
    2. **Business Rules Validation:**
        - Implement application-specific business rules such as permission checking, data consistency, etc.
    3. **Error Handling and Security Testing:**
        - Ensure that all possible errors are handled and that clear and informative error messages are returned and identify vulnerabilities.

## Mind Map (API)

Creating a mind map of your API can help you visualize the structure, functionality, and usage scenarios of your API. Use colors to make it easier to visualize, keep your mind map up to date, and use it as a guide for creating test scripts.

- Functionality Analysis and Scenario Mapping:

    1. Identify all API endpoints.
    2. List the HTTP methods of each endpoint.
    3. Detail the input parameters for each endpoint, including their types and whether they are required or optional.
    4. List the expected response codes for each type of request.
    5. Map out the main user flows involving the API.

- Mapping for Web Automation:

    1. Identify elements that interact with the API.
    2. Describe user interactions with these elements.
    3. Define the validations to be used in the interface after API calls.

- Mapping for API Automation:

    1. Choose a test automation tool.
    2. Create test scripts that cover the mapped user flows.
    3. Include assertions in your scripts to verify response codes.

## Complementary Activity:

Create a Serverest API mind map (focus on the User Stories selected for the current Sprint). Try to keep it organized and rich in information. You can indicate the data required for the request, the expected response for each operation, the logs and verbs that require authentication if applicable, etc.
