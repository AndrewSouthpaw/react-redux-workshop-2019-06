# Use Effect(ively)

Goals

- The current app has some bugs!
  - Notice what happens when you pick one friend, receive some messages, pick another friend...
  - And then after that, when you stop receiving messages
- Refactor the app to create a custom hook `useFriendService` that uses `useEffect` to subscribe and unsubscribe, and pass along messages to the `onMessage` prop
- A coworker complains about your API, saying the custom hook is too confusing and they just want a component called `FriendsMessages` where they can pass in an `id` and it takes care of retrieving and displaying the messages. Combine the display and business logic into a single component, but make sure to fix your `useEffect` so it doesn't overload the `FriendService`!
