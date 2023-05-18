import { BASE_URL, FETCH_CATEGORY } from "../action/actionType";

const initialState ={
  categories:[1]
};
const categoryReducer = (state = initialState, action)=>{
  // console.log(action)
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        
      };
    default:
      return state
  }
}
export default categoryReducer;