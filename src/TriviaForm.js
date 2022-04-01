import React,{useState} from "react"

function TriviaForm({update,answer,setAnswerText,answerText}){
    const[isCorrect,setIsCorrect]=useState(false);
    const[question,setQuestion]=useState();
    const[options,setOptions]=useState([]);
    const[optionNum,setOptionNum]=useState(0);
    const[questionText,setQuestionText]=useState("");
    const[subQuestion,setSubQuestion]=useState(true);
    const [subAnswer,setSubAnswer]=useState(true);


    function toggle(){
        setIsCorrect(!isCorrect);
    }
    
    //Create Question Object
    function handleMainSub(e){
        e.preventDefault();
        setQuestion(question);
    const formData = {
        "question": question,
        "options": options
    }
    fetch("http://localhost:8000/questions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((r)=> r.json())
    .then((newQuestion)=> console.log(newQuestion));      
    }
    console.log(options);
    console.log(question);
    //Display Text in input fields
    function handleQuestionText(e){
        setQuestionText(e.target.value);
        setQuestion(e.target.value);
    }

    function handleAnswerText(e){
        setAnswerText(e.target.value);
        update(e.target.value);
    }
    //render answer input and save question to state
    function renderAnswerInput(){
        setSubQuestion(false);
    }
    //render Submit button and update answer array
    function renderSub(e){
        e.preventDefault();
        const newOption={"answer":answer,
        "isCorrect":isCorrect}
        const optionsData = [...options,newOption]
        if(optionNum<4){
            setOptionNum(optionNum + 1);
            setOptions(optionsData);
        }
        else{setOptionNum(0)
            setSubAnswer(false);}
        }
        
        const submitQuestion = 
        <form onSubmit={renderAnswerInput} className="trivia-form">
        <input onChange={handleQuestionText} type="text" className="question-input" value={questionText}></input>
        <button type="button" onClick={renderAnswerInput}>Submit Question</button>
    </form>

    const submitAnswers =
    <form onSubmit={handleMainSub}className="trivia-form">
        <input onChange={handleAnswerText} type="text" className="answer-input" value={answerText}></input>
        <button type="button" onClick={toggle}>{isCorrect? "Correct" : "Incorrect"}</button>
        <button type="button" onClick={renderSub}>Submit Answer</button>
        {subAnswer ? null : <button className="main-submit" type="submit">Submit</button>}
    </form>


return(
    <div>
    {subQuestion ? submitQuestion : submitAnswers}
    </div>
)
}

export default TriviaForm;