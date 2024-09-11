import App from './components/App';
import Home from "./components/Home";
import About from "./components/About";
import Pokemon from "./components/Pokemon";
import PokeForm from './components/Pokeform';


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/about',
                element: <About />
            },  
            {
                path: '/pokemon',
                element: <Pokemon />,
            },

            {
                path: '/pokeform', 
                element: <PokeForm />
            } 
        ]
    }

]

export default routes;