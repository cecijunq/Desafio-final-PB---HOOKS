import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {changeScore} from '../store/actions';

import Questions from "./Questions";

const Results = (props) => {

    //const resultsFinal = useSelector(state => state.score); //é o escutador do estado global
    //const dispatch = useDispatch();

    const history = useHistory();

    const handlePlayAgain = () => {
        console.log("starting a new game");
        history.push('/');
        return;
    }


    return (
        <div>
            <h2>Results</h2>
            
            <p>You got {props.score} questions right out of 10</p>
            <p>You took {props.counterMin}:{props.counter} to answer all the questions</p>


            <button onClick={handlePlayAgain}>Play again</button>
        </div>
    )
}

export default Results;