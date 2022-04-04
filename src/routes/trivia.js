import React,{useState,useEffect} from 'react';
import Wallet from '../Wallet';
import QuestionCard from "../QuestionCard";
import '../App.css';
import TriviaForm from '../TriviaForm';
import IncorrectCard from '../IncorrectCard';
import CorrectCard from "../CorrectCard";

function Trivia(){
const[currentQuestion,setCurrentQuestion]=useState(1);
const[questions,setQuestions]=useState([]);
//entire exp object
const [exp,setExp]=useState([]);
const [points,setPoints]=useState(0);
const [level,setLevel]=useState(1);
//Boolean to display correct or incorrect card
const [displayCorrect,setDisplayCorrect]=useState(false);
const [displayIncorrect,setDisplayIncorrect]=useState(false);
const [displayQuestion,setDisplayQuestion]=useState(true);
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
function handleNext(){
    if(currentQuestion<4){
    setCurrentQuestion(currentQuestion+1)
    setDisplayCorrect(false);
    setDisplayIncorrect(false);
    setDisplayQuestion(true);
    }
}

const questionCard = questions.map((object)=>{
    if(object.id === currentQuestion){
    return(
        <QuestionCard key={object.id} number={object.id} update={setCurrentQuestion}
       question={object.question} questions={questions} options={object.options} correct={setDisplayCorrect}
       incorrect={setDisplayIncorrect} setPoints={setPoints} points={points} displayQuestion={setDisplayQuestion}/>
    )}
})

console.log(questions);
    return(
        <div className="trivia-container">
            <div className="trivia-questions">
                {displayCorrect? <CorrectCard handleNext={handleNext}/>:null}
                {displayIncorrect?<IncorrectCard handleNext={handleNext}/>:null}
                {displayQuestion?questionCard:null}
            </div>
            <TriviaForm update={updateAnswer} answer={answer} setAnswerText={setAnswerText} answerText={answerText}/>
            <Wallet x={points} l={level}/>
        </div>
    )
}

export default Trivia;