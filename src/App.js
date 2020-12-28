import React, {useState, useEffect } from 'react';
import Tag from './components/Tag_V1';
import Random from './components/Random_V2';
import LinkCopiedImg from './images/LinkCopied.png';
import './App.css';

const App = () => {
    const [linkCopied, setLinkCopied] = useState(false);

    useEffect(() => {
        setLinkCopied(linkCopied);
    }, [linkCopied]);

    const textToClipboard = (text) => {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    const displayMsg = (text) => {
        setLinkCopied(true);
        textToClipboard(text);
        setTimeout(() => setLinkCopied(false), 2000);
    };

    const styles = {
        width: "150px",
        height: "150px"
    }
    
    return (
        <>
            <h1>Gif App</h1>
            <div className="main-container">
                <Tag onClick={ displayMsg } />
                {linkCopied && <img style={ styles } src={ LinkCopiedImg } alt="Link Copied!"/>}
                <Random onClick={ displayMsg } />
            </div>
        </>
    );
}

export default App;