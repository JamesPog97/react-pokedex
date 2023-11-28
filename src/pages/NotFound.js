import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {

    useEffect(() => {
        document.title = `PogDex - Not Found`;
    }, []);

    return (
        <div className="error not-found">
            <h2>Page not found!</h2>

            <p>Go back to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}
