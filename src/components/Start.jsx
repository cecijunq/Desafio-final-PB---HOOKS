import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Start = () => {
    const [page, setPage] = useState([]);

    const history = useHistory();
    const handleChangingPage = path => {
        console.log("changing the website page");
        history.push(path);
    };

    // const handleChangingPage = () => {
    //     console.log("changing the website page");
    //     this.props.history.push('/questions');
    // }

    return (
        <>
                <h2>Welcome</h2>
           
                <p>This is Pingback Trivia Game</p>
 
                <p>You will receive 10 questions. Can you answer all right?</p>
 
                <p>When you are ready, click on the button below</p>
 
                <button onClick={() => handleChangingPage('/questions')}>START</button>
            </>
    )
}

export default Start;