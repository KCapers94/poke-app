
import React, { useState } from "react"
import { useOutletContext } from "react-router-dom";

function PokeForm() {

    const [, handleAddPokemon] = useOutletContext()
    
    

    const stockImage = "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/01/pokemon-unown-forms.jpg"
    const [imageUrl, setImageUrl] = useState("");
    const [newName, setNewName] = useState("")
    const [newType, setNewType] = useState("")


     function handleSubmit(event) {
        event.preventDefault()
        const poke = {
            name: newName,
            type: newType,
            image: imageUrl === " " ? stockImage : imageUrl
    };
    fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(poke),
    })
    .then((r) => r.json())
    .then((newPokemon) => handleAddPokemon(newPokemon));
}

    
    return(
        <form className="NewItem" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="imageInput">Image Url:</label>
                <input 
                    id="imageInput"
                    type="text"
                    placeholder="Enter image URL or leave blank for default image"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <label htmlFor="NameInput">Name</label>
                <input
                    name="text"
                    type="text"
                    placeholder=" "
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <label htmlFor="NameInput">Type</label>
                <input 
                    name="text"
                    type="text"
                    placeholder= " "
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}




export default PokeForm