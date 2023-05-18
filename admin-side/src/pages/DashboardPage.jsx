import Table from "../components/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData,fetchCategory } from "../store/action/actionCreator";
import { Link, useNavigate } from "react-router-dom";


function HomePage() {
  const dataNews = useSelector((state)=>{
    return state.newsReducer.news
  })
  const dispatch = useDispatch()
  // const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchData())
  }, []);

  

  return (
    <div className=" flex p-6 border-4   text-center  mx-auto ">
      <div className="col card flex flex-col">
        <div className="overflow-x-auto w-full  ">
          <button className="btn btn-info float-right" > <Link to={'/addPost'}> +add New Post</Link>  </button>
          <Table news={dataNews} loading={loading} key={dataNews.id} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
