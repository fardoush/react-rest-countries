import './App.css';

import { useDebugValue, useEffect, useState } from 'react';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
    <LoadCountries> </LoadCountries>
    </div>
  );
}


function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setCountries(data))
  }, [])
  return(
    <div className="">
      <h1 className="">Visiting Every Country of the World...!</h1>

      <h3 className="">Available Countries: {countries.length}</h3>
    </div>
  )
}
export default App;
