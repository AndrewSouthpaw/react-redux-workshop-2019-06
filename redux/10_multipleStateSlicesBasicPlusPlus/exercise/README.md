# Multiple State Slices (Slightly Harder)

GOALS

- We want to add a feature: be able to delete a list (and all the todos inside it)
- TDD write a handler that will delete a list from lists state
- TDD write a handler that will delete an array of IDs from todos state
- TDD write a thunk that deletes a list and the todos it contained
- TDD write a component test where you click a delete button on the list and it deletes the list

🤯 CHALLENGE MODE 🏅

- Handle edge cases: don't blow up when you delete the list you're currently looking at
- Bring in Bootstrap and create a confirm delete modal, because it would be a bummer to delete a list accidentally
