import { Link, Outlet } from "react-router-dom";

export default function PokedexLayout() {
    return (
        <div className="container">
            <header>
                <h1>
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="Pokémon Logo" />
                    </Link>
                </h1>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}
