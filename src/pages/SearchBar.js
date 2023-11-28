import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Pokedex from "../components/Pokedex";

export default function SearchBar() {
    const pokemons = useLoaderData();
    const [filtered, setFiltered] = useState(pokemons);

    const research = (e) => {
        const searchInput = e.target.value;
        if (searchInput === "") setFiltered(pokemons);
        else if (searchInput.toLowerCase().startsWith("type:")) {
            let type = searchInput.toLowerCase().replace("type:", "");
            type = type.charAt(0).toUpperCase() + type.slice(1);

            setFiltered(pokemons.filter(pkmn => {
                return pkmn.variations[0].types.indexOf(type) !== -1;
            }));
        } else if (searchInput.startsWith("#")) {
            let number = searchInput.replace("#", "");

            setFiltered(pokemons.filter(pkmn => {
                return pkmn.num === Number(number);
            }));
        } else {
            setFiltered(pokemons.filter(pkmn => {
                return pkmn.name.startsWith(searchInput.charAt(0).toUpperCase() + searchInput.slice(1));
            }));
        }
    }

    return (
        <>
            <div id="filter">
                <input
                    type="text"
                    onChange={(e) => research(e)}
                    placeholder="Search for name, number or type (es. charmander, #4 o type:fire)"
                    id="search-bar"
                />
            </div>

            <Pokedex
                pokemons={filtered}
            />
        </>
    );
}


// loader function
export const pokedexLoader = async () => {
    const res = await fetch("/data/pokemon.json");

    if (!res.ok) throw Error("Could not fetch Pokémon data.");

    return res.json();
}