import { combineReducers } from "redux";
import newsReducer from "./news";
import categoryReducer from "./category";
import registerReducer from "./register";
import loginReducer from "./login";
import addPostReducer from "./AddPost";
import addCategoryReducer from "./AddCategory";
import deletePostReducer from "./DeletePost";
import deleteCategoryReducer from "./DeleteCategory";
import dataIdReducer from "./GetIdPost";



export const rootReducer = combineReducers({
  newsReducer,
  categoryReducer,
  registerReducer,
  loginReducer,
  addPostReducer,
  addCategoryReducer,
  deletePostReducer,
  deleteCategoryReducer,
  dataIdReducer
})
