```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: sets count to 10 only once
    if (count === 0) {
      setCount(10);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```