import Content from "../components/Content";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/action/actionCreator";



function HomePage() {
  const dataNews = useSelector((state) => {
    return state.newsReducer.news;
  });
  const dispatch = useDispatch();
  // const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <div className="container items-center mx-auto">
        {loading ? (
              <p>Loadingg ......</p>
            ) : (
              dataNews?.map((data, idx) => <Content data={data} key={idx} />)
            )}
      </div>
    </div>
  );
}

export default HomePage;
