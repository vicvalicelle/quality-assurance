
# Sprint 7

<details>
<summary>Summary of days</summary>

## Day 1: MasterClass

- Starting base project with K6 and Serverest
- Static and dynamic data sets

## Day 2: MasterClass

- Test Lifecycle with Setup and Teardown

## Day 3: MasterClass

- Service layer with K6

## Day 4: MasterClass

- Centralizing validations with BaseChecks

## Day 5: MasterClass

- Setting Constants and Environment

## Day 6, 7, 8 and 9: Evolution Challenge

- Challenge
- Mentoring

</details>



This sprint we will continue with the K6 tool, the test lifecycle, how to create more concise scripts, metrics and organization. Therefore, we will continue with the previous planning, with some changes, addressing the planning of individual tests and flows in the /users, /login, /products and, now, the /carts route. The test cases were reviewed and 5 types were selected for each route:

**Test** | **Options** | **Thresholds**
--- | --- | ---
**Spike Test** | `stages: [{ duration: '10s', target: 50 }, { duration: '3s', target: 500 } { duration: '10s', target: 50 }],` | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.01'],`
**Stress Test** | `stages: [{ duration: '1m', target: 100 },{ duration: '1m', target: 200 },{ duration: '1m', target: 300 },{ duration: '1m', target: 500 },{ duration: '5m', target: 0 }],` | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.05'],`
**Soak Test** | ` stages: [{{ duration: '2m', target: 300 }, { duration: '4m', target: 400 }, { duration: '2m', target: 0 },` | `'http_req_duration': ['p(95)<300'], 'http_req_failed': ['rate<0.01'],`
**Load Test** | `stages: [{ duration: '1m', target: 100 }, { duration: '1m', target: 100 }, { duration: '1m', target: 0 }],` | `'http_req_duration': ['p(95)<300'], 'http_reqs': ['rate>100'], 'http_req_failed': ['rate<0.01'],`
**Smoke Test** | `vus: 1, duration: '1s', iterations: 1, ` | `'checks': ['rate>0.99'], 'http_req_duration': ['p(100)<1000'], 'http_req_failed': ['rate<0.01'],`

## **Testing your API with k6:**

### Prerequisites

### **1. Node.js and npm**

- **Download the installer:** Go to https://nodejs.org/ and download the installer for your operating system (Windows, macOS, or Linux).
- **Run the installer:** Open the file and follow the on-screen instructions.
- **Verify the installation:** Open your terminal (Command Prompt on Windows, Terminal on macOS or Linux) and type the following commands to check if everything is ok:

```
node -v
```

```
npm -v
```

# **Installing k6 on Windows**

1. **Install using Chocolatey** :

- First, install Chocolatey;

    1. Open PowerShell with administrator permissions.

    2. Run the following command to install Chocolatey:

        ```powershell
        Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('<https://community.chocolatey.org/install.ps1>'))
        ```

- After installing Chocolatey, install k6:

    1. In PowerShell with administrator permissions, run:

        ```powershell
        choco install k6
        ```

- Verify the installation: In your terminal to check if everything is correct, type:

```
k6 --version
```

## **Running the tests**

### **1. Write your test script**

Create a file called `script.js`

### **2. Run the test**

Now, open your terminal and navigate to the folder where you saved `script.js` . Then, run:

```
k6 run script.js
```
