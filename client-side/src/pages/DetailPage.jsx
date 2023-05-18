import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailNews } from "../store/action/actionCreator";

function Header() {
  const {id} = useParams()
  const news = useSelector((state) => {
    return state.detailNewsReducer.detailNews;
  });
  // console.log(news,"<<<<data dari details page")
  const dispatch = useDispatch();
  //  const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchDetailNews(id));
  }, []);
  return (
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
            {news?.title}
          </h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
            Category : {news?.Category?.name} <br />
            CreatedBy : {news?.User?.username}
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={news?.imgUrl}
            alt=""
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
          />
          <img
            src="https://images2.prokal.co/webkp/file/berita/2023/04/11/00a8adb5ac5e470516c5a2ce64c79433.jpg"
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
          />
          <img
            src="https://images2.prokal.co/webkp/file/berita/2023/04/11/30f79a15b7c6caafd69e2a7ffdaef79f.jpg"
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
          />
        </div>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button
            type="button"
            className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Check availability
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            {news?.content}
          </p>
      </div>
    </div>
  );
}

export default Header;
