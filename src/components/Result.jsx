import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { changeScore, registerAnswers, changeMinutes, changeSeconds } from '../store/actions';

import "../style/styles.scss";


const Results = () => {

    const finalScore = useSelector(state => state.score.finalScore); //é o escutador do estado global
    const seconds = useSelector(state => state.score.seconds);
    const minutes = useSelector(state => state.score.minutes);
    const answers = useSelector(state => state.answer.answers);

    const dispatch = useDispatch();

    const history = useHistory();


    const handlePlayAgain = () => {
        dispatch(changeScore(0));
        dispatch(changeMinutes(0));
        dispatch(changeSeconds(0));
        dispatch(registerAnswers([""]));
        console.log("starting a new game");
        history.push('/');
        return;
    }


    console.log(answers);

    return (
        <div className="screen">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
            </style>
            
            <div className="results">
                <div className="container">
                    <h2>Results</h2>
                    
                    <div className="info">
                        <p>You got {finalScore} questions right out of 10</p>
                        <p>You took {minutes}:{seconds} to answer all the questions</p>
                    </div>

                    <div className="ans_chosen">
                        <h4>Answers Chosen:</h4>

                        <ol className="ans_numb">

                            { answers.map((answer, index) => <li key={index}>{answer}</li>) }

                            
                        </ol>
                    </div>


                    <button className="btn_playAgain" onClick={handlePlayAgain}>Play again</button>
                </div>
            </div>
        </div>
    )
}

export default Results;