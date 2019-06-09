# Testing Connected Components

## Goals

- There are bugs in this app!
  - Adding a new todo seems to go wrong in several ways, and doesn't talk to server...
  - Marking a todo as complete doesn't work
- But the tests still pass. Darn shallow testing strikes again! Write some better tests using mount
  - Test behavior of adding a todo:
    - simulate typing something into the input field
    - click the "Add Todo" button
    - server should receive a post containing the todo data object
    - list of todos should update to include the new todo
  - Test behavior of marking a todo complete:
    - Simulate clicking the checkbox
    - Check that todo is now styled to have a line through it
- THEN, make the tests pass

🤯 CHALLENGE MODE 🏅

- Write tests for the "do something really complicated button", where you selectively stub out that thunk and check to see that it is called when you click the button
