# Angular Course

Repository for the courses _Angular Foundation_ and _Advanced Angular_.

## Getting started

This section will help you setup the Angular project that is used throughout the course.

We will work with `subprojects` for each exercise and solution. They can be found in the folder [projects](projects).
The subproject [00-base](projects/00-base) is your starting point and is based off the official [«Tour of Heroes» Angular Tutorial](https://angular.io/tutorial).

### Prerequisites
* [Node.js](https://nodejs.org/en/) installed (LTS version)
* IDEA or Editor of your choice (e.g. [IntelliJ IDEA](https://www.jetbrains.com/idea/))
* Terminal for running CLI commands

### Instructions

#### Install Angular CLI
Open a terminal and run the following command:

```
npm install -g @angular/cli
```

#### Install project dependencies

From the root of the cloned repo (most likely this folder), run the following command:

```
npm install
```
This will install all required dependencies for running any of the exercises or solutions. Please note that this only needs to be done once.

#### Running the API
```
npm run start:api
```
This will start a minimal backend api (JSON-server), which is required for all exercises and solutions. Please note that you need to only start it once.

#### Running the Angular App
To start the app of any exercise or solution use the respective run command ending in `:start`, e.g. `npm run 00-base:start`

Hint: [package.json](package.json) contains commands for running and testing each exercise and solution app.

Once built, the Angular app opens in the browser. Alternatively, you can navigate to [localhost:4200](). Please note that only one subproject run at a time.


## Exercises
Exercises and solutions can be found in the respective subproject, e.g. [01-dependency-injection](projects/01-dependency-injection) and [01-dependency-injection_solution](projects/01-dependency-injection_solution). Please feel free to have a peek at the solution, should you get stuck. If you don't finish an exercise, don't worry, each exercise has its own subproject from which you can start with a clean state.

### Unit Tests
You can use the respective run command to verify your solution, e.g. `npm run 00-base:test`

### End-to-End Tests
You can use the respective run command to run cypress e2e tests to further verify your solution, e.g. `npm run 00-base:e2e`.

This will run the e2e tests in _headless_ mode, i.e. without opening a visible UI.

Please note that the e2e tests require the mock API and app to be running.

Hint: There is also a run command for opening the Cypress UI (for debugging, etc.), e.g. `npm run 00-base:e2e:open`
