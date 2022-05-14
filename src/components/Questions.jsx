import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Results from "./Result";

const Questions = () => {
    const history = useHistory();

    //creating the states
    const [questions, setQuestions] = useState([]);
    const [category, setCategory] = useState([]);
    const [difficulty, setDifficulty] = useState([]);
    const [correctAns, setCorrectAns] = useState([]);
    const [questionIndex, setQuestIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestNumb] = useState(1);
    const [counter, setCounter] = useState(0);
    const [counterMin, setCounterMin] = useState(0);
    const [finalScore, setFinalScore] = useState([]);


    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=10&type=boolean").then(({data}) => {
            setQuestions(data.results[0].question)
            // setQuestion(data.results[0])
            setCategory(data.results[0].category)
            setDifficulty(data.results[0].difficulty)
            setCorrectAns(data.results[0].correct_answer)
        });
    }, [questionNumber]);


    //setting the timer of seconds
    useEffect(() => {
        counter >= 0 && counter < 60 && setInterval(() => {
            setCounter((time) => time + 1);
        }, 1000);
        if(counter == 60) {
            setCounter(time = 0);
        }
    }, []);

    useEffect(() => {
        counterMin >= 0 && setInterval(() => {
            setCounterMin((time) => time + 1);
        }, 60000);
        
    }, []);




    const handleTrueAns = () => {
        if(correctAns == 'True'){
            if(difficulty == 'hard') {
                setScore(score + 3)
            }else if(difficulty == 'medium') {
                setScore(score + 2)
            }else {
                setScore(score + 1)
            }

            alert("Yayy well done! You got it right! Let's go =)")
            setFinalScore([...finalScore, 'true']);
        } else {
            alert("Ohh bad luck! Good luck next time...")
            setFinalScore([...finalScore, 'false']);
        }

        console.log("moving to the next question");
        console.log("questionIndex", questionIndex);
        console.log("questionNumber", questionNumber);

        console.log(questionIndex + 1);
        
        if(questionNumber === 10){
            console.log("changing to results page");
            history.push('/results');
            return;
        }
        setQuestNumb(questionNumber + 1)
        setQuestIndex(questionIndex + 1)
    }

    

    const handleFalseAns = () => {
        if(correctAns == 'False'){
            setFinalScore([...finalScore, 'false']);
            alert("Yayy well done! You got it right! Let's go =)");
        }else{
            alert("Ohh bad luck! Good luck next time...");
            setFinalScore([...finalScore, 'true']);
        }

        console.log("moving to the next question");
        console.log("questionIndex", questionIndex);
        console.log("questionNumber", questionNumber);

        console.log(questionIndex + 1);
        
        if(questionNumber === 10){
            console.log("changing to results page");
            history.push('/results');
            return;
        }
        setQuestNumb(questionNumber + 1)
        setQuestIndex(questionIndex + 1)
    }

    console.log(finalScore);
    //console.log(results);
    // console.log(questions, category, difficulty);
    console.log(correctAns);

    return (
        <div>
            <h2>Question: {questionNumber} / 10</h2>
            <h3>Score: {score}</h3>

            

            <div className="details_quest">
                <p>{category}</p>
                <p>{difficulty}</p>
                <p>{questions}</p>


                <button onClick={handleTrueAns}>True</button>
                <button onClick={handleFalseAns}>False</button>

                <p>Timer: {counterMin}:{counter}</p>
            </div>
            
        </div>

        
    )
}

export default Questions;