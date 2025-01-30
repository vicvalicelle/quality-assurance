# Cinema API 🍿

Specific API for creating a cinema system, querying, updating films, deleting films, creating films and booking tickets.

## API Requirements:

### Movies:

Any Movie API user (for query) and Movie API Admin User (for creation, update and deletion)

**Functional Requirements:**

1. Creating a New Movie:
    - The API admin user sends a POST request to the /movies endpoint with the movie details.
    - The system validates the mandatory fields and the uniqueness of the title.
    - If the validations pass, the system creates the movie and assigns a unique ID.
    - The system returns a success response with status 201 Created, including the movie ID.
2. Getting the Movie List:
    - The user sends a GET request to the /movies endpoint.
    - The system returns a list of all registered films with details.
3. Getting Movie Details by ID:
    - The user sends a GET request to the /movies/{id} endpoint, where {id} is the ID of the desired movie.
    - The system checks the existence of the movie and returns its details.
    - If the movie does not exist, the system returns an error response with the status 404 Not Found.
4. Updating a Movie's Details by ID:
    - The API admin user sends a PUT request to the /movies/{id} endpoint, where {id} is the ID of the movie to be updated.
    - The system checks the existence of the film, allows the updating of specific fields and validates the data.
    - If all validations pass, the system updates the movie details.
    - The system returns a success response with status 200 OK and updated movie details.
5. Deleting a Movie by ID:
    - The API admin user sends a DELETE request to the /movies/{id} endpoint, where {id} is the ID of the movie to be deleted.
    - The system checks for the existence of the movie and permanently removes it from the database.
    - The system returns a success response with status 204 No Content.

**Non-Functional Performance Requirements:**

- The API must process at least 100 movie creation requests per second and average response time must not exceed 200 milliseconds.
- The API must respond to movie listing GET requests in less than 100 milliseconds and must be paginated, with a maximum of 20 movies per page.
- The API must respond to GET requests for movie details in less than 50 milliseconds.
- The API must process at least 50 movie update requests per second and the average response time must not exceed 300 milliseconds.
- The API must process at least 30 movie delete requests per second and the average response time must not exceed 400 milliseconds.

## Tickets:

Any Ticket API user can book tickets to watch a movie at a theater.

**Functional Requirements:**

- The user sends a POST request to the /tickets endpoint with the following ticket details:
    - Movie ID (movieId) - Identifies the movie for which the ticket is being reserved.
    - User ID (userId) - Identifies the user making the reservation.
    - Seat Number (seatNumber) - The seat number the user wants to reserve.
    - Ticket Price (price) - The price of the ticket to the movie.
    - Showtime - The date and time of the film's showtime.
- The system validates whether all mandatory fields are filled in correctly.
- The system checks whether the seat number is within the range of 0 to 99.
- The system checks whether the ticket price is within the range of 0 to 60.
- If all validations pass, the system creates a ticket reservation with the details provided.
- The system assigns a unique ID to the ticket reservation.
- The system returns a success response with status 201 Created, including the ticket reservation ID.

**Non-Functional Performance Requirements:**

- The API must be able to process at least 50 ticket booking requests per second and the average response time must not exceed 300 milliseconds.

## Mind Map and [Jira](https://victoriavalicelle.atlassian.net/jira/software/projects/AC/boards/3)

![alt text](./plano_de_teste/mapaMental.png)

### Traceability Matrix:

**Requirement ID** | **Requirement Description** | **Test Cases**
--- | --- | ---
**REQ01** | Movie Registration (CRUD) | CT01, CT02, CT03, CT04, CT05, CT06, CT07, **PT01 (Smoke Test), PT02 (Load Test), PT03 (Soak Test), PT04 (Spike Test), PT05 (Stress Test)**
**REQ02** | Movie Listing | CT08, CT09, CT10, **PT06 (Smoke Test), PT07 (Load Test), PT08 (Soak Test), PT09 (Spike Test), PT10 (Stress Test)**
**REQ03** | Movie Update (CRUD) | CT11, CT12, CT13, CT14, CT15, CT16, CT17, CT18, **PT11 (Smoke Test), PT12 (Load Test), PT13 (Soak Test), PT14 (Spike Test), PT15 (Stress Test)**
**REQ04** | Movie Deletion (CRUD) | CT19, CT20, CT21, **PT16 (Smoke Test), PT17 (Load Test), PT18 (Soak Test), PT19 (Spike Test), PT20 (Stress Test)**
**REQ05** | Ticket registration | CT01, CT02, CT03, CT04, CT05, CT06, CT07, CT08, CT09, **PT21 (Smoke Test), PT22 (Load Test), PT23 (Soak Test), PT24 (Spike Test), PT25 (Stress Test)**
**REQ06** | Ticket Listing | CT10, CT11, CT12, **PT26 (Smoke Test), PT27 (Load Test), PT28 (Soak Test), PT29 (Spike Test), PT30 (Stress Test)**
**REQ07** | Ticket Update | CT13, CT14, CT15, CT16, CT17, CT18, CT19, CT20, CT21, CT22, CT23, CT24, **PT31 (Smoke Test), PT32 (Load Test), PT33 (Soak Test), PT34 (Spike Test), PT35 ( Stress Test)**
**REQ08** | Deleting tickets | CT25, CT26, **PT36 (Smoke Test), PT37 (Load Test), PT38 (Soak Test), PT39 (Spike Test), PT40 (Stress Test)**
**REQ09** | Restricted access for administrative functions | CT07, CT17, CT21
**REQ10** | Input data validation (Checking some mandatory fields and some valid values in all operations) | CT02, CT03, CT04, CT05, CT06, CT12, CT13, CT14, CT15, CT16, CT17, CT18, CT19, CT20, CT21, CT22, CT23, CT24, CT25, CT26

## Environment Setup for API Testing 🔧

## Prerequisites ⚠️

Make sure you have installed:

1. **Git** - To clone the repository.
2. **Node.js and npm** - To manage packages and run the application.
3. **K6** - To run the tests.

### Git Installation

**Windows:**

1. Download the [Git](https://git-scm.com/downloads) installer.

2. Run the installer and follow the instructions.

3. Verify the installation by opening the terminal (cmd or PowerShell) and running the command:

    ```bash
    git --version
    ```

**macOS:**

1. Install via Homebrew:

    ```bash
    brew install git
    ```

2. Verify the installation:

    ```bash
    git --version
    ```

**Linux:**

1. Install via apt:

    ```bash
    sudo apt install git
    ```

2. Verify the installation:

    ```bash
    git --version
    ```

### Installing Node.js and npm

**Windows:**

1. Download the [Node.js](https://nodejs.org/) installer.

2. Run the installer and follow the instructions, making sure the option to install npm is checked.

3. Verify the installation by opening the terminal and running:

    ```bash
    node --version
    npm --version
    ```

**macOS:**

1. Install via Homebrew:

    ```bash
    brew install node
    ```

2. Verify the installation:

    ```bash
    node --version
    npm --version
    ```

**Linux:**

1. Install via apt:

    ```bash
    sudo apt install nodejs npm
    ```

2. Verify the installation:

    ```bash
    node --version
    npm --version
    ```

## Hands on 👷‍♀️

### 1. Clone the API Repository

First, you need to clone the Cinema API repository from GitHub. In the terminal, run the following command:

```bash
git clone https://github.com/juniorschmitz/nestjs-cinema.git
```

### 2. Navigate to the Project Directory

After cloning the repository, navigate to the project directory:

```bash
cd nestjs-cinema
```

### 3. Install Dependencies

The Cinema API likely has dependencies that need to be installed. To do this, run:

```bash
npm install
```

### 4. Run the API Locally

To start the Cinema API locally, use the command:

```bash
npm run start
```

Make sure the API is running correctly by accessing `http://localhost:3000` in your browser.

### 5. Install K6

To perform performance testing, you will need K6. Follow the instructions below to install it:

- **Windows:**

    Download the K6 installer [here](https://k6.io/docs/getting-started/installation/) .

    **Installation using Chocolatey** :

- First, install [Chocolatey](https://chocolatey.org/install) ;

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

- **macOS:**

    Install via Homebrew:

    ```bash
    brew install k6
    ```

- **Linux:**

    Install via apt:

    ```bash
    sudo apt install k6
    ```

### 8. Run the test with K6

Now, open your terminal and navigate to the folder where you saved the test scripts. Then, run:

```
k6 run script.js
```

**NOTE: It is important to remember that during testing, it is necessary to create dynamic masses with the quantity required for the test you wish to perform. To do this, navigate to the data folder in the terminal and type `node generateMovies 20` , changing the file if necessary (movies or tickets route) and the number to the desired quantity.**

## Autor:

- Victoria Valicelle - [LinkedIn](www.linkedin.com/in/victoria-valicelle-104496296)