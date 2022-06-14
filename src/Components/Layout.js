import { Link, Outlet } from "react-router-dom";
import React from "react"

const Layout = ({setIsAuthenticated,setUser}) => {


  function handleLogout(){
      fetch('/logout', {
          method: 'DELETE',
      }).then(() => {
          setIsAuthenticated(false)
          setUser(null)
      });
  }
  return (
    <>
      <nav className="nav">
        <ul>
            <img className="logo" alt="logo" src="https://th.bing.com/th/id/OIP.QcxCmJ_8OxC-F4pB-o1aFgHaEK?pid=ImgDet&rs=1">
            </img>
          <li className="navBtn" >
            <Link style={{color: 'black',textDecoration: 'none'}} to="/home">Home</Link>
          </li>
          <li className="navBtn" >
            <Link style={{color: 'black',textDecoration: 'none'}} to="/Characters">Characters</Link>
          </li>
          <li className="navBtn" >
            <Link style={{color: 'black',textDecoration: 'none'}} to="/Favorites">Favorites</Link>
          </li>
          <div className="navLogoutDiv">
                <button  className="navLogout"  onClick={handleLogout}>LOG OUT</button>
            </div>
        </ul>
      </nav>

      <Outlet></Outlet>
    </>
  )
};

export default Layout;