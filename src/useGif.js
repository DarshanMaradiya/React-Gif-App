import {useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif, setGif] = useState('https://wallpapercave.com/wp/wp2757847.gif');

    const fetchGif = async (tag) => {
        console.log("Fetching new " + tag + " gif");
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
    }
    
    return { gif, fetchGif };
};

export default useGif;