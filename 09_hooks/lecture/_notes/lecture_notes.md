# Hooks

- Start with super basic example, i.e. a counter
- Demonstrate all the state being bundled together
- When to do one vs another
- demonstrate passing arguments into a custom hook

```js
function Box() {
  const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 });
  // ...
}
  // ...
  useEffect(() => {
    function handleWindowMouseMove(e) {
      // Spreading "...state" ensures we don't "lose" width and height
      setState(state => ({ ...state, left: e.pageX, top: e.pageY }));
    }
    // Note: this implementation is a bit simplified
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, []);
  // ...
  
  
  
  
  function Box() {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const [size, setSize] = useState({ width: 100, height: 100 });
  
    useEffect(() => {
      function handleWindowMouseMove(e) {
        setPosition({ left: e.pageX, top: e.pageY });
      }
      // ...
      
      
      
      
      
      function Box() {
        const position = useWindowPosition();
        const [size, setSize] = useState({ width: 100, height: 100 });
        // ...
      }
      
      function useWindowPosition() {
        const [position, setPosition] = useState({ left: 0, top: 0 });
        useEffect(() => {
          // ...
        }, []);
        return position;
      }
```
