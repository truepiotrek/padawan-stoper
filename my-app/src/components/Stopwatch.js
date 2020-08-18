import React, {useEffect, useState} from "react";
import Dump from "./dump";

function Stopwatch() {
    const [timer, setTimer] = useState(null);
    const [timerOn, setTimerOn] = useState(false);
    const [timerStart, setTimerStart] = useState(0);
    const [timerTime, setTimerTime] = useState(0);

    function startTimer() {
        setTimerOn(true);
        setTimerStart(Date.now() - timerTime);
    }

    function stopTimer() {
        setTimerOn(false);
        clearInterval(timer);
        setTimer(null);
    }

    function resetTimer() {
        stopTimer();
        setTimerStart(0);
        setTimerTime(0);
    }

    useEffect(function() {
        console.log(timerOn);
        if (timerOn === true) {
            setTimer(setInterval(() => { setTimerTime(Date.now() - timerStart); }, 10));
        }
    },[timerOn]);

    function startClickHandler() {
        if(timerOn === true) {
            stopTimer();
        } else {
            startTimer();
        }
    }

    function renderName() {
        if(timerOn === true) {
            return 'STOP';
        } else {
            return 'START';
        }
    }

    function translateTimerTime() {
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <> {hours} : {minutes} : {seconds} : {centiseconds} </>
        )
    }

    return (
        <div className="stopwatch">
            <button className="timer-button" onClick={startClickHandler}>
                {renderName()}
            </button>

            <button className="timer-button" onClick={resetTimer}>
                RESET
            </button>
            <div className="stopwatch-container">
                {translateTimerTime()}
            </div>
            <Dump value={timerOn} label="timerOn"/>
            <Dump value={timerStart} label="timerStart"/>
            <Dump value={timerTime} label="timerTime"/>
            <Dump value={timer} label="timer"/>
        </div>
    )
}

export default Stopwatch;