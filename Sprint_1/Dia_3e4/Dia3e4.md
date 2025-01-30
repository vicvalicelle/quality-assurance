08/05/2024 and 09/05/2024

# Day 3 and Day 4: MasterClass

- Course Summary: Quick Start in Testing and QA

## Software Testing Fundamentals: 🖥️

#### Introduction to Software Testing:

Defects charge interest, so the damage that bugs can cause includes delays, financial losses, and damage to the company's image. Therefore, they must be addressed as soon as possible.

#### The 7 Fundamentals of Testing (ISTQB):

1. **Testing demonstrates the presence of defects** : Although testing identifies defects, it cannot guarantee that there will be no more.
2. **Exhaustive testing is not possible** : It is impractical to test all possible combinations, so it is necessary to focus on trivial cases and, mainly, on risks and priorities, using a priority analysis.
3. **Early testing** : Starting testing as early as possible is critical, as it is more cost-effective to identify and fix defects early in the development cycle. Discovering problems later can be much more expensive.
4. **Defect clustering** : Typically, most defects are concentrated in small modules of the software. Although they may be distributed heterogeneously, it is common for similar defects to be clustered in specific areas.
5. **Pesticide Paradox** : Repeated testing may not find new defects, so it is essential to revisit and update testing frequently to increase the chance of identifying more errors.
6. **Testing is context-dependent** : The amount and approach of testing depends on the context of the project, including the risks involved. Projects with more risk generally require more testing.
7. **The illusion of error-free** software: A software may appear to be error-free, but that does not guarantee that it will do exactly what the customer asked for. It is important to ensure that the software not only works properly, but also meets the customer's needs and expectations.

#### Testing vs. Quality:

Testing aims to find bugs in the product, while QA works to improve the process and thus the product and prevent errors from recurring.

#### Error x Defect x Failure:

Errors are recognized by the person who makes them, defects are those errors found by third parties and failures occur when defects are not found and corrected and end up being executed or reaching the customer.

#### Types of Tests (ISO 25010):

<figure>   <img src="https://www.impresa24web.it/dev/wp-content/uploads/2020/03/iso-quality-software-768x645.jpg" width="70%"> </figure>

1. Functional Adequacy: Tests whether the software does what it is supposed to do, looking at completeness, correctness and adequacy.

2. Usability: Evaluates the ease of use of the software, considering aspects such as learning, operation, navigation, accessibility and aesthetics.

3. Compatibility: Checks whether the software is compatible and can communicate with other systems or environments.

4. Reliability: Evaluates the software's ability to prevent failures before they happen, its availability and fault tolerance, as well as its ability to recover.

5. Efficiency: Examines the software's performance, its resource utilization, and its ability to meet demands.

6. Maintainability: Analyzes how easily the software can be modified, reused, analyzed, and tested.

7. Portability: Assesses the software's ability to function in different contexts and its ease of adaptation, installation and replacement.

8. Security: Verifies that the software meets security requirements, including confidentiality, integrity, authenticity, and accountability.

### Automated Testing vs Manual Testing:

1. **Automated Tests** :
    - They are executed by automation tools, such as scripts or testing frameworks.
    - They are repetitive and consistent, which helps identify regressions (keeping what is already correct, even when new features are added).
    - They cover specific scenarios and are useful for testing stable features.
    - Benefits: speed, consistency and scalability.
2. **Manual Tests** :
    - Performed by human testers.
    - They are exploratory and adaptable, suitable for testing new features and changes.
    - They include confirmation tests (verification of corrected defects).
    - Benefits: Ability to assess user experience, creativity, and intuition.
    - Limitations: slowness, inconsistency and difficulty in covering all scenarios.

The greater the test coverage (automated or manual), the faster defects can be identified.