import React, { useEffect, useState } from "react";
import PokeForm from "../components/Pokeform";

function Pokemon() {
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
        <div>
            <main>
                <h1>Pokemon of the Fans!</h1>
                { Array.isArray(pokeData) ? pokeData.map((data) => (
        <div key={data.id}>
            <img src={data.image} alt="pokemon" />
            <ul>
                <p key={`${data.id}-name`}>{data.name}</p>
                <p key={`${data.id}-type`}>{data.type}</p>
            </ul>
        </div>
    )) : null}
            </main>
        </div>
    );
}

export default Pokemon;