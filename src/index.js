import configureAppStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/projects";
const store = configureAppStore();

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(bugAdded({ description: "Bug1" }));
store.dispatch(bugAdded({ description: "Bug2" }));
store.dispatch(bugAdded({ description: "Bug2" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 1 }));
console.log(store.getState());
