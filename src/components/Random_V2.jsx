import React, { useEffect } from 'react';
import useGif from '../useGif';

const Tag = (props) => {
    const { gif, fetchGif } = useGif();
    
    useEffect(() => {
        fetchGif();
    }, []);

    return (
        <div className="container">
            <h1> Random Gif </h1>
            <img src={ gif } width="500" height="400" onClick={ () => props.onClick(gif) } alt="Random Tag gif"/>
            <button onClick={ fetchGif }>Get new Gif!</button>
        </div>
    );
};

export default Tag;