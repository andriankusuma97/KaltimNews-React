import { BASE_URL, ADD_POST,ADD_CATEGORY } from "../action/actionType";

const initialState ={
  createSuccess:""
};
const addCategoryReducer = (state = initialState, action)=>{
  // console.log(action)
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        createSuccess: action.payload,
        
      };
    default:
      return state
  }
}
export default addCategoryReducer;