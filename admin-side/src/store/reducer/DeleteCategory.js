import { BASE_URL, DELETE_CATEGORY } from "../action/actionType";

const initialState ={
  createSuccess:""
};
const deleteCategoryReducer = (state = initialState, action)=>{
  // console.log(action)
  switch (action.type) {
    case DELETE_CATEGORY:
      return {
        ...state,
        createSuccess: action.payload,
        
      };
    default:
      return state
  }
}
export default deleteCategoryReducer;