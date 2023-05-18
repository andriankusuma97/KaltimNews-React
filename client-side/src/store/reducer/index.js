import { combineReducers } from "redux";
import newsReducer from "./news";
import detailNewsReducer from "./detailNews";



export const rootReducer = combineReducers({
  newsReducer,
  detailNewsReducer,
})
