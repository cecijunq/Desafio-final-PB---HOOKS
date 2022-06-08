import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeScore, registerAnswers, changeMinutes, changeSeconds } from '../store/actions';
// import Timer from "./Timer";

import axios from "axios";

import "../style/styles.scss";


const Questions = () => {

    const finalScore = useSelector(state => state.score.finalScore); //é o escutador do estado global
    const seconds = useSelector(state => state.score.seconds);
    const minutes = useSelector(state => state.score.minutes);
    const answers = useSelector(state => state.answer.answers);

    const dispatch = useDispatch();

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
        axiosData();
    }, [questionNumber]);


    //setting the timer of seconds
    useEffect(() => {
        secondsCounter < 60 && setTimeout(() => {
            setSecondsCounter(secondsCounter + 1);
            dispatch(changeSeconds(secondsCounter))
        }, 1000);
    }, [secondsCounter]);


    //setting the timer of minutes
    useEffect(() => {
        if(secondsCounter == 60) {
            setSecondsCounter(0);
            setMinutesCounter(minutesCounter + 1);
            dispatch(changeMinutes(minutesCounter));
        }
    }, [secondsCounter, minutesCounter]);


    const handleTrueAns = () => {
        if(correctAns == 'True') {
            if(difficulty == 'hard') {
                setScore(score + 3)
            }else if(difficulty == 'medium') {
                setScore(score + 2)
            }else {
                setScore(score + 1)
            }
            
            alert("Yayy well done! You got it right! Let's go =)");
            dispatch(changeScore(finalScore + 1));
            
            console.log("answers ->", answers);
            
        } else {
            alert("Ohh bad luck! Good luck next time...");
            
            console.log("answers ->", answers);
        }


        const answerPayload = { 
            answer: "True",
            correct: correctAns
        }
        
        dispatch(registerAnswers(answerPayload));
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


            console.log("answers ->", answers);
        }else{
            alert("Ohh bad luck! Good luck next time...");


            console.log("answers ->", answers);
        }

        const answerPayload2 = { 
            answer: "False",
            correct: correctAns
        }

        dispatch(registerAnswers(answerPayload2));

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


    return (
        <div className="screen">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
            </style>

            <p className="timer">Timer: {minutesCounter}:{secondsCounter < 10 ? 0 : ''}{secondsCounter}</p>

            <div className="questions">
                <div className="container">
                    <h2>Question: {questionNumber} / 10</h2>
                    <p className="timer">Timer: {minutesCounter}:{secondsCounter < 10 ? 0 : ''}{secondsCounter}</p>
                    <h3 className="score">Score: {score}</h3>
                </div>
               

                    

                <div className="details_quest">
                    <p>{category}</p>
                    <p>{difficulty}</p>
                    <p>{questions}</p>


                    <div className="btn_ans">
                        <button className="btn_Answer" id="btn_True" onClick={handleTrueAns}>True</button>
                        <button className="btn_Answer" id="btn_False" onClick={handleFalseAns}>False</button>
                        {/* <p className="timer">Timer: {minutesCounter}:{secondsCounter < 10 ? 0 : ''}{secondsCounter}</p> */}
                    </div>
                    

                </div>
            </div>
            
        </div>

        
    )
}

export default Questions;