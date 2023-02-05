import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterState";
import { addTodo, editTodo, removeTodo, todosReducer } from "./TodosState";

// combineReducers' parameter has to be an "object"
const rootReducer = combineReducers({
  //   counterReducer,
  counter: counterReducer,
  todos: todosReducer,
});

// export const store = createStore(counterReducer);
export const store = createStore(rootReducer);
console.log(store);

store.subscribe(() => {
  console.log(store.getState()); // shows "all states"
});

// for every each "dispatch", "subscribe" re-rendered. So "subscribe" get triggered with "dispatch"
store.dispatch(addTodo({ id: 1, title: "first todo", completed: true })); // this data is "action.payload"
store.dispatch(addTodo({ id: 2, title: "second todo", completed: false }));
store.dispatch(addTodo({ id: 3, title: "third todo", completed: false }));
store.dispatch(addTodo({ id: 4, title: "fourth todo", completed: true }));
store.dispatch(removeTodo(2));
store.dispatch(removeTodo(3));
// store.dispatch(editTodo(2, { title: "second todo", completed: true })); // Uncaught TypeError: Cannot read properties of undefined (reading 'id')
store.dispatch(editTodo(4, { title: "fourth todo", completed: false }));
