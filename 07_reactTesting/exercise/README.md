# Testing React Components

- An engineer checked in a new Todo feature, and all the tests pass, but users are complaining about it being broken!
- First, write some tests that actually fail:
  - When you write in the text input field and click "Add Todo" it should add a todo to the list
  - When you write in the text input field and you submit the form it should add a todo to the list
  - After some todos are added, clicking the checkbox removes it from the list
  - (Remember, don't use `setState`, `instance`, `find('SomeNamedComponent')`, or anything else that tests implementation details)
- Once you have some nicely failing tests, make them pass and fix the app!

CHALLENGE MODE

- Same story, but now the todo feature saves to a server! 
- You got the frontend code, but the team is being slow getting the server to you. Use `axios-mock-adapter` to stub out POST requests to `/todos` (just return a 200) so you can play around with the app
- Notice where it breaks
- Write out a mount test that correctly exercises the server call (use `axios-mock-adapter` here as well), and create a failing test
- Fix the implementation
- For fun, change the name of the server method `saveTodoAsync` to something else, but don't update test file. Notice how shallow tests now break because you're testing implementation details.

