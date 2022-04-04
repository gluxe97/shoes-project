import React from "react";

function QuestionCard({number,options,question,questions,
    correct,incorrect,setPoints,points,displayQuestion}){
    function checkBoolean(e){
        if(e.target.value === "true"){
            correct(true);
            setPoints(points + 10);
            displayQuestion(false);
        }
        else{
            incorrect(true);
            displayQuestion(false);
        }
    }

    console.log(points);
    const optionButton = options.map((option)=>{
        return(
            <button onClick={checkBoolean} value={option.isCorrect} key={option.answer} className="trivia-button">
                {option.answer}</button>
        )
    })
    
    return(
        <div className="trivia-card">
                <h1 className="card-title">Question:{number}/{questions.length}</h1>
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