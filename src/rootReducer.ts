import { combineReducers } from "@reduxjs/toolkit";
import tasksModule from "./store/tasksModule";
import crudModule from "./store/crudModule";

const rootReducer = combineReducers({
  tasks: tasksModule.reducer,
  crud: crudModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
