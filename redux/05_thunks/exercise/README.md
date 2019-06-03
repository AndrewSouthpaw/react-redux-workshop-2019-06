# Thunks

## Goals

- Load todos from server using `getTodosFromServer`, and add them into state
- If there was a network error, display an error and provide the option to try loading them again
- Refactor `addAndSaveTodoAsync` to get the full todo object from a successful server call (as per usual with a 200 POST response) and save that object to state
- Add error handling for when saving the todo fails
