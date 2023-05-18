import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData,deletePostAdmin } from "../store/action/actionCreator";
import TableRowPost from "./TableRowPost"

function Table({news,loading}) {

  return (
    <table className="table w-full ">
      {/* head */}
      <thead className="text-center">
        <tr>
          
          <th>Title</th>
          <th>Description</th>
          <th>Category</th>
          <th>Created By</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        { loading?(
          <tr>Loading.....</tr>
        ):(
          news?.map((data,idx) => (
           <TableRowPost data={data} key={idx} />
          ))  
          
        )

        }
      
      </tbody>
    </table>
  );
}

export default Table;
