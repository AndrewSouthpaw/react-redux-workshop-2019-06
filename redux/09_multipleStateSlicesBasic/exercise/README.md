# Multiple State Slices (Basic)

GOALS

- We want to add some authentication to the app...
- Create a display for whether the user is logged in:
  - When they're logged in, display "Logged In: John Doe", and display a button to log out
  - Otherwise, display a button to log in.
- Create a simple log in action/reducer for now: give the `user` state an object: `{ name: 'John Doe' }`
- Create a simple log out action/reducer: set the `user` state to `null`
- Refactor `addTodo` behavior so that it throws an error when the user is not logged in
  - (We may want to show something in the UI beforehand, but for now let's just do it in redux)
  - If it throws an error, catch it in the UI and display the error to the user
  - Once the user logs in, you can clear the error

🤯 CHALLENGE MODE 🏅

- Only display the todos / add todo UI when the user is logged in (yes, this will make the previous work kinda useless... exercises, what can I say?)
- Refactor the show/hide logic into a `<RequireUser>` component which only renders its `children` when a `user` is present on redux state
