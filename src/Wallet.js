import React,{useState} from "react";

function Wallet(){
const [exp,setExp]=useState(0)
    return(
        <h3>Exp:{exp}</h3>
    )
}
export default Wallet;