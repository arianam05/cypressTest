Cypress Testing Project

Welcome to the Cypress testing project! 
This project contains automated E2E tests for the automation exercise.

Prerequisites
Before you start, make sure you have the following installed on your computer:

Node.js (v12 or higher).
Git

Project Configuration

Clone the Repository: To begin, clone this repository on your computer using the following command in your terminal:

git clone https://github.com/arianam05/cypressTest.git

Installing Dependencies

Before you begin, make sure you have the following dependencies installed on your computer:

Development Dependencies

@testing-library/cypress: Library that provides utilities for testing web applications using Cypress.

cypress: End-to-end testing framework for modern web applications.

cypress-iframe: Plugin for Cypress to interact with iframes.
cypress-mochawesome-reporter: Custom reporter for Cypress that generates attractive reports using Mochawesome.

To install these dependencies, run the following command in your terminal:

npm install --save-dev @testing-library/cypress cypress cypress cypress-iframe cypress-mochawesome-reporter

Production Dependencies

esbuild: Fast and extensible JavaScript build tool.

path: Node.js module that provides utilities for working with file and directory paths.

These dependencies are related to the build and execution of the project. They are always present to ensure that the project runs correctly.

To install these dependencies, run the following command in your terminal:

npm install esbuild path

Running Tests

To run the tests, make sure you have all the above steps correct.

Then run the following command(s):

run with cypress dashboard:

run headless mode:

Review Report:

go to the mocha-report section and have the run reports in json , and html format.
You can also go to the directory where you have your project saved, go to the mocha-report folder and click on the mochawesome.html file and it will show up in your browser.
