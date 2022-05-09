import logo from './logo.svg';
import './App.css';

//image sega
const imageSrcSega = "https://i.imgur.com/EOwGBFH.png"

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edita <code>src/App.js</code> and save to reload.
        </p>
        <img src={imageSrcSega} alt="Sega" width="50%" />
        <a
          className="App-link"
          href="https://github.com/Oen844"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Sega<br></br> 
          ponte a estudiar {props.saludo}
          
        </a>
      </header>
    </div>
  );
}

export default App;
