## Day 6: MasterClass

- Introduction to Test Analysis Activities
- Prioritization in different applications
- Activity

## Introduction to Test Analysis Activities

The test analyst contributes significantly to the quality and success of the software project and his main activities involve:

- **Master Project Architecture:** Understand the structure of the software to identify critical areas and plan effective tests.
- **Plan the Testing Strategy:** Define the types of tests needed and the success criteria.
- **Run Tests:** Apply the planned tests.
- **Analyze Pros and Cons of Test Plans:** Evaluate the effectiveness of tests and identify points for improvement in the future.
- **Analyze and Review Code:** Examine code to find errors and vulnerabilities.
- **Catalog, Examine and Document Evidence:** Record test results, defects found and corrective actions taken.
- **Configure and Create Processes:** Establish standardized procedures for test execution and analysis.
- **Technical Knowledge of Infrastructure:** Master the tools and technologies used in software development and testing.
- **Analyze and Document Feedback Issues:** Collect and analyze user feedback to identify issues and improve the software.

## Prioritization in different applications

For each test flow, you should ask yourself:

- **What is the main purpose of my application?**
- **Does the flow I am addressing block or hinder the achievement of the main objective of that application?**
    - If the answer is yes, this flow should have high priority in testing. If not, the flow has a lower priority.
- **Important considerations:** Frequency of use, financial impact, complexity.

**Retail E-commerce:**

- Main objective: Sale of products, smooth shopping experience.
- Prioritization: Critical flows such as purchase completion, payment, registration, login, product search, shopping cart.

**Points Program:**

- Main purpose: Purchase, transfer, redemption and use of points.
- Prioritization: Points accumulation and redemption flows, statement viewing, communication of exclusive promotions, integration with e-commerce.

**Telephony Portal:**

- Main objective: Plan sales, service management, customer support.
- Prioritization: Flows for contracting and canceling plans, recharging credits, checking balance and consumption, issuing second copies of invoices, support via chat or telephone.

**Demands:**

- Prioritization: Analyze the impact of demand on the main objective of each application.

## Activity

Choose segment and application on the internet, and create a list of priority flows for validation.

### Step 1 - Present the application, segment and main objective of the system;

**Application:** Uber

**Segment:** Urban mobility, individual passenger transport.

**Main Objective:** Connect passengers with partner drivers for fast and safe trips.

<figure>   <img src="https://th.bing.com/th/id/OIP.JdpTc06Cds9-I6JjbuwbpAHaEK?rs=1&amp;pid=ImgDetMain" width="60%"> </figure>

### Step 2 - Create a list of priority validation flows in the scope system;

- **User Registration:** For identification and billing.
- **Travel Request:** Request for means of transport and address.
- **Trip Tracking:** Trip status and ensuring safety.
- **Trip Completion:** Completes the transaction and provides feedback.
- **Additional Features:** Test extra features like travel scheduling, security features, and customer support.

### Step 3 - Sort the list logically, to perform complete flows in the application.

- **User Registration:**
    - Account creation (name, email, phone).
    - Email and phone validation.
    - Login with valid credentials and password recovery.
    - Adding a payment method.
- **Travel Request:**
    - Insertion of source and destination address.
    - Vehicle category selection.
    - Estimated travel time and price.
    - Request confirmation.
- **Travel Monitoring:**
    - Designated driver and vehicle information.
    - Real-time driver tracking on the map.
    - Communication with the driver.
    - Possibility of sharing the trip with contacts.
- **End of Trip:**
    - Confirmation of arrival at destination.
    - Driver evaluation.
    - Payment for the trip.
    - Issuance of receipt.