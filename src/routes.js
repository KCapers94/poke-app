import App from './components/App';
import Home from "./components/Home";
import About from "./components/About";
import Pokemon from "./components/Pokemon";
import PokeForm from './components/Pokeform';
//import PokeCard from './components/PokeCard';


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
                element: <Pokemon />
                // children: [
                //     {
                //         path:'/pokemon',
                //         element: <PokeCard />
                //     }
                // ]
            },

            {
                path: '/pokeform', 
                element: <PokeForm />
            } 
        ]
    }

]

export default routes;