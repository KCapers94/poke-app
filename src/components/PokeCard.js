import React from 'react'


function PokeCard({items}){

    return(
        <ul>
            <img className="PokemonPics" src={items.image} alt="pokemon" />
            <h2>{items.name}</h2>
            <h3>{items.type}</h3>
        </ul>
    )


}

export default PokeCard