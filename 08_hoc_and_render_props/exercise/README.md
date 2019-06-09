# HOC and Render Props Patterns

Goals

- Extract the timing business logic in `Timer` and `CountdownTimer` using a HOC `withTimer`
- Extract the timing business logic in `Timer` and `CountdownTimer` using a render prop `ElapsedTime`

🤯 CHALLENGE MODE 🏅

- Write tests for the app that can be run across all the different implementations
- Verify that Timer 1 goes up
- Verify Timer 2 goes down
- Verify Timer 2 stops going down at 0

You'll need to use `jest.useFakeTimers()` to help you along the way. Caution, you shouldn't need `async`, but in case you want to, be aware that awaiting Promises gets [messed up by jest's fake timers](https://github.com/facebook/jest/issues/4928). But that's a side note; in this case: just don't use async, you don't need it.
