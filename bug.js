```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: this will cause an infinite loop
    setCount(count + 1);
  }, [count]); // count is in the dependency array which triggers an update

  return <div>Count: {count}</div>;
}
```