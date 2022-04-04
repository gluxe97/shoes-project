import React,{useState} from "react";

function ShoeCard({shoe,handleAdd}){
    const[view,setView]=useState(true);
    function toggleView(){
        setView(!view);
    }
   
    return(
        <div className="shoe-card">
            {view?<img onClick={toggleView}src={shoe.image.front}alt={shoe.name}/>:
             <img onClick={toggleView} src={shoe.image.side} alt={shoe.name}/>}
             <h3 className="card-shoe-name">{shoe.name}</h3>
             <button onClick={handleAdd} className="favorite button" value={shoe.name}>➕</button>
        </div>
    )
}

export default ShoeCard;