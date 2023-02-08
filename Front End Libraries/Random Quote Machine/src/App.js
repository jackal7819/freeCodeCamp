import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';

function App() {
    const [quote, setQuote] = useState({
        anime: null,
        character: null,
        quote: null,
    });

    const fetchQuote = async () => {
        return await fetch('https://animechan.vercel.app/api/random').then(
            (response) => response.json()
        );
    };

    const generate = async () => {
        setQuote(await fetchQuote());
    };

    useEffect(() => {
        async function fetchData() {
            setQuote(await fetchQuote());
        }
        fetchData();
    }, []);

    return (
        <div className='App' id="quote-box">
            <Quote quote={quote} />

            <button onClick={generate} id='new-quote'>
                Generate new quote
            </button>

			<a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote">Tweet this quote!</a>
        </div>
    );
}

export default App;
