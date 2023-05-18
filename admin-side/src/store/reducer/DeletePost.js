import { BASE_URL, DELETE_POST } from "../action/actionType";

const initialState ={
  createSuccess:""
};
const deletePostReducer = (state = initialState, action)=>{
  // console.log(action)
  switch (action.type) {
    case DELETE_POST:
      return {
        ...state,
        createSuccess: action.payload,
        
      };
    default:
      return state
  }
}
export default deletePostReducer;