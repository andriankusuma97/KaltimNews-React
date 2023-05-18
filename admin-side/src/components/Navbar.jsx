import { Link, useNavigate } from "react-router-dom";



function Header() {

  const navigate = useNavigate()

  function handleLogout(e){
    e.preventDefault()
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div className="navbar bg-slate-300">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl  ">Hi,ADMIN</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://th.bing.com/th/id/R.5ca7598094fd31a541a980e0fb9265be?rik=8H511p0Yxl6XuQ&riu=http%3a%2f%2fsns-hub.com%2fimg%2fadmin.png&ehk=Bcj%2bQJpMZE7Bt2Rz2KZKYatrWYry%2bcS7NZy5JYlAkMc%3d&risl=&pid=ImgRaw&r=0" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li> <a href="" onClick={handleLogout}>Logout</a> </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Header;
