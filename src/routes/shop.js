import React, { useState,useEffect } from 'react';
import ShoeCard from '../ShoeCard';
import ShoeCollection from '../ShoeCollection';
import nikeZoomAirFlyFront from "../images/Air Zoom Alphafly Front.PNG"
import nikeZoomAirFlySide from "../images/Air Zoom Alphafly Side.PNG"
import '../App.css';

function Shop(){
    const[shoes,setShoes]=useState([]);
    useEffect(()=>{
        setShoes([
            {"id":1,
            "name":"Nike Zoom Air Fly",
            "front":{nikeZoomAirFlyFront},
            "side":{nikeZoomAirFlySide}
            },
            {"id":2,
            "name":"Nike Zoom Air Fly",
            "front":{nikeZoomAirFlyFront},
            "side":{nikeZoomAirFlySide}
            },
            {"id":3,
            "name":"Nike Zoom Air Fly",
            "front":{nikeZoomAirFlyFront},
            "side":{nikeZoomAirFlySide}
            }
        ])
    },[]);
    console.log(shoes);
const shoeCards = shoes.map((shoe)=>{
return(
    <ShoeCard key={shoe.id} name={shoe.name} front={shoe.front} side={shoe.side}/>
)
})
    return(
        <div className="shop-container">
            <div className="shop-main">{shoeCards}</div>
            <ShoeCollection/>
        </div>
    )
}

export default Shop;