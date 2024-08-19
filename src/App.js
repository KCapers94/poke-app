import React from "react"
import './App.css';
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Outlet} from "react-router-dom"





function App() {
  const navigate = useNavigate()



  return (
    <div className="App">
      <header>
        <NavBar  />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
