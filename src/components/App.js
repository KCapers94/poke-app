import React from "react"
import {useState, useEffect} from "react"
import './App.css';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import {Outlet} from "react-router-dom"





function App() {
  const navigate = useNavigate()

  const [pokeData, setPokeData] = useState([]);


  useEffect(() => {
      fetch("http://localhost:3000/pokemon")
      .then((r) => r.json())
      .then(data => setPokeData(data));
  }, []);


  function handleAddPokemon(newPoke) {
      setPokeData([...pokeData, newPoke])
  }

  
  
  return (
    <div className="App">
      <header>
        <NavBar  />
      </header>
      <Outlet context={[pokeData,handleAddPokemon]} />
    </div>
  );
}

export default App;
