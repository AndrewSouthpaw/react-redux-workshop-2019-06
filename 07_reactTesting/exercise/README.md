# Testing React Components

- An engineer checked in a new Todo feature, and all the tests pass, but users are complaining about it being broken!
- First, write some tests that actually fail:
  - When you write in the text input field and click "Add Todo" it should add a todo to the list
  - When you write in the text input field and you submit the form it should add a todo to the list
  - After some todos are added, clicking the checkbox removes it from the list
  - (Remember, don't use `setState`, `instance`, `find('SomeNamedComponent')`, or anything else that tests implementation details)
- Once you have some nicely failing tests, make them pass and fix the app!
