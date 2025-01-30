# Day 5: MasterClass

- API Test Coverage
- Tests candidates for automation

## API Test Coverage

Coverage criteria help assess the completeness and effectiveness of API testing.

- Input Coverage:

    - **Path Coverage:** Ensures that all API endpoints have been tested at least once.
    - **Operator Coverage:** Evaluates whether all HTTP methods of the API have been tested and whether they respond correctly to different types of requests.
    - **Parameter Coverage:** Verifies that all input parameters (query parameters, path parameters, headers) of each endpoint have been tested and that the behavior is correct.
    - **Parameter Value Coverage:** Tests different valid and invalid values for each input parameter, identifying how the API handles expected and unexpected inputs.
    - **Content-Type Coverage:** Tests different content formats (JSON, XML, etc.) sent and received by the API. Ensuring that the API can process and generate different types of data.
    - **Operation Flow:** Tests different sequences of API calls and whether they work correctly in complex, interdependent workflows.

- Output Coverage:

    - **Response Properties Body Coverage:** Verifies that all properties and fields in the API response body have been tested and are returning the correct data in the expected format.
    - **Status Code Coverage:** Tests whether all API HTTP status codes are covered by the tests.

## Candidate Tests for Automation

Test automation can lead to increased efficiency, reduced human error, and increased test coverage. However, not all tests are suitable for automation.

- **Critical Flows:** Tests that cover the most important and frequent user flows are great candidates for automation, as automating these ensures that essential functionality is always working correctly.
- **Regression Testing:** Automating regression testing, which checks that new changes to the code have not altered existing functionality, is essential to ensuring stability.
- **Smoke Tests:** Quick tests that check the overall health of the system as they can be run to ensure the system is functioning at a basic level before performing more detailed tests when the system is updated.
- **High Risk:** Tests that cover areas of the system with a high risk of failure or that, if they fail, could have a significant impact on the business, are a priority for automation.
- **Repetitive Tasks:** Tests that are repetitive and time-consuming to run manually, prone to human error, or even to ensure consistency of user experience. Automating these tests allows you to run tests more frequently and obtain more consistent, efficient, and reliable results.

<figure>   <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/regisleandro/images/501756/Picture3.png" width="70%"> </figure>

**Other Factors to Consider**

- System stability
- Cost-benefit
- Tool availability
- If they are new demands