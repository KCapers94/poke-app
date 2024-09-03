import { useOutletContext } from "react-router-dom";
import React from "react"
import "./Pokemon.css"


function Pokemon() {

    const [pokeData] = useOutletContext()

    return (
        <div className={"pokePics"} >
            <main>
                <h1>Pokemon of the Fans!</h1>
                { Array.isArray(pokeData) ? pokeData.map((data) => (
        <div key={data.id}>
            <img className="PokemonPics" src={data.image} alt="pokemon" />
            <ul>
                <h2 key={`${data.id}-name`}>{data.name}</h2>
                <h3 key={`${data.id}-type`}>{data.type}</h3>
            </ul>
        </div>
    )) : null}
            </main>
        </div>
    );
}

export default Pokemon;