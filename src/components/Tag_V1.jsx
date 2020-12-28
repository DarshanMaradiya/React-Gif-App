import React, {useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = (props) => {
    const [gif, setGif] = useState('https://wallpapercave.com/wp/wp2757847.gif');
    const [tag, setTag] = useState('deadpool');

    const fetchGif = async (tag) => {
        console.log("Fetching new " + tag + " gif");
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(url);
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
    }

    useEffect(() => {
        fetchGif(tag);
    }, []);

    const handleClick = () => {
        fetchGif(tag);
    };

    return (
        <div className="container">
            <h1> Random {tag} Gif </h1>
            <img src={ gif } width="500" height="400" onClick={ () => props.onClick(gif) } alt="Random Tag gif"/>
            <input value={ tag } onChange={ (e) => setTag(e.target.value) } />
            <button onClick={ handleClick }>Get new Gif!</button>      
        </div>
    );
};

export default Tag;