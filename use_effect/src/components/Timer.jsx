import { useEffect, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning])



    function handleClick() {
        setIsRunning(!isRunning);
    }
    console.log(count)
    return (
        <div>
            <button className="border-1 rounded-xl" onClick={handleClick} >{isRunning ? 'Stop' : 'Start'}</button>
            <div>{count}</div>
        </div>
    )
}