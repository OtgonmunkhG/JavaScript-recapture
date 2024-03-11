import { useEffect } from "react";

export default function Simple ()  {
    const URL = 'https://api.artic.edu/api/v1/artworks/search?q=cats';

    useEffect( () => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data)
        })
    }, [])

    return(
        <div>

        </div>
    )
}