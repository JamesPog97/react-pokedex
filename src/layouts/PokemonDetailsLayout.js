import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function PokemonDetailsLayout() {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 809) + 1);

    const randomize = () => {
        const randomizer = Math.floor(Math.random() * 809) + 1;
        setRandomNumber(randomizer);
    }

    return (
        <div className="pokemon-details">
            <div className="header">
                <h2>Pokémon Details</h2>

                <div className="random">
                    <Link to={`/pokemon/${randomNumber}`}>
                        <button onClick={randomize}>Random</button>
                    </Link>
                </div>
            </div>

            <Outlet />
        </div>
    )
}
