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
  - "stale dependencies" eslint rule
  
- Rules
  - top level
  - same order
  - no conditionals
    - if you need a conditional effect, put it inside the effect
    
- other things
  - useMemo
  - useRef

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

  - useDebugValue
  
```js
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}

// to defer formatting:
useDebugValue(date, date => date.toDateString());
```

Getting previous state or props:

```js
function Counter() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  return <h1>Now: {count}, before: {prevCount}</h1>;
}
```

useCallback:

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

useCallback vs useMemo
