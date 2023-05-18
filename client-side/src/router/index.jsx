import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '../pages/HomePage'
import NewsPage from '../pages/NewsPage'
import DetailPage from '../pages/DetailPage'
import Layout from '../components/Layout'


const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage/>,
      }
    ],
  },
]);

export default router