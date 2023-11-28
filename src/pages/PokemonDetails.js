import { nanoid } from "nanoid";
import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"

export default function PokemonDetails() {
    const { num } = useParams();
    const pokemon = useLoaderData();
    const pokemonDetails = pokemon.variations[0];

    useEffect(() => {
        document.title = `PogDex - ${pokemon.name}`;
    }, [pokemon.name]);

    return (
        <>
            <div className="name-image">
                <h3>{pokemon.name}</h3>

                <div className="image">
                    <img
                        src={`/images/${num.padStart(3, "0")}.png`}
                        alt={pokemon.name}
                    />
                </div>
            </div>

            <div className="description">
                <h3>Description:</h3>
                <p>{pokemonDetails.description}</p>
            </div>

            <div className="pokedex-data">
                <h3>Pokédex Data</h3>
                <div className="number">
                    <h4>National N°:</h4>
                    <span>{num.padStart(3, "0")}</span>
                </div>

                <div className="type">
                    <h4>Type:</h4>
                    {
                        <span style={{ background: `var(--${pokemonDetails.types[0]})` }}>
                            {pokemonDetails.types[0]}
                        </span>
                    }
                    {
                        pokemonDetails.types[1] &&
                        <span style={{ background: `var(--${pokemonDetails.types[1]})` }}>
                            {pokemonDetails.types[1]}
                        </span>
                    }
                </div>

                <div className="species">
                    <h4>Species:</h4>
                    <span>{pokemonDetails.specie}</span>
                </div>

                <div className="height">
                    <h4>Height:</h4>
                    <span>{pokemonDetails.height}m</span>
                </div>

                <div className="weight">
                    <h4>Weight:</h4>
                    <span>{pokemonDetails.weight}kg</span>
                </div>

                <div className="abilities">
                    <h4>Abilities:</h4>
                    <ol>
                        {pokemonDetails.abilities.map(ability => (
                            <li key={nanoid()}>{ability}</li>
                        ))}
                    </ol>
                </div>
            </div >

            <div className="stats">
                <h3>Base Stats:</h3>
                {Object.keys(pokemonDetails.stats).map(stat => (
                    <span key={nanoid()}>{stat}: {pokemonDetails.stats[stat]}</span>
                ))}
            </div>

            <div className="buttons">
                <div className="home">
                    <Link to="/"><button>Home</button></Link>
                </div>

                <div className={`prev${parseInt(num) === 1 ? " disabled" : ""}`}>
                    <Link to={`/pokemon/${parseInt(num) - 1}`}><button>Prev</button></Link>
                </div>

                <div className={`next${parseInt(num) === 809 ? " disabled" : ""}`}>
                    <Link to={`/pokemon/${parseInt(num) + 1}`}><button>Next</button></Link>
                </div>

            </div>
        </>
    )
}

export const pokemonDetailsLoader = async ({ params }) => {
    const { num } = params;

    const res = await fetch("/data/pokemon.json");
    const pokemons = await res.json();

    if (!pokemons[num - 1]) throw Error("The Pokémon data you are searching for is not available at the moment.");

    return pokemons[num - 1];
}