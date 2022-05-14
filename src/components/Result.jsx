import React from "react";
import { useHistory } from "react-router-dom";
import Questions from "./Questions";

const Results = (props) => {
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