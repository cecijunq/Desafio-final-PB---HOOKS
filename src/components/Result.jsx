import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { changeScore, registerAnswers, registerAnswer, changeMinutes, changeSeconds } from '../store/actions';

import Questions from "./Questions";

const Results = (props) => {

    const finalScore = useSelector(state => state.finalScore);
    const answers = useSelector(state => state.answers);
    const answer = useSelector(state => state.answer);
    const seconds = useSelector(state => state.seconds);
    const minutes = useSelector(state => state.minutes);

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


    return (
        <div>
            <h2>Results</h2>
            
            <p>You got {finalScore} questions right out of 10</p>
            <p>You took {minutes}:{seconds} to answer all the questions</p>

            <h4>Answers Chosen:</h4>
            <ol>
                <li>{registerAnswers[0]}</li>
                <li>{registerAnswers[1]}</li>
                <li>{registerAnswers[2]}</li>
                <li>{registerAnswers[3]}</li>
                <li>{registerAnswers[4]}</li>
                <li>{registerAnswers[5]}</li>
                <li>{registerAnswers[6]}</li>
                <li>{registerAnswers[7]}</li>
                <li>{registerAnswers[8]}</li>
                <li>{registerAnswers[9]}</li>
            </ol>


            <button onClick={handlePlayAgain}>Play again</button>
        </div>
    )
}

export default Results;