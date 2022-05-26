import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMinutes, changeSeconds } from '../store/actions';

import "../style/styles.scss";

const Timer = () => {
    const [secondsCounter, setSecondsCounter] = useState(0);
    const [minutesCounter, setMinutesCounter] = useState(0);

    const seconds = useSelector(state => state.score.seconds);
    const minutes = useSelector(state => state.score.minutes);

    const dispatch = useDispatch();
    
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

    return(
        <p>{minutesCounter}:{secondsCounter}</p>
    )
}

export default Timer;