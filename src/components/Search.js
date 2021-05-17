import React from 'react'


// function popupFunction() {
//    alert("Please fill in search field!");
//   }
//   onKeyPress="popupFunction()"

function Search({handleInput, search}) { //istraukiama handleInput informacija
    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                placeholder="Search for a movie..." 
                className="searchbox" 
                onChange={handleInput} 
                onKeyPress={search}
                />
        </section>
          
    )
}

   

         
//  render() {
//     const { results } = this.state;

//                 {results.length > 0 ? (
//     results.map(result => (
//         <Film result={result} key={result.imdbID} />
//                 ))
//             ) : (
//                 <p>
//                     Couldn't find any movie. Please search again using
//                     another search criteria.
//                 </p>
//             )}
//             }


export default Search
