import { BASE_URL, FETCH_NEWS,FETCH_DETAIL_NEWS } from "./actionType";

export function  fetchNewsSucces (payload) {
  return {
    type: FETCH_NEWS,
    payload,
  }
}
export function  fetchDetailNewsSucces (payload) {
  return {
    type: FETCH_DETAIL_NEWS,
    payload,
  }
}


export function fetchData() {

  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/customer/post",{
        
      }
      );
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      // setNews(data);
      // console.log(data, "<<<<<<dari client side");
      dispatch(fetchNewsSucces(data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}

export function fetchDetailNews(id) {

  return async (dispatch,getState)=>{

    try {
      const response = await fetch(BASE_URL + "/customer/post/"+id);
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      // setNews(data);
      console.log(data, "<<<<<<dari client side");
      dispatch(fetchDetailNewsSucces(data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}