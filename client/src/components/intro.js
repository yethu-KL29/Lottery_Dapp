import React from "react";
import {Link } from 'react-router-dom';
import "./intro.css";
const intro=()=>{
   return(
    <>
    <h1>YOU r manager</h1>
    <Link to="/manager">
    <button>Manger</button>
    </Link>
    <Link to="/players">
    <button>Player</button>
    </Link>
    </>
   );
};
export default intro;