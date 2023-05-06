import { useEffect, useRef } from "react";

function useInterval(callback, delay, toggle) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && toggle) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, toggle]);
}
export { useInterval };

// function Counter() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     // Your custom logic here
//     setCount(count + 1);
//   }, 1000);

//   return <h1>{count}</h1>;
// }
