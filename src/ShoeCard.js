import React,{useState} from "react";

function ShoeCard({name,front,side}){
    const[view,setView]=useState(true);
    function toggleView(){
        setView(!view);
    }
    console.log(name);
    console.log(front);
    console.log(side);
    return(
        <div className="shoe-card">
            {view?<img onClick={toggleView}src={front}alt={name}/>:
             <img onClick={toggleView} src={side} alt={name}/>}
             <h3 className="card-shoe-name">{name}</h3>
             <button className="favorite button">➕</button>
        </div>
    )
}

export default ShoeCard;