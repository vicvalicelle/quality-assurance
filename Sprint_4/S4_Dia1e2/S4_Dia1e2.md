# Day 1 and 2: MasterClass

- Planning Sprint 4
- Udemy Exploratory Testing Course

# Exploratory Tests

## Introduction:

Exploratory testing focuses on the tester's freedom and creativity to uncover issues that might ultimately pass more structured testing.

**Automated vs. Manual:**

- Automated Testing: Repetitive tasks, functionality verification and regression testing. Saves time and resources, but can present unexpected problems.
- Manual Testing: Essential for exploratory testing, simulating what could go wrong and discovering complex problems.

**Exploratory vs. Scripts:**

- Exploratory Testing: Allows the tester to investigate areas of the software that may not be covered by predefined scripts. They are important for fixing bugs.
- Script-Based Testing: Follows a predefined plan. They are important to prevent certain errors.

**When to Stop Testing?**

- Little time or little budget
- Most important test coverage
- Level of confidence in quality

**Exploratory Test Planning**

1. Define Test Objectives.
2. Identify Focus Areas with the highest risk or complexity.
3. Define a starting point and what you want to explore.
4. Document the problems encountered

## Strategies:

1. **Freestyle:** The tester explores the software without a predefined plan. Allows for unexpected discoveries and may miss important areas.
2. **Scenario-Based:** Scenarios simulate user behavior and uncover issues in common workflows. May not cover all use cases.
3. **Feedback-Based:** Tester uses feedback to investigate reported issues or validate fixes. Focus on real-world issues with high relevance.
4. **Technique-Based:** The tester applies specific testing techniques to test specific functionalities systematically with more complete test coverage, focusing on risk areas.
    - **Equivalence Class:** Divides the input data into groups and tests one value from each group.
    - **Boundary Value:** Tests values at the boundaries of equivalence classes, as this is where errors are most likely to occur.
    - **State Transition:** Tests the different transitions between the states of a system, checking the actions and conditions.
    - **Decision Table:** Tests different combinations of conditions and actions in a system.
    - **Orthogonal Array:** Creates a test suite that covers all possible combinations of input values efficiently.

**People:**

These are fictional characters that represent different types of software users. They help testers understand the needs, goals, behaviors, and frustrations of users, allowing testing to be more realistic, identify specific problems, and improve the user experience.

- Create Personas: Develop detailed personas, including information such as: - Name, age, occupation, level of experience with technology. - Goals for using the software. - Tasks they need to accomplish. - Usage habits. - Frustrations and difficulties.

- Use Personas to Guide Testing: When performing exploratory testing, put yourself in each persona’s shoes and try to use the software the way they would. - What features would this persona use the most? - What problems might they encounter? - What features would they find most useful?

- Adapt Tests to Personas.

**Soap Opera Testing**

Soap Opera Testing is an approach that uses exaggerated scenarios to discover flaws and vulnerabilities in the system. It allows testing the software in extreme and unusual situations, increasing the likelihood of finding hidden flaws.

**How it works:**

1. Scenario Creation: Imagine a dramatic plot involving extreme situations, conflicts, twists and unexpected events that may happen while using the system.
2. Character Definition: Create characters with distinct personalities, different motivations, and goals that lead to unique testing scenarios.
3. Test Execution: Simulate the characters' interactions with the software, exploring different functionalities and forcing the system.
4. Observation and Analysis: Carefully observe the behavior of the software during testing.

**Tours**

Using "tours" is an interesting strategy to organize and execute exploratory tests, each district represents a specific area of the software with its own characteristics and functionalities to be explored.

1. Business District: Ensure the stability, reliability and efficiency of the software in business-critical usage scenarios, core workflows, integrations with external systems, performance in high-demand situations.

- **Testing:** Load and stress testing, security testing, usability testing for advanced users, compatibility testing with different browsers and devices.

1. Historic District: Ensure software continues to function properly after updates and changes, while preserving compatibility with legacy systems and data

- **Testing:** Regression testing, backward compatibility testing, data migration testing, change impact testing.

1. Entertainment District: Ensure that the software is enjoyable, intuitive and accessible for all users.

- **Testing:** Usability testing, user interface testing, accessibility testing, compatibility testing with different screen resolutions and devices.

1. Tourism District: Ensure that new users can understand and use the software easily, without difficulties or frustrations.

- **Testing:** Usability testing for new users, onboarding testing, tutorial and guide testing, basic functionality testing.

1. Hotel District: Ensure that the software adapts to the individual needs and preferences of each user, user settings, profiles, preferences, usage history, recommendations.

- **Tests:** Personalization tests, user settings tests, profile tests, usage history tests, recommendations tests.

## Other Strategies:

**Shoe Test:** Simulates the behavior of a user trying to break the shoe in an unexpected way. This involves entering invalid data, clicking buttons multiple times, trying to access restricted areas, performing actions in an unusual order, system stress, etc.

**Null, Zero, Empty:** Missing or invalid data situations:

- Null: Test how the software handles null fields, null variables, and null references.
- Zero: Test how the software handles calculations involving zero, division by zero, and zero values.
- Empty: Test how the software handles empty fields, empty lists, and other empty data structures.

**Get One, Take One:** Test the behavior of the software when a user tries to get or use a resource that is already being used by another user.

**Bookmark:** Practice of saving the current state of the system while running tests. This allows you to return to a previous state, compare different states, and test different paths from a saved state.

**Sabotage**

- Change data directly in the database
- Test software behavior with invalid or incompatible configurations.
- Stop system processes

**Developer Tools**

Browser developer tools are essential for exploratory testing. They allow you to inspect page elements, monitor requests and responses, debug JavaScript code, and simulate different devices and screen sizes.

**Requests:** Testing the HTTP requests sent by the software to the server is essential to verify that the data is being sent and received correctly, and that authentication and authorization are working.

**Responsiveness:** Testing the software on different devices and screen sizes to ensure that the layout adapts correctly and that the user experience is consistent across all devices.

**Accessibility:** Test software with screen readers, keyboards, and other assistive technologies to ensure it is accessible to people with disabilities.

**Security:** Testing software security involves trying to exploit vulnerabilities that could allow unauthorized access to data, execution of malicious code, theft of information, such as SQL injection testing, etc.

**Database:** Testing the database involves checking whether data is being stored and retrieved correctly, whether SQL queries are being executed efficiently, etc.