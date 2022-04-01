import React from "react";

function QuestionCard({number,options,question,setStatus,update,x,setExp}){
    function checkBoolean(e){
        if(e.target.value === "true"){
            setStatus(true);
            update(number + 1);
            setExp(x + 10);
        }
    }
    const optionButton = options.map((option)=>{
        return(
            <button onClick={checkBoolean} value={option.isCorrect} key={option.answer} className="trivia-button">
                {option.answer}</button>
        )
    })
    
    return(
        <div className="trivia-card">
                <h1 className="card-title">Question:{number}/4</h1>
            <div className="question">
                <h2>{question}</h2>
            </div>
            <div className="answers">
                {optionButton}
            </div>    
        </div>
    )
}

export default QuestionCard;