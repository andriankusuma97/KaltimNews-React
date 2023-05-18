import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function Layout(){
  return (
    <div>
      <Navbar/>
      <div className="h-screen flex flex-row flex-wrap bg-gray-100  ">
        <SideBar/>
        <Outlet/>
      </div>
    </div>
  )
}