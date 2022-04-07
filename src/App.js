import videoApi from './core/api/videoApi';
import Home from './pages/Home/Home';

function App() {

  videoApi.getAll()
    .then(data => console.log(data));

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
