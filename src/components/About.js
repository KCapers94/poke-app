import React from "react"



function About() {

    const aboutInfo = 

"Welcome to the Poke Fan App, the ultimate gathering place for all Pokémon enthusiasts! Whether you're a seasoned Trainer or just starting your journey, this is your space to share and celebrate everything you love about Pokémon.Here on the Poke Fan App, we encourage you to share cool, cute, or tough pictures of your favorite Pokémon. From iconic starters to legendary creatures, every Pokémon has a special place in our hearts, and we want to see yours!Our community is made up of passionate Pokémon lovers who all have their favorites. Whether you're a fan of Pikachu's charm, Charizard's power, or Eevee's versatility, this is the perfect platform to showcase your top picks and discover others' favorites as well.Join us in creating a vibrant, friendly space where we can all connect over our shared love for Pokémon. Share your most epic battles, cutest moments, and coolest catches with fellow fans. Let's celebrate the world of Pokémon together!Welcome to the Poke Fan App – where every Pokémon lover belongs."

    return(
        <div>
            <main>
                <h1 className="aboutUs">About Us!</h1>
                <h4>{aboutInfo}</h4>
            </main>
        </div>
    )
}

export default About