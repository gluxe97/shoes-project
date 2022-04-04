import React from "react";

function IncorrectCard({handleNext}){

return(
    <div className="incorrect">
        <h1>Incorrect!</h1>
        <h2>Booo you suck</h2>
        <button onClick={handleNext}>Next Question</button>
    </div>
)
}

export default IncorrectCard;