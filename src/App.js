import './App.css';

import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">

    
<Countries></Countries>
  
    </div>
  );
}


// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     // .then(data => console.log(data))
//     .then(data => setCountries(data))
//   }, [])
//   return(
//     <div className="">
//       <h1 className="">Visiting Every Country of the World...!</h1>

//       <h3 className="">Available Countries: {countries.length}</h3>
//       {
//         // countries.map(country => <p>{country.name.common}</p>)
//         countries.map( country => <Country name={country.name.common} population={country.population}> </Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div className="">
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }
export default App;
