import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCategory,deleteCategoryAdmin } from "../store/action/actionCreator";


function TableRowCategory({data, no}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDelete(e){
    e.preventDefault()
    await dispatch(deleteCategoryAdmin(data.id))
    navigate('/categories')
    dispatch(fetchCategory())
  }

  return (
    <tr>
    <th>{no+1}</th>
    <td>{data.name}</td>
    <td>{data.createdAt}</td>
    <td>{data.updatedAt}</td>
    <td>
      <button className="btn btn-ghost btn-xs" onClick={handleDelete}>Delete</button>
    </td>
  </tr>
  );
}

export default TableRowCategory;
