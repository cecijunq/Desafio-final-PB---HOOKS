import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Result";

const Questions = () => {

    //creating the states
    const [questions, setQuestions] = useState([]);
    const [category, setCategory] = useState([]);
    const [difficulty, setDifficulty] = useState([]);
    const [correctAns, setCorrectAns] = useState([]);
    const [questionIndex, setQuestIndex] = useState(0);
    const [score, setSocre] = useState(0);
    const [questionNumber, setQuestNumb] = useState(1);
    const [page, setPage] = useState(<Questions/>);



    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=10&type=boolean").then(({data}) => {
            setQuestions(data.results[0].question)
            // setQuestion(data.results[0])
            setCategory(data.results[0].category)
            setDifficulty(data.results[0].difficulty)
            setCorrectAns(data.results[0].correct_answer)
        });
    }, [questionNumber]);



    const handleNextQuestion = () => {
        console.log("moving to the next question");

        console.log(questionIndex + 1);
        setQuestNumb(questionNumber + 1)
        // setQuestions([questions + 1])
        setQuestIndex(questionIndex + 1)

        if(questionIndex == 9){
            console.log("changing to results page");

        }
    }

    console.log(questions, category, difficulty);

    return (
        <div>
            <h2>Question: {questionNumber} / 10</h2>

            

            <div>
                <p>{category}</p>
                <p>{difficulty}</p>
                <p>{questions}</p>
                <button>True</button>
                <button>False</button>

            </div>
            
            <button onClick={() => handleNextQuestion('/results')}>Next question</button>
        </div>

        
    )
}

export default Questions;