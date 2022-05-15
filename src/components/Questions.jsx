import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeScore, registerAnswers, registerAnswer, changeMinutes, changeSeconds } from '../store/actions';

import axios from "axios";
import Results from "./Result";

const Questions = () => {

    const finalScore = useSelector(state => state.finalScore); //é o escutador do estado global
    const answers = useSelector(state => state.answers);
    const answer = useSelector(state => state.answer);
    const seconds = useSelector(state => state.seconds);
    const minutes = useSelector(state => state.minutes);

    const dispatch = useDispatch(changeScore(), registerAnswers(), registerAnswer(), changeMinutes(), changeSeconds());

    // const handleChangeFinalScore = (text) => {
    //     dispatch(changeScore(text));
    // }

    const history = useHistory();

    //creating the states
    const [questions, setQuestions] = useState([]);
    const [category, setCategory] = useState([]);
    const [difficulty, setDifficulty] = useState([]);
    const [correctAns, setCorrectAns] = useState([]);
    const [questionIndex, setQuestIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestNumb] = useState(1);
    const [secondsCounter, setSecondsCounter] = useState(0);
    const [minutesCounter, setMinutesCounter] = useState(0);
    //const [finalScore, setFinalScore] = useState([]);


    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=10&type=boolean").then(({data}) => {
            setQuestions(data.results[0].question)
            setCategory(data.results[0].category)
            setDifficulty(data.results[0].difficulty)
            setCorrectAns(data.results[0].correct_answer)
        });
    }, [questionNumber]);


    //setting the timer of seconds
    useEffect(() => {
        secondsCounter < 60 && setTimeout(() => {
            setSecondsCounter(secondsCounter + 1);
            dispatch(changeSeconds(seconds + 1))
        }, 1000);
    }, [secondsCounter]);

    useEffect(() => {
        if(secondsCounter == 60) {
            setSecondsCounter(0);
            setMinutesCounter(minutesCounter + 1);
            dispatch(changeMinutes(minutes + 1));
        }
    }, [secondsCounter, minutesCounter]);




    const handleTrueAns = () => {
        if(correctAns == 'True'){
            if(difficulty == 'hard') {
                setScore(score + 3)
            }else if(difficulty == 'medium') {
                setScore(score + 2)
            }else {
                setScore(score + 1)
            }
        
            alert("Yayy well done! You got it right! Let's go =)");
            //dispatch(registerAnswer("True"));
            //dispatch(registerAnswers(registerAnswer));
            dispatch(changeScore(finalScore + 1));
        } else {
            alert("Ohh bad luck! Good luck next time...");
            //dispatch(registerAnswer("False"));
            //dispatch(registerAnswers(registerAnswer));
        }

        console.log("moving to the next question");
        console.log("questionIndex", questionIndex);
        console.log("questionNumber", questionNumber);

        console.log(questionIndex + 1);
        
        if(questionNumber === 10){
            console.log("changing to results page");
            history.push('/results');
            //console.log({answers});
            return;
        }
        setQuestNumb(questionNumber + 1)
        setQuestIndex(questionIndex + 1)

    }



    const handleFalseAns = () => {
        if(correctAns == 'False'){
            if(difficulty == 'hard') {
                setScore(score + 3)
            }else if(difficulty == 'medium') {
                setScore(score + 2)
            }else {
                setScore(score + 1)
            }

            alert("Yayy well done! You got it right! Let's go =)");
            dispatch(changeScore(finalScore + 1));
            //dispatch(registerAnswer("False"));
            //dispatch(registerAnswers(registerAnswer));
        }else{
            alert("Ohh bad luck! Good luck next time...");
            //dispatch(registerAnswer("True"));
            //dispatch(registerAnswers(registerAnswer));
        }

        console.log("moving to the next question");
        console.log("questionIndex", questionIndex);
        console.log("questionNumber", questionNumber);

        console.log(questionIndex + 1);
        
        if(questionNumber === 10){
            console.log("changing to results page");
            history.push('/results');
            //console.log({answers});
            return;
        }
        setQuestNumb(questionNumber + 1)
        setQuestIndex(questionIndex + 1)

    }

    
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

                    <p>Timer: {minutesCounter}:{secondsCounter}</p>
                </div>
            
            </div>

        
    )
}

export default Questions;