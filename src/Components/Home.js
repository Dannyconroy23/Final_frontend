import React from 'react';
import VideoPlayBack from "./videoplayback.mp4"
import image from "./image.png";
import { Link } from "react-router-dom";



function Home() {

  return (
    <div className="Home">
      
      <img src={image} className="imgHome" style={{
        position:"absolute",
        width:"100%",
        marginTop:"215px",
        left:'25px',

        height:"90%",
      }}></img>
      <div >
        <div className="HomeHeaderDiv">
          <h1 className="HomeHeaderDiv" >Where Dreams Come True...</h1>
        </div>
        <div className="HomeButton">
        <Link style={{color: 'black',textDecoration: 'none'}} to="/Characters">Visit Characters</Link>
        </div>
        <video 
      className="video"
      autoPlay
      loop 
      muted
      style={{
        position: "absolute",
        width:"100%",
        top:"40%" ,
        right:'0%',
        height:"50%",
      }}>
        <source src={VideoPlayBack} type="video/mp4">

        </source>
      </video>
      
      </div>
      
      </div>
      
    )
  }

export default Home;