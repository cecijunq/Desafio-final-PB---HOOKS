import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeScore, registerAnswers, changeMinutes, changeSeconds } from '../store/actions';

import axios from "axios";
import Results from "./Result";

import "../style/styles.scss";

const Questions = () => {

    const finalScore = useSelector(state => state.score.finalScore); //é o escutador do estado global
    const seconds = useSelector(state => state.score.seconds);
    const minutes = useSelector(state => state.score.minutes);
    const answers = useSelector(state => state.answer.answers);

    const dispatch = useDispatch(changeScore(), registerAnswers(), changeMinutes(), changeSeconds());

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


    const axiosData = async () => {
        const datas = await axios.get("https://opentdb.com/api.php?amount=10&type=boolean").then(({data}) => {
            setQuestions(data.results[0].question)
            setCategory(data.results[0].category)
            setDifficulty(data.results[0].difficulty)
            setCorrectAns(data.results[0].correct_answer)
        });
    };

    useEffect(() => {

        // axios.get("https://opentdb.com/api.php?amount=10&type=boolean").then(({data}) => {
        //     setQuestions(data.results[0].question)
        //     setCategory(data.results[0].category)
        //     setDifficulty(data.results[0].difficulty)
        //     setCorrectAns(data.results[0].correct_answer)
        // });
        axiosData();
    }, [questionNumber]);


    //setting the timer of seconds
    useEffect(() => {
        secondsCounter < 60 && setTimeout(() => {
            setSecondsCounter(secondsCounter + 1);
            dispatch(changeSeconds(seconds + 1))
        }, 1000);
    }, [secondsCounter]);


    //setting the timer of minutes
    useEffect(() => {
        if(secondsCounter == 60) {
            setSecondsCounter(0);
            setMinutesCounter(minutesCounter + 1);
            dispatch(changeMinutes(minutes + 1));
        }
    }, [secondsCounter, minutesCounter]);


    // useEffect(() => {
    //     let TrueBtn = document.querySelector("#btn_True");
    //     let FalseBtn = document.querySelector("#btn_False");

    //     if(TrueBtn.onClick){
    //         dispatch(registerAnswers("True"));
    //     }else if(FalseBtn.onClick){
    //         dispatch(registerAnswers("False"));
    //     }
    // }, [questions]);


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
            dispatch(changeScore(finalScore + 1));

            dispatch(registerAnswers("True"));
        } else {
            alert("Ohh bad luck! Good luck next time...");

            dispatch(registerAnswers("False"));
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
            if(difficulty == 'hard') {
                setScore(score + 3)
            }else if(difficulty == 'medium') {
                setScore(score + 2)
            }else {
                setScore(score + 1)
            }

            alert("Yayy well done! You got it right! Let's go =)");
            dispatch(changeScore(finalScore + 1));

            dispatch(registerAnswers("False"));
        }else{
            alert("Ohh bad luck! Good luck next time...");

            dispatch(registerAnswers("True"));
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

    
    console.log(correctAns);


    return (
        <div>
            <div className="container">
                <h2>Question: {questionNumber} / 10</h2>
                <h3 className="score">Score: {score}</h3>
            </div>

                

            <div className="details_quest">
                <p>{category}</p>
                <p>{difficulty}</p>
                <p>{questions}</p>


                <div className="btn_ans">
                    <button className="btn_Answer" id="btn_True" onClick={handleTrueAns}>True</button>
                    <button className="btn_Answer" id="btn_False" onClick={handleFalseAns}>False</button>
                    <p>Timer: {minutesCounter}:{secondsCounter}</p>
                </div>

            </div>
            
        </div>

        
    )
}

export default Questions;