import {BASE_URL, 
  FETCH_NEWS,
  FETCH_CATEGORY,
  ADD_USER,LOGIN_USER,ADD_POST,ADD_CATEGORY,DELETE_POST,DELETE_CATEGORY,EDITE_POST,FETCH_DATAID } from "./actionType"

export function  fetchNewsSucces (payload) {
  return {
    type: FETCH_NEWS,
    payload,
  }
}
export function  fetchDataByIdSucces (payload) {
  return {
    type: FETCH_DATAID,
    payload,
  }
}
export function  fetchCategorySucces (payload) {
  return {
    type: FETCH_CATEGORY,
    payload,
  }
}

export function addUser(payload){
  return{
    type: ADD_USER,
    payload
  }
}

export function loginSuccess(payload){
  return{
    type: LOGIN_USER,
    payload
  }
}
export function addPostSuccess(payload){
  return{
    type: ADD_POST,
    payload
  }
}
export function addCategorySuccess(payload){
  return{
    type: ADD_CATEGORY,
    payload
  }
}

export function deletePostSuccess(payload){
  return{
    type: DELETE_POST,
    payload
  }
}

export function deleteCategorySuccess(payload){
  return{
    type: DELETE_CATEGORY,
    payload
  }
}

export function editePostSuccess(payload){
  return{
    type: EDITE_POST,
    payload
  }
}


export function fetchData() {

  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/admin/post",{
        headers : {
          access_token :localStorage.access_token
        }
      }
      );
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      dispatch(fetchNewsSucces(data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}
export function fetchDataById(id) {

  return async (dispatch,getState)=>{
    try {
      console.log(id,"<<<<masuk sini by id")
      const response = await fetch(BASE_URL + "/admin/post/"+id,{
        headers : {
          access_token :localStorage.access_token
        }
      }
      );
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      dispatch(fetchDataByIdSucces(data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}

export function fetchCategory(){
  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL+"/admin/category",{
        headers : {
          access_token :localStorage.access_token
        }
      })
      if(!response.ok){
        throw await response.text();
      }
      const data = await response.json();
      dispatch(fetchCategorySucces(data))
    } catch (error) {
      console.log(error,"<<<dari action cateogry")
    }finally{
      //setLoading(false)
    }
  }
}

export function registerAdmin(user){
  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/register",{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          access_token :localStorage.access_token
        },
      })
      if(!response.ok){
        throw await response.text();
      }
      const data = await response.json();
      dispatch(addUser(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function loginAdmin(user){
  return async (dispatch,getState)=>{
    try {
      console.log(user,"<<<dari login")
      const response = await fetch(BASE_URL + "/login",{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      if(!response.ok){
        throw await response.text();
      }
      const data = await response.json();
      localStorage.access_token = data.access_token
      localStorage.email = data.email
      console.log(user,"<<<<normallll")
      dispatch(loginSuccess(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function addPostAdmin(user){
  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/admin/post",{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          access_token :localStorage.access_token
        },
      })
      if(!response.ok){
        throw await response.text();
      }
      const data = await response.json();
      console.log(data , "<<<< dari add Post action")
      dispatch(addPostSuccess(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function addCategoryAdmin(user){
  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/admin/category",{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          access_token :localStorage.access_token
        },
      })
      if(!response.ok){
        throw await response.text();
      }
      const data = await response.json();
      console.log(data , "<<<< dari add Post action")
      dispatch(addCategorySuccess(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function deletePostAdmin(id){
  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/admin/post/"+id,{
        method: "DELETE",
        headers: {
          access_token :localStorage.access_token
        },
      })
      if(!response.ok){
        throw await response.text();
      }
      const data = await response.json();
      console.log(data , "<<<< dari add Post action")
      dispatch(deletePostSuccess(data))
    } catch (error) {
      console.log(error)
    }
  }
}


export function deleteCategoryAdmin(id){
  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/admin/category/"+id,{
        method: "DELETE",
        headers: {
          access_token :localStorage.access_token
        },
      })
      if(!response.ok){
        throw await response.text();
      }
      const data = await response.json();
      console.log(data , "<<<< dari add Post action")
      dispatch(deleteCategorySuccess(data))
    } catch (error) {
      console.log(error)
    }
  }
}


export function editePostAdmin(post,id){
  return async (dispatch,getState)=>{
    try {
      // console.log("<<<<<<<dariEditeAction")
      const response = await fetch(BASE_URL + "/admin/post/"+id,{
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          access_token :localStorage.access_token
        },
      })
      if(!response.ok){
        throw await response.text();
      }
      const data = await response.json();
      console.log(data , "<<<< dari editeeee action")
      dispatch(editePostSuccess(data))
    } catch (error) {
      console.log(error)
    }
  }
}