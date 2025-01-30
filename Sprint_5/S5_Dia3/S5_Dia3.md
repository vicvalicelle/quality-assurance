# Day 3: MasterClass

- Principles, types of tests, load generation and common failures of performance tests
- Udemy Course: JMeter - Performance Testing

### Performance test
<details>
<summary>CT-PT Syllabus</summary>

## **1.1 Principles of Performance Testing**

Performance efficiency is categorized in ISO-25010 as a non-functional quality characteristic, which includes three sub-characteristics:

- Time Behavior: Evaluates the response time of a component or system to user or system inputs.
- Resource utilization: Investigates the allocation and utilization of system resources, such as RAM.
- Capacity: Evaluates the behavior of the system within the limits of its capacity, such as number of users or data volumes.

Performance testing takes the form of experimentation and can be conducted iteratively to support system analysis, design, and implementation.

The important principles of performance testing are:

- Alignment with stakeholder expectations.
- Test reproducibility.
- Production of understandable and comparable results.
- Execution on complete or partial systems or in production-like environments.
- Practicality, accessibility and execution within the project deadline.

## **1.2 Types of Performance Test**

- **Performance Test** : Any type of test focused on the performance of the system or component under varying load volumes.
- **Load Testing** : Ability of the system to handle increasing levels of load.
- **Stress Testing** : The ability of the system to handle load spikes that exceed expected workload limits. It also tests the system's resilience to a decrease in available resources.
- **Scalability Testing** : Ability of a system to meet future efficiency requirements, including expansion to more users or large amounts of data.
- **Peak Test** : Evaluates the system's ability to handle sudden bursts of peak loads and return to a steady state.
- **Stress Testing** : System stability over a specific period, checking that there are no issues that could degrade performance or cause failures over time.
- **Concurrency Testing** : Checks the impact of specific actions that occur simultaneously, such as when many users log in at the same time.
- **Capacity Testing** : Determines the number of users and/or transactions a system can support while maintaining acceptable performance.

## **1.3 Testing Performance Test Types**

- **Static Testing** : This involves analyzing the system's performance without running the program. It is especially useful for detecting performance problems that may occur during system design and architecture. Static testing includes requirements reviews, analysis of database and network schemas, and system code reviews.
- **Dynamic Testing** : These are conducted while the system is running. They can be performed at various stages of the software development life cycle, including unit testing, component integration testing, system testing, and system integration testing. It is important for performance testing to be incorporated into the iterative software development life cycle from the beginning. Dynamic performance testing can also be performed using simulators, although it is ideal to test on real hardware as early as possible.

**Load Generation** : To perform various types of performance tests, it is necessary to model, generate, and apply representative loads to the system under test. Loads can be generated in several ways:

- **Load Generation via User Interface** : Suitable when only a small number of users need to be represented.
- **Load Generation Using Groups** : Involves many testers representing real users. This approach is useful for testing globally accessible applications, but the generated load may not be as accurate or reproducible.
- **Load Generation via API (Application Programming Interface)** : Allows you to simulate user interaction with the system under test in a way that is less sensitive to changes in the user interface. Dedicated scripts can be created to call specific API routines.
- **Load Generation using Captured Communication Protocols** : Involves capturing user interaction with the system under test at the communication protocol level and replaying these scripts to simulate a large number of users.

These tests are essential to ensure that the system can handle different loads and conditions while maintaining consistent and stable performance.

## **1.4 Common performance efficiency failure modes and their causes**

**Slow response under all loads** : It can be caused by underlying issues like improper database modeling, network latency, and other background loads.

**Slow response under moderate to heavy load** : Response may degrade unacceptably at loads within allowable limits. This is usually caused by resource saturation or heavy load variations.

**Degraded response over time** : This is a problem where response gradually degrades over time. Typical causes include memory leaks, disk fragmentation, increased network load, file repository growth, and unexpected database growth.

**Inadequate error handling under high load or overshoot** : Here, the response time is acceptable, but error handling is inadequate at high load levels. Common underlying defects include insufficient resources, small queues and stacks, and timeout settings that are too fast.

Specific examples of these problems include a web application that does not respond within an acceptable time frame, a system that fails under a sudden large number of requests, systems that are slow to respond when dealing with large volumes of data, batch processing that cannot complete in a timely manner, and real-time systems that run out of memory when dealing with large dynamic memory demands.

[CT-PT Syllabus](https://bstqb.online/docs/syllabus_ct-pt_1.0br.pdf)

</details>


## **JMeter**

It is an open source load and performance testing tool, allows you to create and run complex load tests to evaluate system performance under different conditions and identify bottlenecks.

**JMeter Components:**

- Logic Controllers: Control the execution order of samplers, allowing you to create complex workflows.
- User Group: Represents a group of virtual users executing the same test plan.
- Samplers: Send requests to the system being tested, such as HTTP, FTP, JDBC requests, etc.
- Listeners: Capture and display test results, such as response times, status codes, and errors.
- Timers: Add pauses between requests to simulate real user behavior.
- Assertions: Verify whether the system's responses meet expectations, such as validating the response content or response time.
- Configuration Elements: Global settings for the test plan, such as HTTP headers, variables, and parameters.
- Preprocessor Elements: Perform actions before the request is sent, such as obtaining data from a CSV file or generating random data.
- Post-processor elements: Perform actions after the request is sent, such as extracting data from the response or storing data in a file.

**Component Execution Order**

1. Configuration Elements: Global configurations are applied to the entire test plan.
2. Pre-Processors: Executed before each sampler.
3. Timers: Add pauses before each sampler.
4. Samplers: Send the request to the system.
5. Post-Processors: Executed after each sampler.
6. Assertions: Verify system responses.
7. Listeners: Capture and display the results.