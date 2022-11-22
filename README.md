# Install NPM

---

npm install
Note: If there are any vulnerabilities you will need to run the following command: npm audit fix

Install Playwright
npm i -D playwright //@playwright/test playwright-expect

Note: playwright-expect only needs to be installed if you plan to use the module
Note: If you install playwright after pulling the code into VS Code you will need to restart VS Code in order for VS Code to recognize the playwright install

# npm commands

---

To run tests use npm test in the terminal

### General Info

---

This project will include testing for a fictional bed and breakfast.

## Technologies

---

A list of technologies used within the project:

- [@playwright/test]: Version 1.17.2
- [playwright]: Version 1.28.0

## Installation

---

```
$ git clone https://github.com/nemowbray/testAutomation.git
$ cd ../path/to/the/file
$ npm init -y
$ npm init playwright@latest
You will be prompted with a series of questions:
1. select TypeScript
2. press enter
3. press enter
4. press enter
Note: you can ignore the e2e folder and tests-examples folder, these are automatically added during the install.

# Setup dotenv

npm install dotenv --save add process-env

process-env is needed in order for the variables to work
Add `.env` file to the root folder.
Add the following to the .env file:

URL="https://automationintesting.online/"
USER="username"
PASSWORD="your password"

The `process.env` will now read values stored in the environment variable file.
```
