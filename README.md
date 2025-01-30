05/13/2024

# Day 6: MasterClass

- Fundamentals of Software Testing (Back-End)
- Test pyramid

### Fundamentals of Back-end Software Testing:

- Back-end software testing is crucial to ensuring the quality and robustness of applications.
- It occurs in parallel with the development cycle, anticipating errors and increasing the quality of the final product.

## Test Pyramid:

<figure>   <img src="https://1ee1ed924b.cbaul-cdnwnd.com/e5c4fe4592bf06fe7ef86a0e80f403f0/200000021-8d3c58d3c8/700/Test-Pyramid-Eximia-1024x765.png?ph=1ee1ed924b" width="50%"> </figure>

The testing pyramid is a strategy for distributing the different types of tests in relation to their quantity and complexity. It defines testing levels and how many tests should be performed in each one. The base of the pyramid consists of unit tests, followed by integration tests and, at the top, end-to-end (E2E) tests.

1. **Unit Tests** :

    - Performed in the smallest testable unit of code in the application, regardless of integration.
    - They are small, quick and simple to make and maintain.
    - They use "fake" objects to isolate the unit of code under test.
    - They are important because they are quick to run and clearly identify where the problems are if they fail.

2. **Integration Tests** :

    - They test integrated modules to ensure they work correctly together.
    - They are more time-consuming and complex than unit tests, but simpler and faster than E2E tests.
    - Ensure that integrated functionality is still operating as expected.

3. **End-to-End (E2E) Testing** :

    - They simulate the complete application environment and verify that the expected behavior occurs.
    - They run in controlled environments and can be difficult to write and time-consuming to run.
    - They cover the main flows of the application and can identify not-so-trivial failures.

A solid foundation of unit tests is crucial to ensure system stability and maintainability, while user interface tests should be used sparingly due to their fragility and maintenance cost, as well as the need for different types of tests to achieve comprehensive and effective coverage.