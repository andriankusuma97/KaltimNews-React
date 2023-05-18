import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { fetchData,deletePostAdmin } from "../store/action/actionCreator";


function TableRowPost({data}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDelete(e){
    e.preventDefault()
    await dispatch(deletePostAdmin(data.id))
    navigate('/')
    dispatch(fetchData())
  }

  

  return (
            <tr >
          
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src= {data.imgUrl}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold line-clamp-3 w-20">{data.title}</div>
                </div>
              </div>
            </td>
            <td >
              <br />
              <span className="line-clamp-3 w-40">
                {data.content}
              </span>
            </td>
            <td className="text-center">
              {data.Category.name}
            </td>
            <td className="text-center">
              {data.User.username}
            </td>
            <th>
              <button className="btn btn-ghost btn-xs"> <Link to={'/editePost/'+ data.id}> Edite</Link> </button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs" onClick={handleDelete} >Delete</button>
            </th>
          </tr>
  );
}

export default TableRowPost;
