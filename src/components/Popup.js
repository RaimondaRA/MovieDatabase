import React from 'react'

function Popup({selected, closePopup}) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title}<span>({selected.Year})</span></h2>
                <p className="genre">{selected.Genre}</p>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                     <img src={selected.Poster}/>
                    <p>{selected.Plot}<span>({selected.Runtime})</span></p>
                </div>
                <div>
                    
                    <p>Director: {selected.Director}</p>
                    <p className="actors">Actors: {selected.Actors}</p>
                    <p>Language: {selected.Language}</p>
                    <p>Country: {selected.Country}</p>    
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}
export default Popup
