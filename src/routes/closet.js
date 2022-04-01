import React, { useState } from 'react';
import ShoeCollection from "../ShoeCollection"
import '../App.css';

function Closet(){
const[view,setView]=useState(true)
    function handleClick(){
        setView(!view);
    }
    return(
        <div className="container">
            <div className="main">
                {view ? <button className="view-button" onClick={handleClick}>Front View</button>: <button className="view-button" onClick={handleClick}>Side View</button>}
               {view ? <img src={require("../images/front.jpg")} alt="front view character"/>
                : <img src={require("../images/side.jpg")} alt="side view character"/> }
            </div>
            <ShoeCollection/>
        </div>
    )
}

export default Closet;