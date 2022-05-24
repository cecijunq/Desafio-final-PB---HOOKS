import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { changeScore, registerAnswers, registerAnswer, changeMinutes, changeSeconds } from '../store/actions';


const Results = () => {

    const finalScore = useSelector(state => state.score.finalScore); //é o escutador do estado global
    const seconds = useSelector(state => state.score.seconds);
    const minutes = useSelector(state => state.score.minutes);
    const answers = useSelector(state => state.answer.answers);

    //const [myAnswer, setMyAnswer] = useState(new Map());

    const dispatch = useDispatch(changeScore(), registerAnswers(), changeMinutes(), changeSeconds());

    const history = useHistory();


    const handlePlayAgain = () => {
        dispatch(changeScore(0));
        dispatch(changeMinutes(0));
        dispatch(changeSeconds(0));
        console.log("starting a new game");
        history.push('/');
        return;
    }

    // const mapAnswers = () => {
    //     const updateMap = (k, v) => {
    //         setMyAnswer (new Map(myAnswer.set(k, v)));
    //     }
    // }

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
                            {/* {[...myAnswer.keys()].map(k => (
                                <li>myAnswer.get(k)</li>
                            ))} */}

                            

                            <div className="resultPart1">
                                <li>{registerAnswers[0]}</li>
                                <li>{registerAnswers[1]}</li>
                                <li>{registerAnswers[2]}</li>
                                <li>{registerAnswers[3]}</li>
                                <li>{registerAnswers[4]}</li>
                            </div>

                            <div className="resultPart2">
                                <li>{registerAnswers[5]}</li>
                                <li>{registerAnswers[6]}</li>
                                <li>{registerAnswers[7]}</li>
                                <li>{registerAnswers[8]}</li>
                                <li>{registerAnswers[9]}</li>
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