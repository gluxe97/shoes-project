import React,{useState} from "react";

function Wallet(){
const [money,setMoney]=useState(0)
    return(
        <h1>$:{money}</h1>
    )
}
export default Wallet;