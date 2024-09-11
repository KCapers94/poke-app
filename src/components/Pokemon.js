import React from "react"
import "./Pokemon.css"
import PokeCard from "./PokeCard";


function Pokemon({pokeData}) {


    return (
        <div className={"pokePics"} >
            <main>
                <h1>Pokemon of the Fans!</h1>
            {pokeData.map((items) => {
                return <PokeCard key={items.id} items={items} />
            })}
            </main>
        </div>
    );
}

export default Pokemon;