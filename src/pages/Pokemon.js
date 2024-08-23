import { useOutletContext } from "react-router-dom";

function Pokemon() {

    const [pokeData] = useOutletContext()
    console.log(pokeData)

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