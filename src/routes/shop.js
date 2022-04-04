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
return(
    <ShoeCard key={shoe.id} shoe={shoe} handleAdd={handleAdd}/>
)
})
const [shoeCollection,setShoeCollection]=useState([])
const [clickedShoe,setClickedShoe]=useState("")
function handleAdd(e){
    const clicked = (e.target.value);
    setClickedShoe(clicked);
    const shoeCollectionArray = shoes.filter((shoe)=>{
        if(shoe.name === clickedShoe){
            setShoeCollection([...shoeCollection,shoe])
            fetch("http://localhost:8000/shoe-collection", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(shoe),
    })
    .then((r)=> r.json())
    .then((newShoe)=> console.log(newShoe));      
    }})};
    console.log("shoe collection:",shoeCollection);
    return(
        <div className="shop-container">
            <div className="shop-main">
                <h2>Shop Inventory</h2>
                {shoeCards}
            </div>
            <ShoeCollection setShoeCollection={setShoeCollection} shoeCollection={shoeCollection} shoes={shoes}/>
        </div>
    )
}

export default Shop;