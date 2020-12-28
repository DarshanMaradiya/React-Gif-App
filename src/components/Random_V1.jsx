import React, {useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = (props) => {
    const [gif, setGif] = useState('https://wallpapercave.com/wp/wp2757847.gif');

    const fetchGif = async () => {
        console.log("Fetching new random gif");
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const { data } = await axios.get(url);
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
    }

    useEffect(() => {
        fetchGif();
    }, []);

    const handleClick = () => {
        fetchGif();
    };

    return (
        <div className="container">
            <h1> Random Gif </h1>
            <img src={ gif } width="500" height="400" onClick={ () => props.onClick(gif) } alt="Random gif"/>
            <button onClick={ handleClick }>New Random!</button>
        </div>
    );
};

export default Random;