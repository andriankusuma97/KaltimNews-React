import { BASE_URL, ADD_POST } from "../action/actionType";

const initialState ={
  createSuccess:""
};
const addPostReducer = (state = initialState, action)=>{
  // console.log(action)
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        createSuccess: action.payload,
        
      };
    default:
      return state
  }
}
export default addPostReducer;