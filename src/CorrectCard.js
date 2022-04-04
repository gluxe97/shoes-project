import React from "react";

function CorrectCard({handleNext}){

return (
    <div className="correct">
        <h1>Correct!</h1>
        <h2>Nice job</h2>
        <button onClick={handleNext}>Next Question</button>
    </div>
)
}

export default CorrectCard;