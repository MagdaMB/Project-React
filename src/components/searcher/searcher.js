import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Searcher.scss";

const Searcher = () => {

    const [photo, setPhoto] = useState("");
    const clientId = "Mcb8Zcr6pO6evQItPAmLkyQxWJqQX84RoJQ-QK-R5I0";

    const [listOfPhotos, setlistOfPhotos] = useState([]);

    function handleChange(event) {
        setPhoto(event.target.value);
        console.log(event.target.value);
    }

    const url = "https://api.unsplash.com/search/photos?query=" + photo + "&client_id=" + clientId;
    function handleSubmit() {
        console.log(photo);

        axios.get(url)
            .then((response => {
                setlistOfPhotos(response.data.results);
            }))
    }

    return (
        <Router>
            <div className="searcher">
                <h1>Hello</h1>
                <p>Search images...</p>
                <input onChange={handleChange} type="text" className="searcher--input" placeholder="type sth" />
                <Link to="/results" onClick={handleSubmit} type="submit" class="button">Find Images</Link>

                <div className="listOfImages">
                    {listOfPhotos.map((photo) => (
                        <div><img key={photo.id} src={photo.urls.thumb} alt="" /></div>
                    ))}
                </div>
            </div>
        </Router>
    )
}

export default Searcher;