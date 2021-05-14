import React from 'react'
import Film from './Film'

function Results({results, openPopup}) {
    return (
        <section className="results">
            {results.map(result => (
                <Film key={result.imdbID} result={result} openPopup={openPopup} />
            ))}
        </section>
     
    )
}

export default Results
