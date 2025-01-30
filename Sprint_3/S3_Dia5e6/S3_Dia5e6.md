# Day 5 and 6: MasterClass

- Risk and Impact
- Test Cycle
- Activity: Jira Usage/Migration + Test Cycles

## Risk and Impact

Risk and impact analysis allows you to optimize resources and ensure the quality of the final product. Applying risk-based testing directs efforts to critical areas, maximizing process efficiency.

**Risk Identification**

- Stakeholder meetings: Gather information to identify concerns and areas of risk.
- Failure History: Analyze defects in previous versions or similar projects to identify patterns and potential problems.
- Inside-out strategy: Start with the internal components of the software and identify the risks associated with each one.
- Outside-in strategy: Analyze the software from the user's perspective, identifying risks related to functionality and user experience.
- Assessment of application complexity: More complex areas tend to have greater risk.

**Risk Matrix**

Once risks have been identified, it is essential to prioritize them to determine which ones require immediate attention. The risk matrix cross-references the probability of a risk occurring with the impact it would have if it did occur, facilitating decision-making and resource allocation.

<figure>   <img src="https://blog.aevo.com.br/wp-content/uploads/2021/07/Matriz-de-risco-e-impacto.jpg" width="60%"> </figure>

Risks that are positioned in the upper right quadrants of the matrix (high probability and high impact) are the most critical and should be prioritized.

**Definition of Mitigation Strategies**

- Specific tests: Develop test cases that focus on prioritized risks.
- Code review: Perform reviews to identify and fix issues that could lead to risks.
- Redesign: In extreme cases, it may be necessary to redesign parts of the software to eliminate or reduce risks.

**Pros and Cons of Applying Risk-Based Testing**

Pros:

- Focus on the most important tests.
- Avoid unnecessary testing.
- Increases the likelihood of finding and fixing critical defects.

Cons:

- Risk of neglecting low-risk areas
- The values assigned to risks can be subjective, so it is necessary to discuss the proposed values with the team.

**Risks x Uncertainties**

- Risks: Undesirable events with known probability and impact.
- Uncertainties: Events that may affect the project, but whose probability and impact are unknown.

While risks can be managed with mitigation strategies, uncertainties require constant monitoring and adaptation of the plan.

## **Test Cycle**

The software testing cycle ensures the quality and reliability of the software, from initial analysis to final delivery.

**Test Cycle Phases**

1. **Analysis and Validation:** Ensure that software requirements are clear, testable and that an appropriate testing strategy is defined.
2. **Planning:** Determine the order in which tests will be executed, align development deliverables with tests, and identify dependencies between tests.
3. **Detailing:** Specify the execution steps for each test, decide which tests will be automated, and ensure that the execution order is logical and efficient.
4. **Environment:** Set up the test environment to replicate the production environment as closely as possible.
5. **Execution:** Execute tests according to the test plan, document the results, and identify defects.
6. **Report:** Test results, including defects found and tests that were not performed.

**Importance of Test Lifecycle Management**

- Identification and correction of defects before delivery to the end user.
- Prevention of rework and late corrections.
- Increased efficiency.
- Greater confidence in the software.

**Life Cycle Models**

- Waterfall model: Linear and sequential approach, in which each phase is completed before starting the next.
- V-model: Emphasizes the relationship between development and testing, with testing planned in parallel with development.
- Scrum model: Software is developed and tested in repetitive cycles, with feedback and improvements at each iteration.

**Test Levels**

- **Component testing:** Tests individual units of code (functions, modules) in isolation.
- **Integration testing:** Tests the interaction between integrated components.
- **System Testing:** Tests the complete system, including all functionalities and integrated components.
- **Acceptance testing:** Tests whether the system meets user requirements and is ready to be used in production.

**Test Types**

- **Functional testing:** Verifies that the software works as expected, meeting the functional requirements.
- **Non-functional testing:** Evaluates non-functional aspects of the software, such as performance, usability, etc.
- **Black box testing:** Tests the software without knowledge of the internal code, focusing on the inputs and outputs.
- **White box testing:** Tests the software with knowledge of the internal code, focusing on the logic and structure of the code.
- **Retest:** Repeats a failed test after a defect has been fixed.
- **Regression testing:** Tests whether changes to the software have not introduced new defects into previously tested features.