import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { changeScore, registerAnswers, changeMinutes, changeSeconds, clearArray } from '../store/actions';

import "../style/styles.scss";


const Results = () => {

    const finalScore = useSelector(state => state.score.finalScore); //é o escutador do estado global
    const seconds = useSelector(state => state.score.seconds);
    const minutes = useSelector(state => state.score.minutes);
    const answers = useSelector(state => state.answer.answers);

    const dispatch = useDispatch();

    const history = useHistory();


    const handlePlayAgain = () => {
        history.push('/');
        dispatch(changeScore(0));
        dispatch(changeMinutes(0));
        dispatch(changeSeconds(0));
        dispatch(clearArray());
        dispatch(registerAnswers([]));
        console.log("starting a new game");
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

                            <div className="ans_part1">
                                { answers.map((answer, index) => index >= 0 && index < 5 ? <li key={index}>{answer}</li> : console.log("ans part 1")) }
                            </div>
                            
                            <div className="ans_part2">
                                { answers.map((answer, index) => index >= 5 && index < 10 ? <li key={index}>{answer}</li> : console.log("ans part 1")) }
                            </div>
                            
                            
                        </ol>
                    </div>


                    <button className="btn_playAgain" onClick={handlePlayAgain}>Play again</button>
                </div>
            </div>
        </div>
    )
}

export default Results;