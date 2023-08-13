# Angular Course

Repository for the course _Advanced Angular: What the «Tour of Heroes» didn't tell you_.

## Getting started

The `main` branch contains the starting point for the course and is based off the official [«Tour of Heroes» Angular Tutorial](https://angular.io/tutorial).

Start the application using

```
npm run start
```
This will start a minimal backend api (JSON-server) and build the Angular project. Once built, the Angular app opens in the browser. Alternatively, you can navigate to [localhost:4200]()

Hint for stackblitz: When opening the project on stackblitz, the default page for the backend might be displayed before the actual Angular app. This means that the Angular app is still building, please wait a few seconds.


## Exercises

Exercises can be found in the branches having the prefix `exercise/`. You can either open the branches locally or via [Stackblitz](https://developer.stackblitz.com/guides/integration/open-from-github#project-url). The respective solution can be found in the branches with the prefix `solution/`. Please feel free to have a peak at the solution, should you get stuck. If you don't finish an exercise, don't worry, each exercise has its own branch from which you can start with a clean state.

You can run `ng test` to verify your solution. 

Not recommended for stackblitz: When running locally, you can run `ng e2e` to verify that the app (as a whole) is still working. This requires `Cypress` to be installed (by running `cypress install` in a terminal). The e2e tests require the app to be running.
