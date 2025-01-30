# Day 4: MasterClass

- Issue Management
- Dynamics

## Issue Management

### Test Report

#### Execution status of a test case

- Open: Not yet executed.
- Running: is running.
- Passed: It has been executed and has no bugs linked to the flow.
- Failed: It was executed and there is a bug in the flow.
- Blocked: Some external action has blocked the flow.
- Canceled: Will not be executed.

#### **Jira Types: Bug or Acceptance Issue**

During the acceptance stage, the client will open bug requests created during system approval for verification. The acceptance issue type can be activated in JIRA for client requests, thus making it easier to track what was opened by the internal team or client.

#### **How to identify a customer request:**

Is the problem you encountered a bug or an improvement?

The improvement arises to provide some benefit in the software and goes through project management for verification, while the error will impact on obtaining the expected result, it does not work as defined by the client.

#### **How to classify bug in dev/analysis/mass/environment**

**DEV:** Occurs due to a development failure.

**ANALYSIS:** Functional and technical specifications that were incorrectly prepared or that do not meet the customer's needs.

**MASS:** Inconsistency in data used for testing.

**ENVIRONMENT:** Failure in the environment being used for testing.

#### How to create issues?

1. Project: Name of the project.

2. Type: The nature of the issue (bug, enhancement, task, etc.).

3. Summary: Describes the issue concisely.

4. Description and Steps: Details the problem or task, along with context, steps for reproduction, expected and achieved behavior, impact, and requirements.

5. Reporter: Who is reporting the issue.

6. Priority: The urgency of the issue (low, medium, high, or critical).

7. Category: Classify the issue into groups (such as interface, backend, etc.) to make organizing and filtering easier.

## Dynamics

1. Create a bug based on exploratory tests of the ServeRest API;
2. Prioritize the bug that was created;
3. Link the bug to the corresponding Epic and Story;
4. Classify the cause of the bug into dev/analysis/mass/environment.

<figure>   <img src="image.png" width="80%"> </figure>
<figure>   <img src="image-1.png" width="50%"> </figure>
<figure>   <img src="image-2.png" width="50%"> </figure>
