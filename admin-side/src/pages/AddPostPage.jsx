import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData,fetchCategory,registerAdmin,addPostAdmin } from "../store/action/actionCreator";



export default function AddPostPage() {
  const [addPost,setAddPost]=useState({
    title: '',
    email: '',
    content: '',
    imgUrl: '',
    categoryId: '',
    tags1: '',
    tags2: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleChange(e){
    const{value,name}= e.target
    setAddPost({
      ...addPost, 
      [name] : value
    })
  }

  function submitaddPost(e){
    e.preventDefault()
    console.log(addPost,"<<<<dari addPost")
    dispatch(addPostAdmin(addPost))
    setAddPost({
      title: '',
      email: '',
      content: '',
      imgUrl: '',
      categoryId: '',
      tags1: '',
      tags2: '',
    })
    navigate("/")
    // setRegister(null)
  }
  return (
    <div className=" flex p-6 border-4 w-6/12  mx-auto ">
      <div className="col card flex flex-col w-max mx-auto ">
        <div className="overflow-x-auto w-max mx-auto ">
          <h1 className="text-bold">Add New Post</h1>

          <form className=" w-screen " onSubmit={submitaddPost} > 
            <label>Title:</label> <br />
            <input className="input w-5/12 " type="text" name="title" value={addPost.title} onChange={handleChange} /> <br />

            <label>content:</label> <br />
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-5/12" name="content" value={addPost.content} onChange={handleChange}  ></textarea>            
            <br /> 


            <label>Image Url:</label> <br />
            <input className="input w-5/12" type="text" name="imgUrl" value={addPost.imgUrl} onChange={handleChange}  /><br />


            <label>Category:</label> <br />
            <input className="input w-5/12" type="text" name="categoryId" value={addPost.categoryId} onChange={handleChange}  /><br />

            <label>Tags 1:</label> <br />
            <input className="input w-5/12" type="text" name="tags1" value={addPost.tags1} onChange={handleChange}  /><br />

            <label>Tags 2:</label> <br />
            <input className="input w-5/12" type="text" name="tags2" value={addPost.tags2} onChange={handleChange}  /><br /> <br />
            
            <button type="submit" className="btn btn-primary">
              Submit{" "}
            </button>
          </form>

          
        </div>
      </div>
    </div>
  );
}
