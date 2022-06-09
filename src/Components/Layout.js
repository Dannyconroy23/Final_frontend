import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <img src="https://th.bing.com/th/id/OIP.QcxCmJ_8OxC-F4pB-o1aFgHaEK?pid=ImgDet&rs=1">
            </img>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Characters">Characters</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </>
  )
};

export default Layout;