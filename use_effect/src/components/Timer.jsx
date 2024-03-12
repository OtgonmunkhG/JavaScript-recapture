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
        <div className="mt-2 text-center">
            <button className="border-1 rounded-xl bg-emerald-300 p-4" onClick={handleClick} >{isRunning ? 'Stop' : 'Start'}</button>
            <div className="p-4">{count}</div>
        </div>
    )
}