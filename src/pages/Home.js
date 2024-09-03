import React from "react"



function Home() {
    
    const mew = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRuTwzRiVstXO1nH2OaEibTK4Wh_zWjXE_g&s"


    return (
       <div> 
        <main>
             <h1>Poke Fans!</h1>
             <img src={mew} alt="mew" className="mew"/>
        </main>
       </div> 
    )
}

export default Home