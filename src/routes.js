import App from './App';
import Home from "./pages/Home";
import About from "./pages/About";
import Pokemon from "./pages/Pokemon";
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
                element: <Pokemon />
            },
            {
                path: '/pokeform', 
                element: <PokeForm />
            } 
        ]
    }

]

export default routes;