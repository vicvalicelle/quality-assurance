# Sprint 6

 <summary>Summary of days</summary>

## Day 1 and 2: MasterClass

- Planning
- AWS Partner Accreditation (Cloud Economics)

## Day 3: MasterClass

- Udemy Course: Getting Started with K6​​​​​​​

## Day 4: MasterClass

- Fundamentals of Software Testing
- Daniel Jesus' K6 Videos

## Day 5: MasterClass

- Understanding results and metrics
- Fixation exercise

## Day 6, 7, 8 and 9: Evolution Challenge

- Challenge
- Mentoring




This sprint is focused on learning about the K6 tool, the types of tests created with it, its documentation, how to create its scripts, metrics and organization. Therefore, the Challenge addresses the planning of individual tests and flows with a focus on the /users, /login and /products routes using this tool. The test cases were reviewed and 5 types were selected for each route:

**Method** | **Test** | **Options** | **Thresholds**
--- | --- | --- | ---
**GET (POST - Login)** | **Spike Test** | `stages: [{ duration: '10s', target: 50 }, { duration: '3s', target: 500 } { duration: '10s', target: 50 }],` | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.01'],`
**GET with ID (POST - Login)** | **Stress Test** | `stages: [{ duration: '1m', target: 100 }, { duration: '1m', target: 500 }, { duration: '1m', target: 700 }, { duration: '1m', target: 1000 }, { duration: '5m', target: 0 }],` | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.05'],`
**POST** | **Soak Test** | ` stages: [{{ duration: '3m', target: 500 }, { duration: '10m', target: 500 }, { duration: '3m', target: 0 },` | `'http_req_duration': ['p(95)<300'], 'http_req_failed': ['rate<0.01'],`
**PUT (POST - Login)** | **Load Test** | `stages: [{ duration: '1m', target: 200 }, { duration: '1m', target: 200 }, { duration: '2m', target: 0 }],` | `'http_req_duration': ['p(95)<300'], 'http_reqs': ['rate>100'], 'http_req_failed': ['rate<0.01'],`
**DELETE (POST - Login)** | **Smoke Test** | `vus: 1, duration: '1s',` | `'http_req_failed': ['rate=0'], 'http_req_duration': ['p(100)<1000'],`

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
