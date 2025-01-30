# **Executing Performance Tests**

## **Load Test**

1. **Thread Group:**
    - Number of Threads: 500 (or more)
    - Ramp-Up Period: 25 (20 users every second)
    - Duration (seconds): 120 (2 minutes)
    - Startup Delay (seconds): 0
2. **HTTP Requests (Samplers):**
    - **Home page:**
        - Path: /login
        - Method: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Test Execution:**

![alt text](imagens/image-1.png)![alt text](imagens/image-2.png)![alt text](imagens/image-3.png)![alt text](imagens/image-4.png)![alt text](imagens/image-5.png)

## **Stress Test**

1. **Thread Group:**
    - Number of Threads: 500 (or more)
    - Ramp-Up Period: 15 seconds (or less)
    - Duration: 6 minutes (or more)
2. **HTTP Requests (Samplers):**
    - **Home page:**
        - Path: /login
        - Method: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Stress Test Execution:** ![alt text](imagens/image-6.png)![alt text](imagens/image-7.png)![alt text](imagens/image-8.png)![alt text](imagens/image-9.png)![alt text](imagens/image-10.png)

## **Scalability Testing**

1. **Thread Group:**
    - Number of Threads (users): 600
    - Ramp-Up Period (seconds): 10
    - Loop Count: Infinite
2. **HTTP Requests (Samplers):**
    - **Home page:**
        - Path: /login
        - Method: POST
3. **Think Time (Timer):**
4. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Scalability Test Execution:** ![alt text](imagens/image-11.png)![alt text](imagens/image-12.png)![alt text](imagens/image-13.png)

## **Peak Test**

1. **Thread Group:**
    - Number of Threads: 500 (or more, depending on expected peak traffic)
    - Ramp-Up Period: 1 second (or a very low value)
    - Duration: 1 minute (or expected peak traffic duration)
2. **HTTP Requests (Samplers):**
    - **Home page:**
        - Path: /login
        - Method: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Peak Test Execution:** ![alt text](imagens/image-14.png)![alt text](imagens/image-15.png)![alt text](imagens/image-16.png)![alt text](imagens/image-17.png) closed 😢

## **Endurance Test**

1. **Thread Group:**
    - Number of Threads: 500 (or the average number of concurrent users)
    - Ramp-Up Period: 300 seconds (5 minutes)
    - Duration: 3600 seconds (1 hour)
2. **HTTP Requests (Samplers):**
    - **Home page:**
        - Path: /login
        - Method: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Running the Stress Test:** ![alt text](imagens/image-18.png)![alt text](imagens/image-19.png)![alt text](imagens/image-20.png)![alt text](imagens/image-21.png)![alt text](imagens/image-22.png)

## **Capacity Test**

1. **Thread Group:**
    - Number of Threads: 500 (or the average number of concurrent users)
    - Ramp-Up Period: 300 seconds (5 minutes)
    - Duration: 30 minutes
2. **HTTP Requests (Samplers):**
    - **Home page:**
        - Path: /login
        - Method: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Capacity Test Execution:** ![alt text](imagens/image-23.png)![alt text](imagens/image-24.png)![alt text](imagens/image-25.png)![alt text](imagens/image-26.png)![alt text](imagens/image-27.png)

## **Concurrency Testing**

1. **Thread Group:**
    - Number of Threads: 500 (or expected number of concurrent users)
    - Ramp-Up Period: 1 second
    - Duration: 60 seconds (or the time required to simulate simultaneous access)
    - Synchronizing Timer:
        - Number of Simulated Users to Group by: 100
        - Timeout in milliseconds: 0
2. **HTTP Requests (Samplers):**
    - **Home page:**
        - Path: /login
        - Method: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Concurrency Test Execution:** ![alt text](imagens/image-28.png)![alt text](imagens/image-29.png)![alt text](imagens/image-30.png)![alt text](imagens/image-31.png)![alt text](imagens/image-32.png)
