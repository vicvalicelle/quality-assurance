# Day 2: Agile

- Video: Why should I test my API performance?
- Video: Lessons Learned and Performance Testing Process
- Section 10 of the Udemy course: JMeter - Performance Testing

### **Why Test API Performance?**

Testing API performance is necessary to ensure that it works efficiently and reliably under different load conditions.

**What are Non-Functional Requirements and Performance Testing?**

- Non-Functional Requirements (NFR): Characteristics of a system that are not directly related to its main functionality.
- Performance Testing: Identifies performance bottlenecks, scalability issues and ensures that the API meets the defined NFRs.

**When to Test Performance?**

They must be carried out at all stages of software development, allowing performance problems to be identified and corrected as quickly as possible, avoiding rework and additional costs.

Neglecting performance requirements can lead to several problems, including:

- Bad user experience.
- Damage to the company's reputation.
- High correction costs.

While testing performance you:

- Prevents problems.
- Drives better architecture to meet business needs.
- Avoids rework.
- Take care of the application's reputation.
- Does not cause harm to customers/users
- Ensures legal liability.

### **Lessons Learned and Performance Testing Process:**

1. Planning:
    - Set clear goals and objectives for the performance test.
    - Create a detailed test plan that includes test scenarios, expected load, and required resources.
    - Ensure everyone is aligned on the test goals and expectations.
2. Anticipate:
    - Identify potential performance bottlenecks before you start testing.
    - Analyze the system architecture.
3. Backup:
    - Make regular backups. This will allow you to restore your system to a previous state if something goes wrong during testing.
4. Production-Like Environment:
    - Create a test environment that is as close to the production environment as possible.
5. Specific Test Scenarios:
    - Define test scenarios with different types of users, different peak times, and different data volumes.
6. Acceptance Criteria:
    - Clear and measurable acceptance criteria before testing begins help determine whether the system meets performance requirements.
7. Test Mass:
    - Prepare the data set for testing.
8. Results:
    - Clear and concise test reports that present results in an objective and understandable way to visualize performance data.
    - Discuss the actions needed to improve system performance.

### Performance testing concepts

**HTTP Requests**

HTTP is a protocol that defines how information is exchanged between a client and a server. HTTP requests are the basis of communication between clients and servers on the web. After receiving a request, the server sends a response. This response includes a status code that indicates the result of the request, divided into five classes:

- 1xx: Informational (the request has been received and is being processed).
- 2xx: Success (the request was received, understood and accepted).
- 3xx: Redirection (additional actions are required to complete the request).
- 4xx: Client error (the request contains syntax errors or cannot be fulfilled).
- 5xx: Server error (the server failed to process an apparently valid request).

**Test Models:**

- Load testing: Simulates normal system usage to verify that it meets performance requirements.
- Stress Testing: Increases the load beyond normal to identify the system's breaking point under hostile conditions.
- Peak Testing: Simulates peaks to check whether the system can handle sudden increases in demand.
- Continuity test: Simulates a load close to that expected in production, maintaining it for a long period of time.

**Environment, Volume and Scenarios**

- Scenarios: Test scenarios should be designed in situations similar to real ones, representing the main functionalities of the system and the most common user workflows.
- Volumetry: The test load must simulate the expected and intended traffic volume in production in relation to time.
- Environment: The test environment should be as close as possible to the production environment. If this is not possible, you can scale the calculation: horizontally (by adding new machines) or vertically (by adding resources such as memory and CPU).

**Service-oriented indicators:**

- Response Time: The time it takes for the system to respond to a request.
- Availability: The ability of the system to handle the workload over a period of time.

**Efficiency-oriented indicators:**

- Throughput: The number of requests the system can process per unit of time.
- Resource Utilization: Optimization of infrastructure and horizontal and vertical scalability costs.

**Additional Terminologies:**

- Baseline: A performance reference that serves as a basis for comparison.
- Benchmarking: Comparing the performance of a system with a reference standard.
- Metrics: Measurable values that indicate system performance.
- Saturation: A state in which a system is operating at its maximum capacity and cannot handle any more load.
- Workload: The amount of work a system needs to perform.
- Think Time: Time it takes a real user to think and interact with the system between actions.
- Ramp Up: The process of gradually increasing the workload in a performance test to simulate increased traffic over time.
- Steady State: The state in which a system is operating under a constant load for an extended period of time.

**Performance Defects:**

- Timeouts: The system does not respond to a request within the time limit.
- Response time: The system takes a long time to respond to a request.

**Functional Defects:**

- Caching failure: The system does not cache data correctly.

**Structural Defects:**

- Memory leak: The system does not release memory correctly.
- Data corruption: The system stores or processes data incorrectly.
- Load balancer: Distributes traffic across multiple servers to improve performance and scalability.

**Security Defects:**

- Data Exposure: The system exposes confidential data without authorization.

**Network Infrastructure Defects:**

- Latency: The time it takes for a data packet to travel from one point on the network to another.
- Bandwidth: The amount of data that can be transmitted over a communication channel per unit of time.