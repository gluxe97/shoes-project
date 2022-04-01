import React,{useState,useEffect} from 'react';
import Wallet from '../Wallet';
import QuestionCard from "../QuestionCard";
import '../App.css';
import TriviaForm from '../TriviaForm';

function Trivia(){
const[currentQuestion,setCurrentQuestion]=useState(1);
const[questions,setQuestions]=useState([]);
const [exp,setExp]=useState([]);
const [points,setPoints]=useState(0);
const [level,setLevel]=useState(1);
const [status,setStatus]=useState(false);
//form answer input
const[answer,setAnswer]=useState("");
const[answerText,setAnswerText]=useState("");

//fetch questions
useEffect(()=>{
    fetch("http://localhost:8000/questions")
    .then(r=>r.json())
    .then(data=>setQuestions(data))
},[])

//fetch experience
useEffect(()=>{
    fetch("http://localhost:8000/experience")
    .then(r=>r.json())
    .then(experience=>{
        setExp(experience)
        setPoints(experience[0].points)
        setLevel(experience[0].level)});
},[])

//create Option array
function updateAnswer(input){
    setAnswer(input);
}

const questionCard = questions.map((object)=>{
    if(object.id === currentQuestion){
    return(
        <QuestionCard key={object.id} number={object.id} update={setCurrentQuestion}
       question={object.question} options={object.options} setStatus={setStatus} x={exp}/>
    )}
})

console.log(questions);
    return(
        <div className="trivia-container">
            <div className="trivia-questions">
               {questionCard}
            </div>
            <TriviaForm update={updateAnswer} answer={answer} setAnswerText={setAnswerText} answerText={answerText}/>
            <Wallet x={points} l={level}/>
        </div>
    )
}

export default Trivia;