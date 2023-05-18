import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData,fetchCategory,registerAdmin } from "../store/action/actionCreator";



export default function RegisterAdminPage() {
  const [register,setRegister]=useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  })
  const dispatch = useDispatch()
  
  function handleChange(e){
    const{value,name}= e.target
    setRegister({
      ...register, 
      [name] : value
    })
  }

  function submitRegister(e){
    e.preventDefault()
    console.log(register,"<<<<dari register")
    dispatch(registerAdmin(register))
    setRegister({
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
    })
    // setRegister(null)
  }
  return (
    <div className=" flex p-6 border-4 w-6/12  mx-auto ">
      <div className="col card flex flex-col w-max mx-auto ">
        <div className="overflow-x-auto w-max mx-auto ">
          <h1>Register</h1>
          <form className=" w-screen " onSubmit={submitRegister} > 
            <label>Username:</label> <br />
            <input className="input w-5/12 " type="text" name="username" value={register.username} onChange={handleChange} /> <br />
            <label>Email:</label> <br />
            <input className="input w-5/12" type="text" name="email" value={register.email} onChange={handleChange}  /><br />
            <label>Password:</label> <br />
            <input className="input w-5/12" type="password" name="password" value={register.password} onChange={handleChange}  /><br />
            <label>Phone Number:</label> <br />
            <input className="input w-5/12" type="text" name="phoneNumber" value={register.phoneNumber} onChange={handleChange}  /><br />
            <label>Address:</label> <br />
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-5/12" name="address" value={register.address} onChange={handleChange}  ></textarea>            
            <br /> 
            <button type="submit" className="btn btn-primary">
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
