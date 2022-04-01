import React, { useState,useEffect } from 'react';
import ShoeCard from '../ShoeCard';
import ShoeCollection from '../ShoeCollection';
import '../App.css';

function Shop(){
    const[shoes,setShoes]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8000/shoes")
        .then(r=>r.json())
        .then(data=>setShoes(data))
    },[]);
const shoeCards = shoes.map((shoe)=>{
    console.log(shoe);
return(
    <ShoeCard key={shoe.id} shoe={shoe}/>
)
})
    return(
        <div className="shop-container">
            <div className="shop-main">{shoeCards}</div>\
            <ShoeCollection/>
        </div>
    )
}

export default Shop;