import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Result";

const Questions = () => {

    //creating the states
    const [results, setResults] = useState({})
    const [currentResult, setCurrentResult] = useState([0])
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
            setResults(data.results)
            setCurrentResult(data.results[0])
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
        setQuestIndex(questionIndex + 1)

        if(questionIndex == 9){
            console.log("changing to results page");

        }
    }


    const handleTrueAns = () => {
        if(correctAns == 'True'){
            setSocre(score + 1)
            alert("Yayy well done! You got it right! Let's go =)")
        } else {
            alert("Ohh bad luck! Good luck next time...")
        }
    }


    const handleFalseAns = () => {
        if(correctAns == 'False'){
            setSocre(score + 1)
            alert("Yayy well done! You got it right! Let's go =)")
        }else{
            alert("Ohh bad luck! Good luck next time...")
        }
    }

    //console.log(results);
    // console.log(questions, category, difficulty);
    console.log(correctAns);

    return (
        <div>
            <h2>Question: {questionNumber} / 10</h2>
            <h3>Score: {score}</h3>

            

            <div>
                <p>{category}</p>
                <p>{category}</p>
                <p>{difficulty}</p>
                <p>{questions}</p>


                <button onClick={handleTrueAns}>True</button>
                <button onClick={handleFalseAns}>False</button>

            </div>
            
            <button onClick={() => handleNextQuestion('/results')}>Next question</button>
        </div>

        
    )
}

export default Questions;