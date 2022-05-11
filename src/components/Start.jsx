import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../style/styles.scss";

const Start = () => {
    const [page, setPage] = useState([]);

    const history = useHistory();
    const handleChangingPage = path => {
        console.log("changing the website page");
        history.push('/questions');
        console.log("changing the website page AFTER");
    };

    return (
        <div className="container">
            <h2>Welcome</h2>
           
           <div className="intro">
                <p>This is Pingback Trivia Game</p>
    
                <p>You will receive 10 questions. Can you answer them correctly?</p>
    
                <p>When you are ready, click on the button below</p>
    
                <button className="btn_start" onClick={handleChangingPage}>START</button>
           </div>
        </div>
    )
}

export default Start;