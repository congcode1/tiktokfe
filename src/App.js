import logo from './logo.svg';
import './App.css';
import videoApi from './core/api/videoApi';
import VideoSession from './modules/VideoSession/VideoSession';

function App() {

  videoApi.getAll()
    .then(data => console.log(data));

  return (
    <div className="App">
      <VideoSession />
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
