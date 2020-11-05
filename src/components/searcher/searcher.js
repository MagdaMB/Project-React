import React, { useState } from 'react';
import axios from 'axios';

function Searcher() {

    const [photo, setPhoto] = useState("");
    const [clientId, setClientId] = useState("Mcb8Zcr6pO6evQItPAmLkyQxWJqQX84RoJQ-QK-R5I0");

    const [result, setResult] = useState([]);

    function handleChange(event) {
        setPhoto(event.target.value);
    }

    function handleSubmit(event) {
        console.log(photo);
        const url = "https://api.unsplash.com/photos?page=1&query=" + photo + "&client_id=" + clientId;

        axios.get(url)
            .then((response => {
                console.log(response);
                setResult(response.data.results);
            }))
    }
    return (
        <div>
            <h1>Hello</h1>
            <p>Type and choose wath you want</p>
            <input onChange={handleChange} type="text" className="searcher--input" placeholder="type sth" />
            <button onClick={handleSubmit} type="submit">Find Images</button>

            {result.map((photo) => (
                <img src={photo.urls.small} />
            ))}
        </div>
    )
}

export default Searcher;