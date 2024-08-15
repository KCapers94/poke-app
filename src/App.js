import './App.css';
import { pokemon } from './data';

function App() {
  console.log(pokemon)
  return (
    <div className="App">
      <h1> The PokePagent!!</h1>
      <img src={pokemon} alt="Mew" />
    </div>
  );
}

export default App;
