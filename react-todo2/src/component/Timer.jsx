import React, {useEffect, useState, useRef} from "react";
import formatTime from "./formatTime";
const Timer = () => {
    const [startTime, setStartTime] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isOn && time > 0) {
            const timerId = setInterval(() => {
                setTime(prev => prev - 1);
            }, 1000);
            timerRef.current = timerId;
            console.log(timerRef.current);
        } else if (!isOn || time == 0) {
            clearInterval(timerRef.current);
        }
    }, [isOn]);

    return (
        <div>
            <div>{time ? formatTime(time) : formatTime(startTime)}</div>
            <button
                onClick={() => {
                    setIsOn(true);
                    setTime(time ? time : startTime);
                    setStartTime(0);
                }}
            >
                시작
            </button>
            <button onClick={() => setIsOn(false)}>멈춤</button>
            <button
                onClick={() => {
                    setTime(0);
                    setIsOn(false);
                }}
            >
                리셋
            </button>
            <input
                type="range"
                value={startTime}
                ref={timerRef}
                min="0"
                max="3600"
                step="30"
                onChange={e => setStartTime(e.target.value)}
            />
        </div>
    );
};

export default Timer;
