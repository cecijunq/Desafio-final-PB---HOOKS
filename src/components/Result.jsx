import React from "react";
import { useHistory } from "react-router-dom";

const Results = () => {
    const history = useHistory();

    const handlePlayAgain = () => {
        console.log("starting a new game");
        history.push('/');
        return;
    }

    return (
        <div>
            <h2>Results</h2>



            <button onClick={handlePlayAgain}>Play again</button>
        </div>
    )
}

export default Results;