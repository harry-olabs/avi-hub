import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../../src/redux/reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer, 
});

export default store;
