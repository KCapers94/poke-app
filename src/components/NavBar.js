import { NavLink } from "react-router-dom"
import "./NavBar.css";


function NavBar () {

    return(
        <nav>
            <NavLink
                to="/"
                className="nav-link"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className="nav-link"
                >
                    About
                </NavLink>
                <NavLink
                    to="/pokemon"
                    className="nav-link"
                >
                    Pokemon
                </NavLink>
                <NavLink
                    to="/pokeForm"
                    className="nav-link"
                >
                    PokeForm
                </NavLink>
        </nav>
    );
}



export default NavBar