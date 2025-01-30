# Cinema API Detailed Test Plan:

## Summary:

The Cinema API test plan covers validating movie management and ticket booking functionality, ensuring that any user can browse movies and book tickets, and administrators can create, update, and delete movies.

## Strategy:

- Criteria Analysis and Test Case Creation: A list of test cases that cover all acceptance criteria and scenarios in addition to Swagger. And understand what will be tested in performance, what volume and which metrics will be monitored.
- Test Environment Preparation: Configure the K6 test scripts and the required data mass.
- Test Execution: Execute each test case, verify API responses, document results obtained in Jira.
- Results Analysis and Reporting: Analyze test results and suggest improvements

## API Analysis by Routes (/movies, /tickets):

### Detailed Test Case Matrix - `/movies` Route

**Test Case** | **Description** | **Preconditions** | **Steps** | **Expected Result** | **Result Obtained** | **Automation Candidate**
--- | --- | --- | --- | --- | --- | ---
**CT01** | Movie registration successful | The user is authenticated as an administrator. | 1. Send a POST request to `/movies` with the fields: title, release date, session times, description and other mandatory information. | Film registered successfully, status code 201 (Created), and return of the ID of the created film. | It does not return the message or the ID (in addition to not having authentication) | Yes
**CT02** | Registering a film with an existing title | The user is authenticated as an administrator. | 1. Send a POST request to `/movies` with the title of a movie that already exists. | Validation error, status code 400 (Bad Request). | Does not return 400 and creates a movie with a duplicate name (in addition to not having authentication) | Yes
**CT03** | Untitled Movie Registration | The user is authenticated as an administrator. | 1. Send a POST request to `/movies` without the "title" field. | Validation error, status code 400 (Bad Request), and error message indicating that the "title" field is required. | ✅ | Yes
**CT04** | Registration of a film without a release date | The user is authenticated as an administrator. | 1. Send a POST request to `/movies` without the "launchdate" field. | Validation error, status code 400 (Bad Request), and error message indicating that the "launchdate" field is required. | ✅ | Yes
**CT05** | Film registration without session times | The user is authenticated as an administrator. | 1. Send a POST request to `/movies` without the "showtimes" field. | Validation error, status code 400 (Bad Request), and error message indicating that the "showtimes" field is required. | ✅ | Yes
**CT06** | Film registration with fields filled in incorrectly | The user is authenticated as an administrator. | 1. Sending a POST request to `/movies` with incorrectly filled fields (e.g. date in invalid format). | Validation error, status code 400 (Bad Request), and error message indicating the specific errors in the fields. | ✅ | Yes
**CT07** | Movie registration not being an administrator | The user is authenticated as a regular user. | 1. Send a POST request to `/movies` trying to register a movie. | Validation error, status code 400 (Bad Request), and error message indicating that the user does not have permission to perform this operation. | It doesn't return 400 and creates the movie even though it can't. | Yes
**CT08** | List all movies | - | 1. Send a GET request to `/movies` . | Movie list returned successfully, status code 200 (OK), and data for all movies. | ✅ | Yes
**CT09** | List a movie by existing ID | A movie with the specified ID exists in the database. | 1. Send a GET request to `/movies/{id}` replacing `{id}` with the ID of an existing movie. | Specific movie returned successfully, status code 200 (OK), and movie data corresponding to the ID. | ✅ | Yes
**CT10** | List a movie by non-existent ID | A movie with the specified ID does not exist in the database. | 1. Send a GET request to `/movies/{id}` replacing `{id}` with a non-existent ID. | Resource not found error, status code 404 (Not Found), and error message indicating that the movie was not found. | ✅ | Yes
**CT11** | Movie update successful | The user is authenticated as an administrator and the movie to be updated already exists. | 1. Send a PUT request to `/movies/{id}` with the updated movie data. | Movie updated successfully, status code 200 (OK), and updated movie data returned. | Does not return success message | Yes
**CT12** | Updating a movie with an existing title | The user is authenticated as an administrator and the movie to be updated already exists. | 1. Send a PUT request to `/movies/{id}` with the title of a movie that already exists in the database. | Validation error, status code 400 (Bad Request), and error message indicating that the title is already in use. | Not accepting a film of the same name. | Yes
**CT13** | Untitled Movie Update | The user is authenticated as an administrator and the movie to be updated already exists. | 1. Send a PUT request to `/movies/{id}` without the "title" field. | Validation error, status code 400 (Bad Request), and error message indicating that the "title" field is required. | Shouldn't accept a movie with an empty name | Yes
**CT14** | Movie update with no release date | The user is authenticated as an administrator and the movie to be updated already exists. | 1. Send a PUT request to `/movies/{id}` without the "launchdate" field. | Validation error, status code 400 (Bad Request), and error message indicating that the "launchdate" field is required. | You shouldn't accept a movie with an empty date | Yes
**CT15** | Movie update without session times | The user is authenticated as an administrator and the movie to be updated already exists. | 1. Send a PUT request to `/movies/{id}` without the "showtimes" field. | Validation error, status code 400 (Bad Request), and error message indicating that the "showtimes" field is required. | You shouldn't accept a movie with an empty session | Yes
**CT16** | Movie update with incorrectly filled fields | The user is authenticated as an administrator and the movie to be updated already exists. | 1. Sending a PUT request to `/movies/{id}` with incorrectly filled fields (e.g. date in invalid format). | Validation error, status code 400 (Bad Request), and error message indicating the specific errors in the fields. | You should not accept a film that is filled out incorrectly. | Yes
**CT17** | Movie update not being an administrator | The user is authenticated as a regular user and the movie to be updated already exists. | 1. Send a PUT request to `/movies/{id}` trying to update a movie. | Validation error, status code 400 (Bad Request), and error message indicating that the user does not have permission to perform this operation. | There is no administrator. | Yes
**CT18** | Movie update without ID | The user is authenticated as an administrator. | 1. Send a PUT request to `/movies/` with no existing ID. | Validation error, status code 404, and error message indicating that the ID was not found. | ✅ | Yes
**CT19** | Movie deletion successful | The user is authenticated as an administrator and the movie to be deleted already exists. | 1. Send a DELETE request to `/movies/{id}` replacing `{id}` with the ID of an existing movie. | Movie deleted successfully, status code 204 (No Content), and deletion confirmation returned. | It does not return the status code or the desired message. | Yes
**CT20** | Deleting a movie with a non-existent ID | The user is authenticated as an administrator. | 1. Send a DELETE request to `/movies/{id}` replacing `{id}` with a non-existent ID. | Resource not found error, status code 404 (Not Found), and error message indicating that the movie was not found. | ✅ | Yes
**CT21** | Deleting a movie without being an administrator | The user is authenticated as a regular user. | 1. Send a DELETE request to `/movies/{id}` trying to delete a movie. | Validation error, status code 400 (Bad Request), and error message indicating that the user | There is no administrator | Yes

## Detailed Test Case Matrix** - `/tickets`

**Test Case ID** | **Description** | **Preconditions** | **Steps** | **Expected Result** | **Result Obtained** | **Automation Candidate**
--- | --- | --- | --- | --- | --- | ---
**CT01** | Register ticket successfully | The user is authenticated. | 1. Send a POST request to `/tickets` with the fields: `movieId` , `userId` , `seatNumber` , `price` , `showtime` . | Ticket registered successfully, status code 201 (Created), and return of the created ticket data. | Does not return the expected message. | Yes
**CT02** | Register ticket with invalid `movieId` | The user is authenticated. | 1. Sending a POST request to `/tickets` with an invalid `movieId` . | Validation error, status code 400 (Bad Request), and error message indicating that the `movieId` is invalid. | It does not return the expected status code and creates a ticket even though it cannot. | Yes
**CT03** | Register ticket with invalid `userId` | The user is authenticated. | 1. Send a POST request to `/tickets` with an invalid `userId` . | Validation error, status code 400 (Bad Request), and error message indicating that the `userId` is invalid. | It does not return the expected status code and creates a ticket even though it cannot. | Yes
**CT04** | Register ticket with seat outside the range 0-99 | The user is authenticated. | 1. Send a POST request to `/tickets` with a seat number outside the range 0-99. | Validation error, status code 400 (Bad Request), and error message indicating that the seat is outside the allowed range. | ✅, would improve the response | Yes
**CT05** | Register ticket with price outside the range 0-60 | The user is authenticated. | 1. Send a POST request to `/tickets` with a price outside the range 0-60. | Validation error, status code 400 (Bad Request), and error message indicating that the price is outside the allowed range. | ✅ | Yes
**CT06** | Register ticket without seat number | The user is authenticated. | 1. Send a POST request to `/tickets` without the field. | Validation error, status code 400 (Bad Request), and error message indicating that the field is required. | ✅ | Yes
**CT07** | Register ticket without price | The user is authenticated. | 1. Send a POST request to `/tickets` without the field. | Validation error, status code 400 (Bad Request), and error message indicating that the field is required. | ✅ | Yes
**CT08** | Register ticket without showtime | The user is authenticated. | 1. Send a POST request to `/tickets` without the ticket's showtime field. | Validation error, status code 400 (Bad Request), and error message indicating that the ticket price field is mandatory. | ✅ | Yes
**CT09** | Register a ticket for an already reserved seat | The user is authenticated and the seat has already been reserved. | 1. Send a POST request to `/tickets` with the previously reserved seat number. | Validation error, status code 400 (Bad Request), and error message indicating that the seat has already been reserved. | pass even if you can't | Yes
**CT10** | List tickets | The user is authenticated. | 1. Send a GET request to `/tickets` . | List of tickets returned successfully, status code 200 (OK), and data for all tickets. | ✅ | Yes
**CT11** | List ticket by existing ID | The ticket with the specified ID exists in the database. | 1. Send a GET request to `/tickets/{id}` replacing `{id}` with the ID of an existing ticket. | Specific ticket returned successfully, status code 200 (OK), and ticket data corresponding to the ID. | It gives an error and closes the program | Yes
**CT12** | List ticket by non-existent ID | - | 1. Send a GET request to `/tickets/{id}` replacing `{id}` with a non-existent ID. | Resource not found error, status code 404 (Not Found), and error message indicating that the ticket was not found. | It gives an error and closes the program | Yes
**CT13** | Update ticket successfully | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` with the updated ticket data. | Ticket updated successfully, status code 200 (OK), and updated ticket data returned. | It gives an error and closes the program | Yes
**CT14** | Update ticket with invalid `movieId` | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` with an invalid `movieId` . | Validation error, status code 400 (Bad Request), and error message indicating that the `movieId` is invalid. | It gives an error and closes the program | Yes
**CT15** | Update ticket with invalid `userId` | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` with an invalid `userId` . | Validation error, status code 400 (Bad Request), and error message indicating that the `userId` is invalid. | It gives an error and closes the program | Yes
**CT16** | Update ticket with seat outside range 0-99 | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` with a seat number outside the range 0-99. | Validation error, status code 400 (Bad Request), and error message indicating that the seat is outside the allowed range. | ✅, improved response | Yes
**CT17** | Update ticket with price outside the range 0-60 | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` with a price outside the range 0-60. | Validation error, status code 400 (Bad Request), and error message indicating that the price is outside the allowed range. | ✅ | Yes
**CT18** | Update ticket without `movieId` | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` without the `movieId` field. | Validation error, status code 400 (Bad Request), and error message indicating that the `movieId` field is required. | It gives an error and closes the program | Yes
**CT19** | Update ticket without `userId` | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` without the `userId` field. | Validation error, status code 400 (Bad Request), and error message indicating that the `userId` field is required. | It gives an error and closes the program | Yes
**CT20** | Update ticket without seat number | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` without the seat number field. | Validation error, status code 400 (Bad Request), and error message indicating that the seat number field is mandatory. | ✅ | Yes
**CT21** | Update ticket without ticket price | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` without the ticket price field. | Validation error, status code 400 (Bad Request), and error message indicating that the ticket price field is mandatory. | ✅ | Yes
**CT22** | Update ticket without presentation date | The user is authenticated and the ticket to be updated already exists. | 1. Send a PUT request to `/tickets/{id}` without the submission date field. | Validation error, status code 400 (Bad Request), and error message indicating that the submission date field is mandatory. | ✅ | Yes
**CT23** | Update ticket without valid ID | The user is authenticated and the ticket does not exist. | 1. Send a PUT request to `/tickets/{id}` with a non-existent ID. | Validation error, status code 404, and error message indicating that it was not found. | It gives an error and closes the program | Yes
**CT24** | Update ticket for an already reserved seat | The user is authenticated and the seat has already been reserved. | 1. Send a PUT request to `/tickets/{id}` with the previously reserved seat number. | Validation error, status code 400 (Bad Request), and error message indicating that the seat has already been reserved. | pass even if you can't | Yes
**CT25** | Ticket deletion successful | The user is authenticated and the ticket to be deleted already exists. | 1. Send a DELETE request to `/tickets/{id}` replacing `{id}` with the ID of an existing ticket. | Ticket deleted successfully, status code 201 (OK), and deletion confirmation returned. | It gives an error and closes the program | Yes
**CT26** | Deleting a ticket with a non-existent ID | The user is authenticated. | 1. Send a DELETE request to `/tickets/{id}` replacing `{id}` with a non-existent ID. | Resource not found error, status code 404 (Not Found), and error message indicating that the ticket was not found. | It gives an error and closes the program | Yes

# Performance Test Plan

## Route `/movies` :

**Test** | **Scenario** | **Duration** | **VUs** | **Response Time Limit** | **Failure Threshold (%)**
--- | --- | --- | --- | --- | ---
**Smoke Test** | **POST /movies** | 1s | 5 | ≤ 200 ms | 0%
 | **GET /movies** | 1s | 5 | ≤ 100 ms | 0%
 | **GET /movies/{id}** | 1s | 5 | ≤ 50 ms | 0%
 | **PUT /movies/{id}** | 1s | 5 | ≤ 300 ms | 0%
 | **DELETE /movies/{id}** | 1s | 5 | ≤ 400 ms | 0%
**Load Test** | **POST /movies** | 2 min | 100/s | ≤ 200 ms | ≤ 1%
 | **GET /movies** | 2 min | 100/s | ≤ 100 ms | ≤ 1%
 | **GET /movies/{id}** | 2 min | 100/s | ≤ 50 ms | ≤ 1%
 | **PUT /movies/{id}** | 2 min | 50/s | ≤ 300 ms | ≤ 1%
 | **DELETE /movies/{id}** | 2 min | 30/s | ≤ 400 ms | ≤ 1%
**Soak Test** | **POST /movies** | 5 min | 200/s | ≤ 200 ms | ≤ 2%
 | **GET /movies** | 5 min | 200/s | ≤ 100 ms | ≤ 2%
 | **GET /movies/{id}** | 5 min | 200/s | ≤ 50 ms | ≤ 2%
 | **PUT /movies/{id}** | 5 min | 100/s | ≤ 300 ms | ≤ 2%
 | **DELETE /movies/{id}** | 5 min | 60/s | ≤ 400 ms | ≤ 2%
**Spike Test** | **POST /movies** | 1s | Peak 500 | ≤ 500 ms | ≤ 5%
 | **GET /movies** | 1s | Peak 500 | ≤ 300 ms | ≤ 5%
 | **GET /movies/{id}** | 1s | Peak 500 | ≤ 150 ms | ≤ 5%
 | **PUT /movies/{id}** | 1s | Peak 250 | ≤ 500 ms | ≤ 5%
 | **DELETE /movies/{id}** | 1s | Peak 150 | ≤ 600 ms | ≤ 5%
**Stress Test** | **POST /movies** | 7 min | Progressive | - | Identify faults
 | **GET /movies** | 7 min | Progressive | - | Identify faults
 | **GET /movies/{id}** | 7 min | Progressive | - | Identify faults
 | **PUT /movies/{id}** | 7 min | Progressive | - | Identify faults
 | **DELETE /movies/{id}** | 7 min | Progressive | - | Identify faults

## Route `/tickets` :

**Test** | **Scenario** | **Duration** | **VUs** | **Response Time Limit** | **Failure Threshold (%)**
--- | --- | --- | --- | --- | ---
**Smoke Test** | **POST /tickets** | 1s | 5 | ≤ 300 ms | 0%
 | **GET /tickets** | 1s | 5 | ≤ 300 ms | 0%
 | **GET /tickets/{id}** | 1s | 5 | ≤ 150 ms | 0%
 | **PUT /tickets/{id}** | 1s | 5 | ≤ 400 ms | 0%
 | **DELETE /tickets/{id}** | 1s | 5 | ≤ 500 ms | 0%
**Load Test** | **POST /tickets** | 2 min | 50/s | ≤ 300 ms | ≤ 1%
 | **GET /tickets** | 2 min | 50/s | ≤ 300 ms | ≤ 1%
 | **GET /tickets/{id}** | 2 min | 50/s | ≤ 150 ms | ≤ 1%
 | **PUT /tickets/{id}** | 2 min | 30/s | ≤ 400 ms | ≤ 1%
 | **DELETE /tickets/{id}** | 2 min | 20/s | ≤ 500 ms | ≤ 1%
**Soak Test** | **POST /tickets** | 5 min | 100/s | ≤ 300 ms | ≤ 2%
 | **GET /tickets** | 5 min | 100/s | ≤ 300 ms | ≤ 2%
 | **GET /tickets/{id}** | 5 min | 100/s | ≤ 150 ms | ≤ 2%
 | **PUT /tickets/{id}** | 5 min | 60/s | ≤ 400 ms | ≤ 2%
 | **DELETE /tickets/{id}** | 5 min | 40/s | ≤ 500 ms | ≤ 2%
**Spike Test** | **POST /tickets** | 1s | Peak 250 | ≤ 400 ms | ≤ 5%
 | **GET /tickets** | 1s | Peak 250 | ≤ 400 ms | ≤ 5%
 | **GET /tickets/{id}** | 1s | Peak 250 | ≤ 150 ms | ≤ 5%
 | **PUT /tickets/{id}** | 1s | Peak 150 | ≤ 500 ms | ≤ 5%
 | **DELETE /tickets/{id}** | 1s | Peak 100 | ≤ 600 ms | ≤ 5%
**Stress Test** | **POST /tickets** | 7 min | Progressive | - | Identify faults
 | **GET /tickets** | 7 min | Progressive | - | Identify faults
 | **GET /tickets/{id}** | 7 min | Progressive | - | Identify faults
 | **PUT /tickets/{id}** | 7 min | Progressive | - | Identify faults
 | **DELETE /tickets/{id}** | 7 min | Progressive | - | Identify faults
