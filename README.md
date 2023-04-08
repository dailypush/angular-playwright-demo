# Angular Playwright Demo

This project is an Angular application with end-to-end testing using Playwright and Cucumber. The app demonstrates a simple counter and input field functionality, and the tests ensure the functionality works as expected.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [Application Structure](#application-structure)

## Getting Started

To get started, clone the repository and install the necessary dependencies.

1. Clone the repository:

```bash
git clone https://github.com/yourusername/angular-playwright-demo.git
cd angular-playwright-demo
```
Install the dependencies:
```bash

npm install
```

Running the Application

To run the application, use the following command:

```bash

npm start
```
This will start the development server and open the application in your default web browser. By default, the application will be available at http://localhost:4200.

Running End-to-End Tests

To run the end-to-end tests, use the following command:

```bash

npm run e2e
```

This will execute the tests using Playwright and Cucumber. Test results will be displayed in the terminal.

Application Structure

The application is structured as follows:

src/: The main source code of the Angular application.
app/: Contains the Angular components, services, and related files.
src/tests/cucumber/: The end-to-end test suite using Playwright and Cucumber.
features/: Contains the Cucumber feature files written in Gherkin syntax.
step-definitions/: Contains the step definition files that map the Gherkin steps to JavaScript functions using Playwright.
Happy coding!

sql
