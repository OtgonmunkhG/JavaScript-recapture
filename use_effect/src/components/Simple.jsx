import { useEffect, useState } from "react";

export default function Simple() {
    const URL = 'https://api.artic.edu/api/v1/artworks/search?q=cats';
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setData(data.data);
            })
    }, [])
    return (
        <div>
            {
                data && data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.title}</h1>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}