import { combineReducers } from "redux";
import authReducer from "../../src/redux/reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
