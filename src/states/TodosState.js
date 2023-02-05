const defaultState = [];

const ADD = "TODOS@ADD";
const REMOVE = "TODOS@REMOVE";
const EDIT = "TODOS@EDIT";

export function addTodo(user) {
  return {
    type: ADD,
    payload: user,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}

export function editTodo(id, data) {
  return {
    type: EDIT,
    payload: { id, data },
  };
}

export function todosReducer(state = defaultState, action) {
  //   console.log(state);
  //   console.log(action);
  switch (action.type) {
    case ADD: {
      // return state.concat(action.payload)
      return [...state, action.payload];
    }
    case REMOVE: {
      return state.filter((user) => user.id !== action.payload); // this is not deleting actually, only filtering and getting other datas which have different than matched id. Fake Delete or Return Different Array.
    }
    case EDIT: {
      return state.map((user) => {
        console.log({ user });
        console.log({ ...user });
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload.data };
          // return { user, ...action.payload.data };
          //   return { ...user, data: action.payload.data };
          //   return { user, data: action.payload.data };
        }

        return user;
      });
    }

    default: {
      return state;
    }
  }
}
