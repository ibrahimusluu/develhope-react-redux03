import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./states/CounterState";
import { store } from "./states/Store";

export function useClickCounter() {
  const count = store.getState().counter; // maybe with callback function in "subscribe" can be done.

  store.subscribe(() => {
    console.log("State after dispatch: ", store.getState().counter);
  });

  const handleCounterIncrement = () => {
    store.dispatch(incrementCounter(1));
  };

  const handleCounterDecrement = () => {
    store.dispatch(decrementCounter(1));
  };

  const handleCounterReset = () => {
    store.dispatch(resetCounter());
  };

  return {
    count: count,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}

// import {
//   decrementCounter,
//   incrementCounter,
//   resetCounter,
// } from "./states/CounterState";
// import { store } from "./states/Store";

// export function useClickCounter() {
//   // let count = 0;
//   // console.log("here");
//   const test = store.subscribe(() => {
//     // console.log("State after dispatch: ", store.getState());
//     // console.log("Store after dispatch: ", store);
//     const state = store.getState();
//     console.log("State after dispatch: ", state);
//     // return count(state);
//     // return (count = state);
//     return state;
//   });
//   console.log("test: ", test);
//   // console.log("test: ", test(0));

//   // function some(x) {
//   //   console.log(x);
//   //   return (count = x);
//   // }

//   const count = (x) => {
//     console.log(x);
//     return x;
//   };

//   console.log(count(5));

//   const handleCounterIncrement = () => {
//     store.dispatch(incrementCounter(1));
//   };

//   const handleCounterDecrement = () => {
//     store.dispatch(decrementCounter(1));
//   };

//   const handleCounterReset = () => {
//     store.dispatch(resetCounter());
//   };

//   return {
//     count: count(0),
//     onIncrement: handleCounterIncrement,
//     onDecrement: handleCounterDecrement,
//     onReset: handleCounterReset,
//   };
// }

// import {
//   countCounter,
//   decrementCounter,
//   incrementCounter,
//   resetCounter,
//   // countState,
// } from "./states/CounterState";
// import { store } from "./states/Store";

// export function useClickCounter() {
//   // let count = countState;
//   // console.log(count);

//   // const unsubscribe = store.subscribe(() => {
//   store.subscribe(() => {
//     // console.log(count); // doesn't work here
//     console.log("State after dispatch: ", store.getState());
//     console.log("Store after dispatch: ", store);
//   });

//   // const count = store.dispatch(countCounter(0));
//   const count = 0;

//   // const handleCount = () => {
//   //   store.dispatch(countCounter(0));
//   // };

//   console.log(count);

//   // console.log(count); // works once only
//   // console.log(store.getState()); // // works once only

//   const handleCounterIncrement = () => {
//     console.log("works"); // after this, dispatch calls "subscribe" and after that next line works
//     store.dispatch(incrementCounter(1));
//     console.log("works"); // here last, after "subscribe"
//   };

//   const handleCounterDecrement = () => {
//     store.dispatch(decrementCounter(1));
//   };

//   const handleCounterReset = () => {
//     store.dispatch(resetCounter());
//   };

//   // unsubscribe();

//   return {
//     count: count,
//     onIncrement: handleCounterIncrement,
//     onDecrement: handleCounterDecrement,
//     onReset: handleCounterReset,
//     // onCount: handleCount,
//   };
// }

// // Create a custom hook useCounter that keeps track of the state of a counter,
// // and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.
// import { useCallback, useState } from "react";

// export function useClickCounter(initialValue = 0) {
//   const [count, setCount] = useState(initialValue);
//   console.log(count);

//   const handleCounterIncrement = useCallback(function handleCounterIncrement() {
//     setCount((c) => c + 1);
//   }, []);

//   const handleCounterDecrement = useCallback(function handleCounterDecrement() {
//     setCount((c) => c - 1);
//   }, []);

//   const handleCounterReset = useCallback(
//     function handleCounterReset() {
//       setCount(initialValue);
//     },
//     [initialValue]
//   );

//   return {
//     count: count,
//     onIncrement: handleCounterIncrement,
//     onDecrement: handleCounterDecrement,
//     onReset: handleCounterReset,
//   };
// }
