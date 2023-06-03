# Testing Modern Applications with Cypress

Sample project to demonstrate a `cy.dataTest` Cypress custom command.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.1.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

> **Note:** Before running the tests, make a copy of the `cypress.env.example.json` file as `cypress.env.json`, which in the real world, you would update with valid credentials.
>
> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

## Project structure

> Functional tests: Where we are going to access the application, automating all iterations with the browser, under the user's view. We are always concerned with the management of test data in the database.

> Backend tests: With the same tool, we will access to test the application's rest api directly, understanding the concepts of this type of API and how to use Cypress to speed up our tests.

> Frontend tests: Still with Cypress, we will test the presentation layer (just like we did in the functional tests), but this time, we will virtualize all requests to the backend, achieving much faster tests and being able to focus exclusively on the graphical interface.

___

This project was created by [Peter Viegas] following the guidance of Professor [Francisco Wagner Costa Aquino].