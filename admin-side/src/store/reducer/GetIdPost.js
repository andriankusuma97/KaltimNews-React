import { BASE_URL, FETCH_DATAID } from "../action/actionType";

const initialState ={
  dataId:[]
};
const dataIdReducer = (state = initialState, action)=>{
  console.log(action,"<<<< dari reducer data id")
  switch (action.type) {
    case FETCH_DATAID:
      return {
        ...state,
        dataId: action.payload,
        
      };
    default:
      return state
  }
}
export default dataIdReducer;