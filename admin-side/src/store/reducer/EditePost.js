import { BASE_URL, ADD_POST,ADD_CATEGORY,EDITE_POST } from "../action/actionType";

const initialState ={
  createSuccess:""
};
const editePostReducer = (state = initialState, action)=>{
  // console.log(action)
  switch (action.type) {
    case EDITE_POST:
      return {
        ...state,
        createSuccess: action.payload,
        
      };
    default:
      return state
  }
}

export default editePostReducer;