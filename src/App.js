import logo from './logo.svg';
import './App.css';
import  axios  from 'axios';

 console.log(process.env.REACT_APP_OMDBAPI_KEY)

    console.log(process.env.REACT_APP_URL+"?t=Terminator&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
    axios.get(process.env.REACT_APP_URL+"?t=Terminator&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
    .then(response=>console.log(response))
        .catch(error=>console.log(error))


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
