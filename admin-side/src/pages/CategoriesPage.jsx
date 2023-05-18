import Table from "../components/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData ,fetchCategory } from "../store/action/actionCreator";
import TableCategory from '../components/TebleCategory'
import { Link, useNavigate } from "react-router-dom";



export default function CategoriesPage(){
 
  const dataCategory = useSelector((state)=>{
    return state.categoryReducer.categories
  })
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategory())
  }, []);
  console.log(dataCategory,"<<<dari cetogry 1111")

  return(
    <div className=" flex p-6 border-4   text-center  mx-auto ">
      <div className="col card flex flex-col">
        <div className="overflow-x-auto w-full  ">
          <h1>Category</h1>
          <TableCategory category={dataCategory}/>
        </div>
      </div>
    </div>
  )
}