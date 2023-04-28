import React, {useEffect, useState} from 'react';
import {handleFormat} from "./functions/handleFormat.ts";

const App: React.FC = () => {

    const [seconds, setSeconds] = useState<number | null>(null);
    const [start, setStart] = useState<boolean>(false);

    const handleChange = (value:string):void => {
        if (!value) {
            setSeconds(null)
            return;
        }
        const filteredValue = value.replace(/[^\d;]/g, '');
        setSeconds(Number(filteredValue))
    }

    useEffect(() => {
        if (!start || !seconds) return;

        const interval = setInterval(() => {
            //@ts-ignore
            setSeconds(prev => prev - 1)
        },1000)
        return () => clearInterval(interval)
    },[start,seconds])

    return (
        <div>
            <input
                placeholder="Seconds"
                type="number"
                value={seconds === null ? "" : seconds}
                onChange={e => handleChange(e.target.value)}
            />

            <button disabled={!seconds} onClick={() => setStart(prev => !prev)}>
                {start ? "Stop" : "Start"}
            </button>

            <br />
            <br />

            <span>
                {handleFormat(seconds)}
            </span>
        </div>
    );
};

export default App;
