import React, {useState} from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';


function App() {
  const [state, setState] = useState ({
    s: "", //search uzklausa
    results: [],
    selected: {} //paspaudimas ant konkretaus filmo
  });
  
  const apiurl = "https://www.omdbapi.com/?apikey=e4db3ced&t=&i"; 

  const search = (e) => {
      if (e.key ==="Enter"){
          if (state.s!=="") {
      axios(apiurl + "&s=" + state.s).then(({data}) =>{ //atidaro duomenu baze nudojant api
        let results = data.Search;
        setState(prevState => { 
          return {...prevState, results: results}
        })
      }); 
    }
  else alert ("Couldn't find any movie. Please search again using another search criteria")
}
}
            
const handleInput = (e) => { //kai vedama reiksme i input lauka
  let s = e.target.value; //s - reiksme

  setState(prevState => {
    return { ...prevState, s: s} //paimama ankstesne reiksme. Pakeiciama s value s reiksme kuria gauname 33 eilutej
  });
}

const openPopup = id => {
  axios(apiurl + "&i=" + id).then(({data}) => {
    let result = data;

    console.log(result);

    setState(prevState => {
      return { ...prevState, selected: result}
    });
  });
}

const closePopup = () => {
  setState(prevState => {
    return { ...prevState, selected: {}}
  });
}

  return (
    <div className="App">
      <header>
        <h1>MOVIE DATABASE</h1>
      </header>
      <main>
      {/* perduodame parametra handleInput */}
        <Search handleInput = {handleInput} search = {search}/> 
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
        </main>
    </div>
  );
}

export default App;
