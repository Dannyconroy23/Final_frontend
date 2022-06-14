import React from 'react';
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="Home">
      <div >
        <div className="HomeHeaderDiv">
          <h1 className="HomeHeaderDiv" >Where Dreams Come True...</h1>
        </div>
        <div className="HomeButton">
        <Link style={{color: 'black',textDecoration: 'none'}} to="/Characters">Visit Characters</Link>
        </div>
      </div>
      </div>
      
    )
  }

export default Home;