import React from "react"
import { Outlet, useOutletContext } from "react-router-dom";



function Home() {
    

    return (
       <div> 
        <main>
             <h1>Home Page!</h1>
             <Outlet />
        </main>
       </div> 
    )
}

export default Home