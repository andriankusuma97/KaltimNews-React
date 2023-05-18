import Stat from "../components/Stat";
import Content from "../components/Content";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/action/actionCreator";

function HomePage() {
  const dataNews = useSelector((state) => {
    return state.newsReducer.news;
  });
  // console.log(dataNews,"<<<<dari home Page")
  const dispatch = useDispatch();
  // const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(true);

  //buat fungsi add submit

  useEffect(() => {
    dispatch(fetchData());
    
  }, []);

  return (
    <div>
      <Stat />
      <div className="container mx-auto my-4">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 col-span-2 bg-white">
            {dataNews?.map((data, idx) => (
              <Content data={data} key={data.id} />
            ))}
          </div>
          <div className=" bg-slate-200">News Populer</div>
          <div className="row-span-2  bg-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            excepturi voluptas harum iste inventore aliquam saepe velit
            assumenda dolorem nesciunt animi vitae natus quis suscipit
            perferendis maiores, esse nisi eaque.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
