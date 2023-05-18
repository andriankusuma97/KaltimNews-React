import { Link, useNavigate } from "react-router-dom";
import TableRowCategory from "./TableRowCategory"

export default function TableCategory({category}) {
  return (
    <div>
      <div className="overflow-x-auto">
      <button className="btn btn-info float-right" > <Link to={'/addCategory'}> +add New Category</Link>  </button>

  <table className="table w-full text-center">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        category?.map((data,idx)=>(
          <TableRowCategory data={data} key={idx} no={idx} />
        ))
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
}
