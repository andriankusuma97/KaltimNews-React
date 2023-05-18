import { BASE_URL, FETCH_NEWS } from "../action/actionType";

const initialState ={
  news:[]
};
const newsReducer = (state = initialState, action)=>{
  console.log(action)
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        news: action.payload,
        
      };
    default:
      return state
  }
}
export default newsReducer;