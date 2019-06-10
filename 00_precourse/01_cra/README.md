# Activity 01: Create React App Hello World 

## Objectives:

* Quickly setup a hello world application 
* Explore the differences between dev and production environments
* Understand the structure of a React project
* Use the React Developer Tools
* Run a unit test

## Exercise:

1. Use `create-react-app` to create a new application
2. Run the application in development mode:
    * `npm run start`
3. Make a minor change to the `App.js` file, inserting some HTML components: `<p>`, `<h1>`, etc
4. Observe that development mode hot-reload feature recompiles the application and updates your browser
5. Run the application in production mode:
    * `npm run build`
    * `serve -s build`
6. Open your browser to http://localhost:5000/
7. Make a minor change to the `App.js` file, inserting some HTML components: `<p>`, `<h1>`, etc
8. Observe that production feature does not update the application automatically
9. Rebuild the application in production mode:
    * `npm run build`
10. Observe the difference in files in `build/static/js`, particularly:
    * filesize
    * chunk hash
    * sourcemaps
11. Install Chrome React Developer Tools
12. Run the application in development mode:
    * Interact with the new React tab
13. Run the application in production mode:
    * Observe the differences in the React tab
14. Run the unit tests
    * `npm run test`
15. Try to make the unit test for `App.js` fail by forcing a run-time error.

## Hints:

1. You may need to install `serve` globally to test the production build:
    * `npm install -g serve`

## Bonus:

If you finish this exercise early, try:
1. Ejecting the application:
    * `npm run eject`
2. Observe what changes in the project structure upon ejecting and how much create-react-app is doing behind the scenes
3. Consider under what situations you might need to eject and the tradeoffs


