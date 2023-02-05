import ReactDOM from "react-dom"; // {ReactDOM} is wrong and cannot be recognized in this way, What is the difference with {} and without it?
import "./index.css";
import { Root } from "./Root";

ReactDOM.render(<Root />, document.querySelector("#root"));

// import { store } from "./states/Store";
// import { decrementCounter, incrementCounter, resetCounter,} from "./states/CounterState";

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCounter(5));
// store.dispatch(decrementCounter(3));
// store.dispatch(resetCounter());
