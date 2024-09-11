import React from "react"



function Home() {
    
    const mew = "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/mew-pokemon-scarlet-and-violet-tera-raid-promo.jpg"


    return (
       <div> 
        <main>
             <h1>Welcome Poke Fans!</h1>
             <img src={mew} alt="mew" className="mew"/>
        </main>
       </div> 
    )
}

export default Home