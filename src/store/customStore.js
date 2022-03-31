//private property in javascript
import reducer from "./reducer";
function createStore(reducer) {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  function dispatch(action) {
    //call the reducer to get the new state
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}
export default createStore(reducer);
