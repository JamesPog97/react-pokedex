import { useEffect } from "react";
import Card from "./Card";
// import Loading from "./Loading";

export default function Pokedex({ pokemons }) {
    useEffect(() => {
        document.title = `PogDex - Homepage`;
    }, []);

    return (
        <div id="pokedex">
            {
                // isPending ?
                // <Loading />
                //     :
                pokemons.map((pokemon) => (
                    <Card key={pokemon.num} pokemon={pokemon} />
                ))
            }
        </div>
    );
}
