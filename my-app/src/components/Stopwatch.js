import React, {useState} from "react";

function Stopwatch() {

    const [timerOn, setTimerOn] = useState(false)
    const [timerStart, setTimerStart] = useState(0)
    const [timerTime, setTimerTime] = useState(0)

    function startTimer() {
        setTimerOn(true);

    }

    return (

        <div className="stopwatch">
            <p>
                This is my stopwatch yeaaaahbbboiiiiiiiiiii
            </p>

        </div>
    )
}

export default Stopwatch;