# useEffect

- No cleanup
  - useEffect runs after every render
  - Kept inside component to access state variables via the closure
  - A new effect each time! One effect belongs to one render
  - does not block browser updates
  
- Cleanup
  - common bug with needing both componentDidMount and componentDidUpdate
  - demonstrate bug with not doing componentWillUnmount
  - demonstrate how to not *always* run the useEffect
  - demonstrate how to only run it on unmount
