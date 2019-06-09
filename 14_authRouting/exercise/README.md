# Auth

Goals

- Your prototype was cute, but it turns out the auth service isn't synchronous -- you have to talk to a real server. (What a shock.)
- To make matters worse, your `PrivateRoute` assumes that information IS synchronous though. Bummer. And you don't want to cache a result locally, you should check when it matters.
- Figure out how to use `fakeAuthV2Async`, where the `#isAuthenticated` call is an asynchronous check, in `PrivateRoute`
- Then fix `Profile` which also needs to know when the user is authenticated

CHALLENGE MODE 🏅:

- Pull out the logic in `PrivateRoute` and `Profile` to store info about auth state and the ability to check on auth state
- Make sure you're not doing things like bombarding your auth service with too many duplicate requests

TIPS:

- `Route` and `PrivateRoute` are like any other React component. Think about what makes them re-render, or what you can do to get it to only mount at the right time.
- Recall how you handle any async call in a React component, and apply that pattern to the `PrivateRoute`
- You'll probably notice that you can click "log in" and it has you authenticated in the service, but the `PrivateRoute` still doesn't know that. Why? How might you coordinate information between the `Login`, `PrivateRoute`, and `fakeAuthV2Async` service?

<details>
  <summary>EXTRA TIP DON'T READ THIS UNLESS YOU ARE STUCK AND DON'T LIKE A CHALLENGE</summary>
  <p>
  Potential solutions:
  
  - you can listen to route changes using `history.listen(() => { /* ... */ })`, which returns a listener function that can be invoked on cleanup to wipe the listener
    - this can create lots of duplicate listeners though...
  - you could subscribe to changes on the fakeAuth, create a wrapper for it that pushes updates to subscribers
  - you could only mount a `PrivateRoute` once it matches, and not before -- think about how we've done that in the past
  </p>
</details>
