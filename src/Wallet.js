import React,{useState} from "react";

function Wallet(){
const [money,setMoney]=useState(0)
    return(
        <h3>$:{money}</h3>
    )
}
export default Wallet;