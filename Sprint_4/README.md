# Sprint 4
<details>
<summary>Summary of days</summary>

## Day 1 and 2: MasterClass

- Planning Sprint 4
- Udemy Exploratory Testing Course

## Day 3: MasterClass

- Javascript programming language
- Exercises

## Day 4 and 5: MasterClass

- TDD with Mocha and Chai

## Day 6 and 7: Exercises and Challenge

- Exercises and Challenge
- Test Planning, User Story and Execution

## Day 8 and 9: MasterClass

- AWS Partner Acceditation (Business)

</details>


Guide to help configure the environment to perform TDD (Test Driven Development), using Node.js, Mocha (https://mochajs.org/) and Chai (https://www.chaijs.com/).

**Prerequisites**

- **VS Code:** https://code.visualstudio.com/download (Code Editor)
- **Node.js:** https://nodejs.org/en/download/ (Latest LTS version preferred or from 14 onwards)

### **Steps for installation and configuration:**

1. **Create a Node.js project:**

    - Create a folder
    - Open the terminal in the folder where you want to create your project.
    - Run the `npm init -y` command to create a `package.json` file with the basic project settings

2. **Activate Modules:**

    - In the `package.json` file, add the line `"type": "module"` :

    ```JSON
    {
      "type": "module",
    }
    ```

3. **Install the dependencies:**

    - Install Mocha and Chai as development dependencies:

        `npm i -D mocha chai`

4. **Configure the test script in package.json:**

    - In the `package.json` file, add:

    ```JSON
    "scripts": {
        "test": "mocha"
    }
    ```

5. **Create a test file:**

    - Create a folder called `test` in your project.
    - Inside the folder, create a file with the extension `.spec.js`

6. **Run the tests:**

    - In the terminal, run the command `npm test` where the test files in the `test` folder will be executed.