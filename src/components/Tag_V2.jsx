import React, {useState, useEffect } from 'react';
import useGif from '../useGif';

const Tag = (props) => {
    const [tag, setTag] = useState('deadpool');
    const { gif, fetchGif } = useGif(tag);
    
    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    return (
        <div className="container">
            <h1> Random {tag} Gif </h1>
            <img src={ gif } width="500" height="400" onClick={ () => props.onClick(gif) } alt="Random Tag gif"/>
            <input value={ tag } onChange={ (e) => setTag(e.target.value) } />
            <button onClick={ () => { fetchGif(tag) } }>Get new Gif!</button>
            
        </div>
    );
};

export default Tag;