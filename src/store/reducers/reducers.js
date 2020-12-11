import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import launchesReducer from "./launchesReducer";
import oneLaunchReducer from "./oneLaunchReducer";

const reducers = combineReducers({
  dataReducer,
  launchesReducer,
  oneLaunchReducer,
  loadingReducer,
  errorReducer,
});

export default reducers;
