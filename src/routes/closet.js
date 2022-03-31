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
                {view ? <button className="view-button" onClick={handleClick}>⬅️</button>: <button className="view-button" onClick={handleClick}>➡️</button>}
            <div className="main">
               {view ? <img src={require("../images/front.jpg")} alt="front view character"/>
                : <img src={require("../images/side.jpg")} alt="side view character"/> }
            </div>
            <ShoeCollection/>
        </div>
    )
}

export default Closet;