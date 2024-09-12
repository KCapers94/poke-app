import React from "react"
import "./Pokemon.css"
import {Outlet,useOutletContext} from "react-router-dom"
import PokeCard from "./PokeCard";


function Pokemon() {

    const [pokeData]  = useOutletContext()

    return (
        <div className={"pokePics"} >
            <main>
                <h1>Poke Pics!!</h1>
            {pokeData.map((items) => {
                return <PokeCard key={items.id} items={items}/> 
            })}
            </main>
        </div>
    );
}

export default Pokemon;