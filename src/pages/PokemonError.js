import { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom"

export default function PokemonError() {
    const error = useRouteError();

    useEffect(() => {
        document.title = `PogDex - Error`;
    }, []);

    return (
        <div className="error detail">
            <h2>Error!</h2>

            <p>{error.message}</p>
            <p>Go back to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}
