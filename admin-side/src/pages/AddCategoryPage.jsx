import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategoryAdmin } from "../store/action/actionCreator";



export default function AddCategoryPage() {
  const [addCategory,setAddCategory]=useState({
    name: '',
    
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleChange(e){
    const{value,name}= e.target
    setAddCategory({
      ...addCategory, 
      [name] : value
    })
  }

  function submitaddCategory(e){
    e.preventDefault()
    console.log(addCategory,"<<<<dari addCategory")
    dispatch(addCategoryAdmin(addCategory))
    setAddCategory({
      name: '',
    })
    navigate("/categories")
    // setRegister(null)
  }
  return (
    <div className=" flex p-6 border-4 w-6/12  mx-auto ">
      <div className="col card flex flex-col w-max mx-auto ">
        <div className="overflow-x-auto w-max mx-auto ">
          <h1 className="text-bold">Add New Category</h1>
          <form className=" w-screen " onSubmit={submitaddCategory} > <br />
            <label>Name:</label> <br /> 
            <input className="input w-5/12 " type="text" name="name" value={addCategory.name} onChange={handleChange} /> <br /> <br />

            <button type="submit" className="btn btn-primary">
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
