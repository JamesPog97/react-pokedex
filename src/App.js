import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

// layouts
import PokedexLayout from "./layouts/PokedexLayout";

// pages
import SearchBar, { pokedexLoader } from "./pages/SearchBar";
import PokemonDetailsLayout from "./layouts/PokemonDetailsLayout";
import PokemonDetails, { pokemonDetailsLoader } from "./pages/PokemonDetails";
import NotFound from "./pages/NotFound";
import PokemonError from "./pages/PokemonError";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PokedexLayout />} errorElement={<PokemonError />} >
            <Route
                index
                element={<SearchBar />}
                loader={pokedexLoader}
            />
            <Route path="pokemon" element={<PokemonDetailsLayout />}>
                <Route
                    path=":num"
                    element={<PokemonDetails />}
                    loader={pokemonDetailsLoader}
                    errorElement={<PokemonError />}
                />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
