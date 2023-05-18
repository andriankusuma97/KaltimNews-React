import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import DashboardPage from '../pages/DashboardPage'
import CategoriesPage from '../pages/CategoriesPage'
import RegisterAdminPage from '../pages/RegisterAdminPage'
import LoginPage from '../pages/LoginPage'
import AddPostPage from '../pages/AddPostPage'
import AddCategoryPage from '../pages/AddCategoryPage'
import EditePostPage from '../pages/EditePostPage'
import Layout from '../components/Layout'


const router = createBrowserRouter([
  {
    path: '/login',
    element:<LoginPage/>,
  },
  {
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }

      return null;
    },
  
    path: '',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/register",
        element: <RegisterAdminPage/>,
      },
      {
        path: "/addPost",
        element: <AddPostPage/>,
      },
      {
        path: "/addCategory",
        element: <AddCategoryPage/>,
      },
      {
        path: "/editePost/:id",
        element: <EditePostPage/>,
      }
    ],
  },

 
]);

export default router