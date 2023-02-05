const defaultState = 0;

const INCREMENT = "COUNTER@INCREMENT";
const DECREMENT = "COUNTER@DECREMENT";
const RESET = "COUNTER@RESET";

// "action" matches with "type" and "payload"
// "type" pretends "process name", "payload" pretends "amount"
export function incrementCounter(by = 1) {
  return {
    type: INCREMENT, // process
    payload: by, // amount
  };
}

export function decrementCounter(by = 1) {
  return {
    type: DECREMENT,
    payload: by,
  };
}

export function resetCounter() {
  return {
    type: RESET,
  };
}

// createStore(counterReducer).dispatch(incrementCounter(1)) --> store
export function counterReducer(state = defaultState, action) {
  // HOW does "action" reach the "type" and "payload"?
  switch (action.type) {
    case INCREMENT: {
      return state + action.payload;
    }
    case DECREMENT: {
      return state - action.payload;
    }
    case RESET: {
      return defaultState;
    }

    default: {
      return state;
    }
  }
}

// // not imported in App!
// const defaultState = 0;

// const INCREMENT = "COUNTER@INCREMENT";
// const DECREMENT = "COUNTER@DECREMENT";
// const RESET = "COUNTER@RESET";
// const PRINT = "COUNTER@PRINT";

// // "action" matches with "type" and "payload"
// // "type" pretends "process name", "payload" pretends "amount"
// export function incrementCounter(by = 1) {
//   return {
//     type: INCREMENT, // process
//     payload: by, // amount
//   };
// }

// export function decrementCounter(by = 1) {
//   return {
//     type: DECREMENT,
//     payload: by,
//   };
// }

// export function resetCounter() {
//   return {
//     type: RESET,
//   };
// }

// export function countCounter(count) {
//   return {
//     type: PRINT,
//     payload: count,
//   };
// }

// // createStore(counterReducer).dispatch(incrementCounter(1)) --> store
// export function counterReducer(state = defaultState, action) {
//   // HOW does "action" reach the "type" and "payload"?
//   // console.log("state: ", state);
//   // console.log("action: ", action);
//   switch (action.type) {
//     case INCREMENT: {
//       // return console.log("state: ", state);
//       // countState = action.payload;
//       return state + action.payload;
//     }
//     case DECREMENT: {
//       return state - action.payload;
//     }
//     case RESET: {
//       return defaultState;
//     }
//     case PRINT: {
//       console.log("state: ", state);
//       console.log("action: ", action);
//       return state;
//     }

//     default: {
//       return state;
//     }
//   }
// }

// // export let countState = defaultState;
