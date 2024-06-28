const redux = require('redux');

// console.log(redux);

const currentState = {
  num: 0,
};

// Creating a Redux store with a single reducer
// reducer e state pathaite hobe
// action gula dispatch theke pabe

let rootReducer = (state = currentState, action) => {
  if (action.type === 'INC') {
    // Corrected the action type here
    return {
      ...state,
      num: state.num + 1,
    };
  }
  if (action.type === 'ADD') {
    return {
      ...state,
      num: state.num + action.value,
    };
  }
  if (action.type === 'SUB') {
    return {
      ...state,
      num: state.num - action.value,
    };
  }
  if(action.type === 'MUL') {
    return {
      ...state,
      num: state.num * action.value,
    }
  }
  return state;
};
const store = redux.createStore(rootReducer);

console.log(store.getState());

// in the middle i have to declare subscribe func
// jkhn e dispatch pabe tkhn subscribe call hobe serial wise

store.subscribe(() => {
  console.log('[Subscribe] ', store.getState());
});

// create actions
store.dispatch({
  type: 'INC', // This matches the action type checked in the reducer
});

store.dispatch({
  type: 'ADD',
  value: 34,
});

store.dispatch({
  type: 'SUB',
  value: 5,
});
store.dispatch({
  type: 'MUL',
  value: 15,
})

// console.log(store.getState());
