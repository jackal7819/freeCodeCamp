import React from 'react';

function Quote({ quote }) {
    return (
        <div className='quote'>
            <div className='anime' title={quote.anime}>
                {quote.anime}
            </div>

            <blockquote id="text">{quote.quote}</blockquote>

            <div className='character' title={quote.character} id="author">
                {quote.character}
            </div>
        </div>
    );
}

export default Quote;
