import { useEffect, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(null);


    useEffect(() => {
        setInterval(() => {
            handleClick()
        }, 1000);    }, [])

    

    function handleClick() {
        setCount(count + 1)
    }
    console.log(count)
    return (
        <div>
            <button className="border-1 rounded-xl"  >Start</button>
            <div>{count}</div>            
        </div>
    )
}