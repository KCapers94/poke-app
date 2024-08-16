import { NavLink } from react-router-dom



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
        </nav>
    );
}



export default NavBar